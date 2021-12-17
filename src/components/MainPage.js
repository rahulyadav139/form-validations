import styles from './MainPage.module.css';

import Form from './Form';
import React, { useState } from 'react';

const MainPage = props => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const submitValidateHandler = () => {
    setIsFormSubmitted(true);
  };
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.colored}></div>
        <header className={styles.header}>
          <h1>{!isFormSubmitted ? 'Sample Form' : 'Thank you'}</h1>
          <p>
            This is a sample form to check validity of user inputs. Do check it.
          </p>
        </header>
      </div>
      {!isFormSubmitted && <Form onSubmitValidate={submitValidateHandler} />}
    </div>
  );
};
export default MainPage;
