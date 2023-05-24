# Solita GenAI Tool

## Introduction

Solita GenAI Tool is a software application designed for [briefly describe the purpose of the application]. This tool is structured into a frontend and backend, both of which are fundamental to the functionality of the application.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of npm and Node.js.
* You have a `Windows/Linux/Mac` machine.
* You have access to Azure OpenAI deployment, API keys, endpoints etc

### Azure OpenAI API Configuration  
  
Follow these steps to obtain API keys, endpoint URLs, and API versions when configuring connections to Azure OpenAI APIs:  
  
1. Create an Azure account  
  
If you don't have an Azure account, sign up for a free trial at https://azure.microsoft.com/en-us/free/.  
  
2. Sign in to the Azure portal  
  
Sign in to the Azure portal at https://portal.azure.com/ using your Azure account credentials.  
  
3. Create a new Cognitive Services resource  
  
a. In the left-hand menu, click on "Create a resource".  
b. In the search bar, type "Cognitive Services" and select it from the search results.  
c. Click the "Create" button to start creating a new Cognitive Services resource.  
  
4. Fill in the required details for your Cognitive Services resource  
  
a. Select your subscription.  
b. Create a new resource group or choose an existing one.  
c. Enter a unique name for your resource.  
d. Choose the appropriate region.  
e. Select the desired pricing tier.  
f. Read and agree to the terms and conditions.  
g. Click the "Create" button at the bottom of the page.  
  
5. Wait for deployment to finish  
  
Once the deployment process is complete, you will receive a notification. This may take a few minutes.  
  
6. Access API keys and endpoint URL  
  
a. Go to the "Resource" section in the Azure portal.  
b. Search for the Cognitive Services resource you just created and click on it.  
c. In the "Overview" tab, you will find the endpoint URL.  
d. To obtain the API keys, click on the "Keys and Endpoint" tab on the left-hand menu. You will see two API keys; you can use either of them to access the Azure OpenAI APIs.  
  
7. Identify the API version  
  
The API version is typically included in the API documentation. You can find the API version for the specific Azure OpenAI API you are using by visiting the official documentation at https://docs.microsoft.com/en-us/azure/cognitive-services/.  
  
Once you have gathered the API keys, endpoint URL, and API version, you can use them to configure connections to Azure OpenAI APIs in solita-genai. 

### Remember to keep your API keys secure and do not share them with unauthorized users.  


### Installing Solita GenAI Tool

To install Solita GenAI Tool, follow these steps:

```
git clone https://github.com/solita/solita-genai.git
```

#### Backend

```
# Navigate to backend directory (If applicable)
cd solita-genai

# Install dependencies
npm install
```

#### Frontend

```
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

## Usage

To use Solita GenAI Tool, follow these steps:

```
# Start the backend server (If applicable)
npm start

# In a new terminal window, navigate to frontend directory
cd frontend

# Start the frontend server
npm start
```

## Contributing

If you want to contribute to Solita GenAI Tool, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push to the original branch: `git push origin <project_name>/<location>`.
5. Create the pull request.

## Contact

If you want to contact the maintainers, you can reach them at `<contact_information>`.

## License

This project uses the following license: [MIT](<link_to_license>).

---

**Note:**
This is a generic template for the README.md file based on the information available and common practices for software projects. Please adjust it as necessary to fit the actual project requirements and details. For example, the backend setup steps may need modifications depending on how the backend is structured and run. You may also want to add more sections like `Features`, `Roadmap`, `Acknowledgements` etc. based on your project's needs.
