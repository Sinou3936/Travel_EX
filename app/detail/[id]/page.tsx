import Link from 'next/link';
import styles from './detail.module.css';

const timelineData = [
  {
    day: 'DAY 1',
    date: '7월 12일 토',
    items: [
      { time: '오전 10:00', title: '인천공항 출발', desc: 'KE 017 · 인천 → 취리히' },
      { time: '오후 04:30', title: '취리히 도착 & 체크인', desc: 'Hotel Schweizerhof 체크인' },
      { time: '저녁 07:00', title: '취리히 구시가지 산책', desc: '반호프슈트라세 & 림마트강변' },
    ],
  },
  {
    day: 'DAY 2',
    date: '7월 13일 일',
    items: [
      { time: '오전 09:00', title: '융프라우요흐 이동', desc: '기차로 인터라켄 경유' },
      { time: '오후 12:00', title: '융프라우 정상 도착', desc: '유럽의 지붕 3,454m · 알레치 빙하 감상' },
    ],
  },
  {
    day: 'DAY 3',
    date: '7월 14일 월',
    items: [
      { time: '종일', title: '그린델발트 하이킹', desc: '피르스트 트레일 · 약 4시간 코스', accent: true },
    ],
  },
];

export default function DetailPage() {
  return (
    <>
      {/* Hero */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80')` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backBtn}>← 돌아가기</Link>
          <span className={styles.badge}>예정된 여행</span>
          <h1 className={styles.title}>스위스 알프스</h1>
          <p className={styles.dates}>2025년 7월 12일 — 7월 18일 · 6박 7일</p>
        </div>
      </div>

      <main className={`container ${styles.detailContainer}`}>

        {/* 요약 카드 */}
        <div className={styles.summaryRow}>
          {[
            { icon: '✈️', label: '출발지', value: '인천 (ICN)' },
            { icon: '📍', label: '목적지', value: '취리히 (ZRH)' },
            { icon: '👥', label: '인원',   value: '2명' },
            { icon: '💰', label: '예산',   value: '₩4,500,000' },
          ].map((s) => (
            <div key={s.label} className={styles.summaryCard}>
              <span className={styles.summaryIcon}>{s.icon}</span>
              <p className={styles.summaryLabel}>{s.label}</p>
              <p className={styles.summaryValue}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* 타임라인 */}
        <section className={styles.timelineSection}>
          <h2 className="section-title">일정</h2>
          <div className={styles.timeline}>
            {timelineData.map((day) => (
              <div key={day.day} className={styles.timelineDay}>
                <div className={styles.dayLabel}>
                  <span className={styles.dayNum}>{day.day}</span>
                  <span className={styles.dayDate}>{day.date}</span>
                </div>
                <div className={styles.dayItems}>
                  {day.items.map((item) => (
                    <div key={item.title} className={styles.timelineItem}>
                      <span className={styles.itemTime}>{item.time}</span>
                      <div className={`${styles.itemDot} ${item.accent ? styles.accent : ''}`} />
                      <div className={styles.itemContent}>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/add" className="btn-outline">+ 일정 추가</Link>
        </section>

        {/* 메모 */}
        <section className={styles.memoSection}>
          <h2 className="section-title">메모</h2>
          <div className={styles.memoBox}>
            <p>🌿 여행 전 준비물: 선크림, 선글라스, 방수 재킷 필수</p>
            <p>🚂 Swiss Travel Pass 구매 예정 (6일권)</p>
            <p>🏨 호텔 취소 마감일: 6월 30일 전</p>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>모든 여정은 첫 걸음에서 시작됩니다 ✦</p>
      </footer>
    </>
  );
}
