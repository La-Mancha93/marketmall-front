import React from 'react';
import styles from '../styles/AuthForm.module.css';

const AuthForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>로그인</h2>
        <form className={styles.form}>
          <input type="text" placeholder="이메일" className={styles.input} />
          <input type="password" placeholder="비밀번호" className={styles.input} />
          <button type="submit" className={styles.button}>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;