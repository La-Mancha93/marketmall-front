import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AuthForm.module.css';

const AuthForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 세션, 쿠키 사용 시 필요
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('로그인 성공!');
        navigate('/main'); // 로그인 성공 시 /main으로 이동
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('서버 오류');
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>로그인</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
          <button className={styles.button} type="submit">로그인</button>
        </form>

        <button
          className={styles.signupButton}
          type="button"
          onClick={handleSignupClick}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
