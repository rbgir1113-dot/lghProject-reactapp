import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../style';
import CustomServiceNoticeWriteComponent from './CustomServiceNoticeWriteComponent';

const CustomServiceNoticeWriteContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // TODO: 백엔드 연동 시 API 호출
    // const res = await fetch('/api/notices', { method: 'POST', body: formData });
    console.log('공지사항 작성:', formData);
    navigate('/customservice/notice');
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
