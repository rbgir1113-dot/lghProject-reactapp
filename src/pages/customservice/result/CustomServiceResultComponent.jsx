import React, { useState, useRef, useEffect } from 'react';

const STATUS_STYLE = {
  '답변완료': { color: '#fff', background: '#4f6ef7' },
  '대기':     { color: '#fff', background: '#f5a623' },
};

const AccordionItem = ({ result, isAdmin, onAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, showAnswerInput, answerText]);

  const statusStyle = STATUS_STYLE[result.inquireStatus] || {};

  const handleAnswerSubmit = async () => {
    if (!answerText.trim()) return alert('답변 내용을 입력해주세요.');
    await onAnswer(result.id, answerText);
    setAnswerText('');
    setShowAnswerInput(false);
  };

  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '14px 18px', cursor: 'pointer',
          background: isOpen ? '#f7f8fd' : '#fff',
          transition: 'background 0.15s',
        }}
      >
        <span style={{
          display: 'inline-block', padding: '4px 12px', borderRadius: 20,
          fontSize: 12, fontWeight: 700, flexShrink: 0, ...statusStyle,
        }}>
          {result.inquireStatus}
        </span>
        <span style={{ flex: 1, fontSize: 14, color: '#1a1a2e', fontWeight: 500 }}>
          {result.inquireTitle}
        </span>
        <span style={{ fontSize: 13, color: '#aaa', flexShrink: 0 }}>
          {result.inquireCreateAt ? result.inquireCreateAt.slice(0, 10).replaceAll('-', '.') : ''}
        </span>
        <span style={{
          fontSize: 16, color: '#aaa', flexShrink: 0,
          display: 'inline-block',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}>→</span>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div style={{ borderTop: '1px solid #f0f0f5', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 13, color: '#444', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, color: '#3a5df5' }}>Q. </span>
            {result.inquireContent}
          </div>
          {result.inquireAnswer ? (
            <div style={{ fontSize: 13, color: '#444', lineHeight: 1.6 }}>
              <span style={{ fontWeight: 700, color: '#3a5df5' }}>A. </span>
              {result.inquireAnswer}
            </div>
          ) : (
            <div style={{ fontSize: 13, color: '#aaa' }}>답변 준비 중입니다.</div>
          )}

          {/* 관리자 답변하기 버튼 */}
          {isAdmin && result.inquireStatus === '대기' && (
            <div style={{ marginTop: 8 }}>
              {!showAnswerInput ? (
                <button
                  onClick={(e) => { e.stopPropagation(); setShowAnswerInput(true); }}
                  style={{
                    padding: '8px 20px', borderRadius: 10,
                    border: '1.5px solid #4f6ef7', background: '#fff',
                    color: '#4f6ef7', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  답변하기
                </button>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <textarea
                    placeholder="답변 내용을 입력해주세요."
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      width: '100%', padding: '12px', borderRadius: 10,
                      border: '1.5px solid #e0e0ea', fontSize: 13,
                      outline: 'none', resize: 'vertical', height: 100,
                      boxSizing: 'border-box', fontFamily: 'inherit',
                    }}
                  />
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowAnswerInput(false); setAnswerText(''); }}
                      style={{
                        padding: '8px 20px', borderRadius: 10,
                        border: '1.5px solid #e0e0ea', background: '#fff',
                        color: '#555', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                      }}
                    >
                      취소
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleAnswerSubmit(); }}
                      style={{
                        padding: '8px 20px', borderRadius: 10,
                        border: 'none', background: '#4f6ef7',
                        color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                      }}
                    >
                      등록하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomServiceResultComponent = ({ results = [], isLoading, error, isAdmin, onAnswer }) => {
  if (isLoading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200, color: '#aaa', fontSize: 14 }}>
      불러오는 중...
    </div>
  );
  if (error) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200, color: '#f55', fontSize: 14 }}>
      {error}
    </div>
  );
  if (results.length === 0) return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #eee', padding: '60px 0', textAlign: 'center' }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: '#555', marginBottom: 6 }}>문의 내역이 없습니다.</div>
      <div style={{ fontSize: 13, color: '#aaa' }}>1:1 문의를 통해 궁금한 점을 남겨주세요.</div>
    </div>
  );

  return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #eee', padding: '24px 28px' }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', marginBottom: 16 }}>내 문의 목록</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((result) => (
          <AccordionItem key={result.id} result={result} isAdmin={isAdmin} onAnswer={onAnswer} />
        ))}
      </div>
    </div>
  );
};

export default CustomServiceResultComponent;