import { Command } from 'commander';
import * as dotenv from 'dotenv'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { HumanChatMessage } from 'langchain/schema'
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (question: string) => {
  return new Promise<string>((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

dotenv.config();

console.log(`Using deployment ${process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME}`);

const chat = new ChatOpenAI({
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
  temperature: 0.9,
})


// function to save string to file
function saveStringToFile(stringToSave: string, fileName: string) {
  const fs = require('fs');
  fs.writeFileSync(fileName, stringToSave, function (err: any) {
    if (err) return console.log(err);
    console.log(`Saved ${fileName}`);
  });
}


const sendChat = async (messages: HumanChatMessage[]) => {
  const data = await chat.call(messages);
  return data.text;
};

const sendChatMessage = async (content: string) => {
  const message = new HumanChatMessage(content);
  return sendChat([message]);
};

const sendChatMessages = async (content: string[]) => {
  const messages = content.map((message) => new HumanChatMessage(message));
  return sendChat(messages);
};

function usage() {
  console.log('Usage: cli [options]');
  console.log('Options:');
  console.log('  -m, --message <message>          Generic message to the chatbot. Cant be used with -s');
  console.log('  -c, --chat                       Start a chat with the LangChain service. Cant be used with -m');
  console.log('  -s, --save <filename_prefix>     Save chat response components to file, with filename prefix. Files will be saved as <filename_prefix>.<round>.<index>.txt|<detected extension>');
}

type LangMap = {
  [key: string]: string
}
const languges = {
  ts: 'typescript',
  sh: 'bash',
  py: 'python',
  js: 'javascript',
  html: 'html',
  c: 'c',
  cpp: 'cpp',
  java: 'java',
  cs: 'csharp',
} as LangMap;

function getKeyByValue( value: string): string | undefined {
  return Object.keys(languges).find(key => languges[key] === value);
}

function saveCodeBlocks(response: string, prefix: string, round: number): number {
  const codeBlocks = response.split(/```([\w-]+)?\n/);
  let nextExt: string | undefined = undefined;
  let counter = 0;
  for (const block of codeBlocks) {
    if (block !== undefined) {
      const ext = getKeyByValue(block);
      if (ext !== undefined) {
        nextExt = ext;
      } else {
        if (nextExt !== undefined) {
          saveStringToFile(block, `${prefix}.${round}.${counter}.${nextExt}`);
          nextExt = undefined;
        } else {
          saveStringToFile(block, `${prefix}.${round}.${counter}.txt`);
        }
        counter++;
      }
    }
  }
  return counter;
}

const program = new Command();

program
  .option('-m, --message <message>')
  .option('-s, --save <filename_prefix>')
  .option('-c, --chat')
  .action(async (options) => {
    if (options.chat) {
      console.log('Starting chat, write "exit" to end ...');
      let prompts = [];
      let chatcounter = 0;
      while (true) {
        const input = await prompt('You: ');
        if (input === 'exit') {
          console.log('Exiting chat...');
          process.exit(1);
        }
        prompts.push(input);
        const response = await sendChatMessages(prompts);
        if (options.save) {
          // save code blocks to file
          const counter = saveCodeBlocks(response, options.save, chatcounter);
          console.log(`Saved ${counter} blocks`);
          chatcounter++;
        }
        console.log(`Chatbot: ${response}`);
      }
    } else {

      // if message is not provided, exit with error
      if (!options.message) {
        console.log('Error: message is required if not entering chat mode!');
        usage();
        process.exit(1);
      }
      console.log(`Sending, ${options.message}!`);
      const response = sendChatMessage(options.message).then((response) => {
        if (options.save) {
          const counter = saveCodeBlocks(response, options.save, 0);
          console.log(`Saved ${counter} code blocks`);
        }
        console.log(response);
      });
    }
  });

program.parse(process.argv);
