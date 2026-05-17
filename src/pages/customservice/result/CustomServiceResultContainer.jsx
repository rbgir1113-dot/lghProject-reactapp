import React, { useState, useEffect } from 'react';
import { styles } from '../style';
import CustomServiceResultComponent from './CustomServiceResultComponent';
import useAuthCheck from '../useAuthCheck';

const CustomServiceResultContainer = () => {
  const isAuth = useAuthCheck();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch('http://localhost:10000/api/auth/me', { credentials: 'include' });
        if (res.ok) {
          const user = await res.json();
          setIsAdmin(user.role === 'ADMIN');
        }
      } catch (err) {
        setIsAdmin(false);
      }
    };
    fetchMe();
  }, []);

  const loadResults = async () => {
  setIsLoading(true);
  try {
    const url = isAdmin
      ? 'http://localhost:10000/api/inquire/admin'
      : 'http://localhost:10000/api/inquire';
    const res = await fetch(url, { credentials: 'include' });
    if (!res.ok) throw new Error('문의 목록을 불러올 수 없습니다.');
    const data = await res.json();
    setResults(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

  // useEffect 의존성에 isAdmin 추가
  useEffect(() => {
    loadResults();
  }, [isAdmin]);

  const handleAnswer = async (id, answer) => {
    try {
      const res = await fetch(`http://localhost:10000/api/inquire/${id}/answer`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ inquireAnswer: answer }),
      });
      if (!res.ok) throw new Error('답변 실패');
      alert('답변이 등록되었습니다.');
      loadResults();
    } catch (err) {
      alert('답변 등록에 실패했습니다.');
    }
  };

  const totalCount   = results.length;
  const doneCount    = results.filter((r) => r.inquireStatus === '답변완료').length;
  const pendingCount = results.filter((r) => r.inquireStatus === '대기').length;

  if (!isAuth) return null;

  return (
    <>
      <div style={styles.heroCard}>
        <div>
          <div style={styles.heroBadge()}>고객지원</div>
          <h1 style={styles.heroTitle}>문의 결과</h1>
          <p style={styles.heroSub}>접수하신 문의 내역과 답변을 확인하세요.</p>
        </div>
        <div style={styles.heroIllust}>
          <span style={{ display: 'flex' }}>
            <img src="/assets/image/customService/resultIcon.svg" alt="" style={{ width:'80px' }}/>
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14 }}>
        {[
          { label: '전체 문의', count: totalCount },
          { label: '답변 완료', count: doneCount },
          { label: '처리 중',   count: pendingCount },
        ].map((stat) => (
          <div key={stat.label} style={{
            flex: 1, background: '#fff', borderRadius: 14, border: '1px solid #eee',
            padding: '24px 0', textAlign: 'center',
          }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#3a5df5', marginBottom: 6 }}>{stat.count}</div>
            <div style={{ fontSize: 13, color: '#888' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <CustomServiceResultComponent
        results={results}
        isLoading={isLoading}
        error={error}
        isAdmin={isAdmin}
        onAnswer={handleAnswer}
      />
    </>
  );
};

export default CustomServiceResultContainer;