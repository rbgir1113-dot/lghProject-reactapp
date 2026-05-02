import React from 'react';
import theme from '../../styles/theme';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { styles } from './style';
import { useNavigate } from 'react-router-dom';

const EumMainContainer = () => {
  
  const navigate = useNavigate();


  return (
    <>
      <div style={styles.wrapper}>
        {/* 배너 상단 큰 글씨 */}
        <div style={styles.headlineWrapper}>

          <p style={styles.headlineText}>
            손짓 하나로 <br /> 
            <span style = {{color : theme.TEXT_COLOR.primary}}>
              마음이 이어지는 곳
            </span> <br />
            이음
          </p>
        </div>

        {/* 배너 회색 작은 글씨 */}
        <div style={styles.subtitleWrapper}>
          <p style={styles.subtitleText}>
            수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
            모두를 위한 따뜻한 대화 공간이에요.
          </p>
        </div>

        {/* 배너 초록 흐림 */}
        <p style={styles.blobGreen}></p>
        {/* 배너 파란 흐림 */}
        <p style={styles.blobBlue}></p>
        {/* 배너 주황 흐림 */}
        <div style={styles.blobOrange}></div>
        {/* 배너 노랑 흐림 */}
        <div style={styles.blobYellow}></div>
        {/* 배너 보라 흐림 */}
        <div style={styles.blobPurple}></div>
        {/* 배너 핑크 흐림 */}
        <div style={styles.blobPink}></div>
        
        <div style={styles.secondChaper}>
          <button 
            style={styles.startBtn} 
            onClick={() => navigate('/community')}
          >
            지금 시작하기 →
          </button>
        </div>

        <div style={styles.contentSection}>
          <div style={styles.contentTitle}>
            이음에서만 만날 수 있는 <br />
            다양한 콘텐츠를 소개합니다.
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',   // 가로로 나란히
            marginTop: '40px',
            gap:'24px',
          }}>
            <div style={{
              width: '648px',
              height: '342px',
              backgroundColor : theme.PALETTE.white,
              borderRadius : '30px'
            }}>
              <div style={{
                position: 'absolute',
                left : '360px',
                top : '1416px',
                display : 'flex',
                justifyContent:'center',
                alignItems : 'center',
                width: '74px',
                height: '24px',
                backgroundColor :theme.PALETTE.secondary.main,
                

                borderRadius : '12px',
                
              }}>
                <span style={{
                  display : 'flex',
                  alignItems : 'flex',
                  justifyContent : 'flex',
                  textAlign : 'center',
                  alignContent:'center',
                  fontSize:theme.FONT_SIZE.h11,
                  color : theme.PALETTE.white,
                  fontWeight : theme.FONT_WEIGHT.bold
                }}>
                  자격검증
                </span>
              </div>
            </div>

            <div style={{
              width: '648px',
              height: '342px',
              backgroundColor : '#ffffff',
              borderRadius : '30px'
            }}>
          </div>

          </div>
        </div>
        </div>

    </>
  );
};

export default EumMainContainer;
