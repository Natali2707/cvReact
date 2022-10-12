import styles from './cvApp.module.css';
import Avatar from './components/Avatar';
import Main from './components/Main';


function CvApp() {
  return (
    <div className={styles.app}>
      <Avatar/>
      <Main/>
    </div>
  );
}

export default CvApp;
