import React from 'react';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
  const mockProducts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `상품 ${i+1}`,
    price: 10000 + i * 5000,
    image: 'https://via.placeholder.com/300x300?text=상품',
  }));

  return (
    <div className={styles.wrapper}>
      {/* --- 헤더영역 --- */}
      <header className={styles.header}>
        <h1 className={styles.logo}>MarketMall</h1>
        <nav className={styles.topNav}>
          <button>로그아웃</button>
        </nav>
      </header>

      {/* --- 배너 슬라이더 영역 --- */}
      <section className={styles.banner}>
        <img src="https://via.placeholder.com/1200x400?text=배너+광고" alt="배너" />
      </section>

      {/* --- 카테고리 탭 --- */}
      <nav className={styles.categories}>
        {['전체', '의류', '전자', '식품', '생활'].map(cat => (
          <button key={cat}>{cat}</button>
        ))}
      </nav>

      {/* --- 상품 그리드 --- */}
      <main className={styles.gridContainer}>
        {mockProducts.map(p => (
          <div key={p.id} className={styles.card}>
            <img src={p.image} alt={p.name} />
            <div className={styles.cardBody}>
              <h3>{p.name}</h3>
              <p>₩{p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </main>

      {/* --- 더보기 버튼 --- */}
      <div className={styles.loadMore}>
        <button>더 보기</button>
      </div>
    </div>
  );
};

export default MainPage;