import React, { useState, useEffect, useRef } from 'react';
import { PRIMARY, RED } from '../style';

const CATEGORIES = ['학습 문의', '결제 / 환불', '계정 / 로그인', '기타'];

const CustomServiceInquireComponent = () => {
  const [activeCategory, setActiveCategory] = useState('학습 문의');
  const [email, setEmail]     = useState('');
  const [title, setTitle]     = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles]     = useState([]);
  const previewUrls = useRef({});

  const getKey = (file) => file.name + file.lastModified;

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const existingNames = files.map(f => f.name);
    const filtered = newFiles.filter(f => !existingNames.includes(f.name));

    // 이미지 파일만 미리보기 URL 생성
    filtered.forEach(file => {
      if (file.type.startsWith('image/')) {
        previewUrls.current[getKey(file)] = URL.createObjectURL(file);
      }
    });

    setFiles(prev => [...prev, ...filtered]);
    e.target.value = '';
  };

  const handleRemoveFile = (index) => {
    setFiles(prev => {
      const removed = prev[index];
      const key = getKey(removed);
      if (previewUrls.current[key]) {
        URL.revokeObjectURL(previewUrls.current[key]);
        delete previewUrls.current[key];
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  useEffect(() => {
    return () => {
      Object.values(previewUrls.current).forEach(url => URL.revokeObjectURL(url));
    };
  }, []);

  const handleSubmit = () => {
    console.log({ activeCategory, email, title, content, files });
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

      {/* 문의 유형 */}
      <div>
        <span style={labelStyle}>문의 유형</span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '7px 18px', borderRadius: 20,
              border: `1.5px solid ${activeCategory === cat ? PRIMARY : '#e0e0ea'}`,
              background: activeCategory === cat ? PRIMARY : '#fff',
              color: activeCategory === cat ? '#fff' : '#555',
              fontWeight: activeCategory === cat ? 700 : 400,
              fontSize: 13, cursor: 'pointer', transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* 이메일 */}
      <div>
        <label style={labelStyle}>이메일 <span style={{ color: RED, marginLeft: 3 }}>*</span></label>
        <input type="email" placeholder="example1234@gmail.com" value={email}
          onChange={(e) => setEmail(e.target.value)} style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = '#e0e0ea')} />
      </div>

      {/* 문의 제목 */}
      <div>
        <label style={labelStyle}>문의 제목 <span style={{ color: RED, marginLeft: 3 }}>*</span></label>
        <input type="text" placeholder="문의 제목을 입력해주세요." value={title}
          onChange={(e) => setTitle(e.target.value)} style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = '#e0e0ea')} />
      </div>

      {/* 문의 내용 */}
      <div>
        <label style={labelStyle}>문의 내용 <span style={{ color: RED, marginLeft: 3 }}>*</span></label>
        <textarea placeholder="문의 내용을 자세히 작성해주세요. (최소 10자)" value={content}
          onChange={(e) => setContent(e.target.value)} maxLength={500}
          style={{ ...inputStyle, height: 120, resize: 'vertical' }}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = '#e0e0ea')} />
        <div style={{ textAlign: 'right', fontSize: 12, color: '#aaa', marginTop: 6 }}>
          {content.length} / 500자
        </div>
      </div>

      {/* 파일 첨부 */}
      <div>
        <label style={labelStyle}>파일 첨부</label>
        <label style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '14px', borderRadius: 10, border: '1.5px dashed #d0d0e0',
          background: '#fafafa', fontSize: 13, color: '#aaa', cursor: 'pointer',
        }}>
          <input type="file" multiple style={{ display: 'none' }} onChange={handleFileChange} />
          + 파일을 드래그하거나 클릭해서 첨부하세요. (최대 5MB)
        </label>

        {files.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
            {files.map((file, i) => {
              const previewUrl = previewUrls.current[getKey(file)];
              return (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 12px', borderRadius: 8, background: '#f5f5f7',
                  fontSize: 13, color: '#555', gap: 10,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, overflow: 'hidden' }}>
                    {previewUrl && (
                      <img src={previewUrl} alt={file.name} style={{
                        width: 48, height: 48, objectFit: 'cover', borderRadius: 6,
                        flexShrink: 0, border: '1px solid #e0e0ea',
                      }} />
                    )}
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
                  </div>
                  <button onClick={() => handleRemoveFile(i)}
                    style={{ border: 'none', background: 'none', color: '#aaa', cursor: 'pointer', fontSize: 16, flexShrink: 0 }}>
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 제출 버튼 */}
      <button onClick={handleSubmit} style={{
        width: '100%', padding: '16px', borderRadius: 12, border: 'none',
        background: PRIMARY, color: '#fff', fontSize: 16, fontWeight: 700,
        cursor: 'pointer', transition: 'opacity 0.15s',
      }}
        onMouseEnter={(e) => (e.target.style.opacity = '0.9')}
        onMouseLeave={(e) => (e.target.style.opacity = '1')}
      >
        문의 제출하기
      </button>
    </div>
  );
};

export default CustomServiceInquireComponent;
