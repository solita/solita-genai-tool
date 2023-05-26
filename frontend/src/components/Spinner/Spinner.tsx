import styles from './spinner.module.scss'

function Spinner() {
  return (
    <>
      <div className={styles['lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Spinner
