import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const trips = [
  {
    id: '1',
    title: '스위스 알프스',
    desc: '설산과 초원 사이, 꿈꿔왔던 그 풍경 속으로',
    date: '2025. 07. 12 — 07. 18',
    days: '6박 7일',
    status: 'upcoming' as const,
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
  {
    id: '2',
    title: '도쿄 산책',
    desc: '골목골목 숨겨진 카페와 빛나는 야경',
    date: '2024. 11. 03 — 11. 08',
    days: '5박 6일',
    status: 'completed' as const,
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
  },
  {
    id: '3',
    title: '발리 휴양',
    desc: '파도 소리와 함께한 느린 오후의 기억',
    date: '2024. 05. 20 — 05. 25',
    days: '5박 6일',
    status: 'completed' as const,
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
  },
];

const statusLabel = { upcoming: '예정', completed: '완료' };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>당신의 이야기가 시작되는 곳</p>
          <h1 className={styles.heroTitle}>My Journeys</h1>
          <Link href="/add" className="btn-primary">+ 새 여행 추가</Link>
        </div>
        <div className={styles.heroScroll}>↓</div>
      </header>

      {/* Trip List */}
      <main className="container">
        <div className={styles.sectionHeader}>
          <h2 className="section-title">여행 기록</h2>
          <span className={styles.sectionCount}>{trips.length}개의 여행</span>
        </div>

        <div className={styles.cardGrid}>
          {trips.map((trip) => (
            <Link key={trip.id} href={`/detail/${trip.id}`} className={styles.tripCard}>
              <div className={styles.cardImg} style={{ backgroundImage: `url(${trip.img})` }}>
                <span className={`${styles.cardBadge} ${styles[trip.status]}`}>
                  {statusLabel[trip.status]}
                </span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDate}>{trip.date}</p>
                <h3 className={styles.cardTitle}>{trip.title}</h3>
                <p className={styles.cardDesc}>{trip.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardDays}>{trip.days}</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            </Link>
          ))}

          {/* 추가 카드 */}
          <Link href="/add" className={`${styles.tripCard} ${styles.addCard}`}>
            <div className={styles.addIcon}>+</div>
            <p className={styles.addText}>새로운 여행을<br />계획해보세요</p>
          </Link>
        </div>
      </main>

      <footer className="footer">
        <p>모든 여정은 첫 걸음에서 시작됩니다 ✦</p>
      </footer>
    </>
  );
}
