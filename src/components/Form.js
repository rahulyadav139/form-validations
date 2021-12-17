import styles from './Form.module.css';

import React, { useState } from 'react';
import Card from './Card';
const Form = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);

  const firstNameChangeHandler = e => {
    setFirstName(e.target.value);
    if (e.target.value) setFirstNameIsValid(true);
    else setFirstNameIsValid(false);
  };
  const lastNameChangeHandler = e => {
    setLastName(e.target.value);
    if (e.target.value) setLastNameIsValid(true);
    else setLastNameIsValid(false);
  };
  const ageChangeHandler = e => {
    setAge(e.target.value);
    if (e.target.value) setAgeIsValid(true);
    else setAgeIsValid(false);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!firstName) setFirstNameIsValid(false);
    if (!lastName) setLastNameIsValid(false);
    if (!age) setAgeIsValid(false);
    if (!firstName || !lastName || !age) return;
    props.onSubmitValidate();
  };
  const firstNameBlurHandler = e => {
    if (!firstName) setFirstNameIsValid(false);
  };
  const lastNameBlurHandler = e => {
    if (!lastName) setLastNameIsValid(false);
  };
  const ageBlurHandler = e => {
    if (!age) setAgeIsValid(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <Card className={firstNameIsValid ? '' : 'invalid-card'}>
        <label className={styles.label}>
          <h2>First Name</h2>
        </label>
        <input
          onBlur={firstNameBlurHandler}
          className={
            firstNameIsValid
              ? styles.input
              : ` ${styles.input} ${styles['invalid-input']}`
          }
          value={firstName}
          onChange={firstNameChangeHandler}
          placeholder="Your answer"
          type="text"
        />
        {!firstNameIsValid && (
          <p className={styles.warning}>&#9888; Invalid entry</p>
        )}
      </Card>
      <Card className={lastNameIsValid ? '' : 'invalid-card'}>
        <label className={styles.label}>
          <h2>Last Name</h2>
        </label>
        <input
          value={lastName}
          onBlur={lastNameBlurHandler}
          className={
            lastNameIsValid
              ? styles.input
              : ` ${styles.input} ${styles['invalid-input']}`
          }
          onChange={lastNameChangeHandler}
          placeholder="Your answer"
          type="text"
        />
        {!lastNameIsValid && (
          <p className={styles.warning}>&#9888; Invalid entry</p>
        )}
      </Card>
      <Card className={ageIsValid ? '' : 'invalid-card'}>
        <label className={styles.label}>
          <h2>Age</h2>
        </label>
        <input
          className={
            ageIsValid
              ? styles.input
              : ` ${styles.input} ${styles['invalid-input']}`
          }
          value={age}
          onBlur={ageBlurHandler}
          onChange={ageChangeHandler}
          placeholder="Your answer"
          type="number"
        />
        {!ageIsValid && <p className={styles.warning}>&#9888; Invalid entry</p>}
      </Card>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
