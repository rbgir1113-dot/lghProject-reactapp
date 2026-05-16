import React from 'react';
import CustomServiceInquireComponent from './CustomServiceInquireComponent';
import { styles } from '../style';
import useAuthCheck from '../useAuthCheck';

const CustomServiceInquireContainer = () => {
    const isAuth = useAuthCheck();

    if (!isAuth) return null;

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
                <CustomServiceInquireComponent />
            </div>
        </>
    );
};

export default CustomServiceInquireContainer;
