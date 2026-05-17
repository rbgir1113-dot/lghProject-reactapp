import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../style';
import CustomServiceNoticeWriteComponent from './CustomServiceNoticeWriteComponent';

const CustomServiceNoticeWriteContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch('http://localhost:10000/api/notice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          noticeTitle:    formData.title,
          noticeContent:  formData.content,
          noticeCategory: formData.category,
          noticePinned:   formData.pinned ? 1 : 0,
          noticeFileUrl:  formData.fileUrl || 'default.jpg',
          userId:         formData.userId,
        }),
      });
      if (!res.ok) throw new Error('등록 실패');
      navigate('/customservice/notice');
    } catch (err) {
      console.error('등록 에러:', err);
      alert('등록에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    navigate('/customservice/notice');
  };

  return (
    <>
      <CustomServiceNoticeWriteComponent
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
};

export default CustomServiceNoticeWriteContainer;