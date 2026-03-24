'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './add.module.css';

export default function AddPage() {
  const [people, setPeople] = useState(2);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className={styles.addBg} />

      <main className={styles.addContainer}>
        <div className={styles.addHeader}>
          <Link href="/" className={`${styles.backBtn}`}>← 돌아가기</Link>
          <h1 className={styles.addTitle}>새로운 여행</h1>
          <p className={styles.addSub}>어디로 떠나시나요?</p>
        </div>

        <form className={styles.addForm}>

          {/* 커버 이미지 */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>커버 이미지</label>
            <label
              className={styles.imgUpload}
              style={preview ? { backgroundImage: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {!preview && (
                <div className={styles.imgUploadInner}>
                  <span className={styles.imgUploadIcon}>🖼</span>
                  <p>이미지를 클릭하여 업로드</p>
                  <span className={styles.imgUploadHint}>JPG, PNG · 최대 5MB</span>
                </div>
              )}
              <input type="file" accept="image/*" className={styles.fileInput} onChange={handleImage} />
            </label>
          </div>

          {/* 여행지 */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>여행지 <span className={styles.required}>*</span></label>
            <input type="text" className={styles.formInput} placeholder="예) 파리, 프랑스" />
          </div>

          {/* 날짜 */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>출발일 <span className={styles.required}>*</span></label>
              <input type="date" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>귀국일 <span className={styles.required}>*</span></label>
              <input type="date" className={styles.formInput} />
            </div>
          </div>

          {/* 출발/도착 공항 */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>출발지</label>
              <input type="text" className={styles.formInput} placeholder="예) 인천 (ICN)" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>목적지 공항</label>
              <input type="text" className={styles.formInput} placeholder="예) 샤를 드 골 (CDG)" />
            </div>
          </div>

          {/* 인원 & 예산 */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>인원</label>
              <div className={styles.counterInput}>
                <button type="button" className={styles.counterBtn} onClick={() => setPeople(Math.max(1, people - 1))}>−</button>
                <span className={styles.counterValue}>{people}</span>
                <button type="button" className={styles.counterBtn} onClick={() => setPeople(Math.min(20, people + 1))}>+</button>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>예산</label>
              <div className={styles.inputPrefixWrap}>
                <span className={styles.inputPrefix}>₩</span>
                <input type="number" className={`${styles.formInput} ${styles.withPrefix}`} placeholder="0" />
              </div>
            </div>
          </div>

          {/* 메모 */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>메모</label>
            <textarea className={styles.formTextarea} rows={4} placeholder="준비물, 숙소 정보, 주의사항 등 자유롭게 적어보세요" />
          </div>

          {/* 버튼 */}
          <div className={styles.formActions}>
            <Link href="/" className="btn-cancel">취소</Link>
            <button type="submit" className="btn-primary large">여행 저장하기</button>
          </div>

        </form>
      </main>
    </>
  );
}
