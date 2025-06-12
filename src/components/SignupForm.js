import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import styles from '../styles/AuthForm.module.css';

const SignupForm = () => {
  const navigate = useNavigate(); // 추가

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
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
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('회원가입 성공!');
        navigate('/'); // 로그인 페이지로 이동
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('에러 발생:', error);
      alert('서버 오류');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>회원가입</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            className={styles.input} 
            type="text" 
            name="name"
            placeholder="이름" 
            value={formData.name}
            onChange={handleChange}
          />
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
          <button className={styles.button} type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;