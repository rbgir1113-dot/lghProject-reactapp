import React, { useState, useRef } from 'react';
import { PRIMARY, RED } from '../../style';

const CATEGORIES = ['공지', '업데이트', '이벤트'];

const CustomServiceNoticeWriteComponent = ({ onSubmit, onCancel }) => {
  const [category, setCategory]   = useState('공지');
  const [pinned, setPinned]       = useState(false);
  const [title, setTitle]         = useState('');
  const [content, setContent]     = useState('');
  const [files, setFiles]         = useState([]);
  const previewUrls = useRef({});

  const getKey = (file) => file.name + file.lastModified;

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const existingNames = files.map(f => f.name);
    const filtered = newFiles.filter(f => !existingNames.includes(f.name));
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

  const handleSubmit = () => {
    if (!title.trim()) return alert('제목을 입력해주세요.');
    if (!content.trim()) return alert('내용을 입력해주세요.');
    onSubmit({ category, pinned, title, content, files });
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
        <input
          type="checkbox"
          id="pinned"
          checked={pinned}
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
