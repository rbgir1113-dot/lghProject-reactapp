import React, { useState } from 'react';
import { PRIMARY, RED } from '../../style';

const CATEGORIES = ['공지', '업데이트', '이벤트'];

const CustomServiceNoticeWriteComponent = ({ onSubmit, onCancel, initialData }) => {
  const [category, setCategory] = useState(initialData?.category || '공지');
  const [pinned, setPinned]     = useState(initialData?.pinned || false);
  const [title, setTitle]       = useState(initialData?.title || '');
  const [content, setContent]   = useState(initialData?.content || '');

  const handleSubmit = () => {
    if (!title.trim()) return alert('제목을 입력해주세요.');
    if (!content.trim()) return alert('내용을 입력해주세요.');
    onSubmit({ category, pinned, title, content });
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: 10,
    border: '1.5px solid #e0e0ea', fontSize: 14, color: '#333',
    outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
    transition: 'border-color 0.15s',
  };

  const labelStyle = {
    fontSize: 14, fontWeight: 600, color: '#333', marginBottom: 8, display: 'block',
  };

  return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #eee', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* 분류 */}
      <div>
        <span style={labelStyle}>분류 <span style={{ color: RED }}>*</span></span>
        <div style={{ display: 'flex', gap: 8 }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)} style={{
              padding: '7px 18px', borderRadius: 20,
              border: `1.5px solid ${category === cat ? PRIMARY : '#e0e0ea'}`,
              background: category === cat ? PRIMARY : '#fff',
              color: category === cat ? '#fff' : '#555',
              fontWeight: category === cat ? 700 : 400,
              fontSize: 13, cursor: 'pointer', transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* 고정글 여부 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input type="checkbox" id="pinned" checked={pinned}
          onChange={(e) => setPinned(e.target.checked)}
          style={{ width: 16, height: 16, cursor: 'pointer', accentColor: PRIMARY }}
        />
        <label htmlFor="pinned" style={{ fontSize: 14, fontWeight: 600, color: '#333', cursor: 'pointer' }}>
          상단 고정글로 설정
        </label>
      </div>

      {/* 제목 */}
      <div>
        <label style={labelStyle}>제목 <span style={{ color: RED }}>*</span></label>
        <input type="text" placeholder="제목을 입력해주세요." value={title}
          onChange={(e) => setTitle(e.target.value)} style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = '#e0e0ea')} />
      </div>

      {/* 내용 */}
      <div>
        <label style={labelStyle}>내용 <span style={{ color: RED }}>*</span></label>
        <textarea placeholder="내용을 입력해주세요." value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ ...inputStyle, height: 200, resize: 'vertical' }}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = '#e0e0ea')} />
      </div>

      {/* 버튼 */}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <button onClick={onCancel} style={{
          padding: '12px 32px', borderRadius: 12,
          border: '1.5px solid #e0e0ea', background: '#fff',
          color: '#555', fontSize: 14, fontWeight: 600, cursor: 'pointer',
        }}>취소</button>
        <button onClick={handleSubmit} style={{
          padding: '12px 32px', borderRadius: 12, border: 'none',
          background: PRIMARY, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer',
        }}>등록하기</button>
      </div>

    </div>
  );
};

export default CustomServiceNoticeWriteComponent;