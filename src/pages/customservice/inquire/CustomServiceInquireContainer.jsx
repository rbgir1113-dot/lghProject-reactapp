import React from 'react';
import CustomServiceInquireComponent from './CustomServiceInquireComponent';
import { styles } from '../style';
import useAuthCheck from '../useAuthCheck';

const CustomServiceInquireContainer = () => {
    const isAuth = useAuthCheck();

    if (!isAuth) return null;

    const handleSubmit = async (formData) => {
        try {
            const res = await fetch('http://localhost:10000/api/inquire', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                inquireType:    formData.category,
                inquireEmail:   formData.email,
                inquireTitle:   formData.title,
                inquireContent: formData.content,
                inquireFileUrl: 'default.jpg',
            }),
            });
            if (!res.ok) throw new Error('등록 실패');
            alert('문의가 등록되었습니다.');
        } catch (err) {
            alert('문의 등록에 실패했습니다.');
            throw err;  // ← 에러 시 초기화 안 되게
        }
    };

    return (
        <>
            <div style={styles.heroCard}>
                <div>
                    <div style={styles.heroBadge()}>고객지원</div>
                    <h1 style={styles.heroTitle}>1:1 문의</h1>
                    <p style={styles.heroSub}>궁금한 점을 남겨주시면 1~2일 내 답변 드립니다.</p>
                </div>
                <div style={styles.heroIllust}>
                    <span style={{ display:'flex' }}>
                        <img src="/assets/image/customService/messageIcon.svg" alt="" style={{width:'80px'}}/>
                    </span>
                </div>
            </div>
            <div>
                <CustomServiceInquireComponent onSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default CustomServiceInquireContainer;