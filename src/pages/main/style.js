import theme from "../../styles/theme"
import EumMainContainer from "./EumMainContainer"

export const styles = {
  

// 최상위 wrapper
  wrapper: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    minHeight: "100vh",
  },

  // 배너 헤드라인 wrapper
  headlineWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
    marginTop: '223px',
  },

  // 배너 헤드라인 텍스트 — theme 의존값은 컴포넌트에서 주입
  headlineText: {
    fontSize: theme.FONT_SIZE.h1,
    fontWeight: theme.FONT_WEIGHT.bold,
    FONT_LINE: theme.FONT_LINE.h1,
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },

  // 배너 서브타이틀 wrapper
  subtitleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
    marginTop: '36px',
    
  },

  // 배너 서브타이틀 텍스트 — theme 의존값은 컴포넌트에서 주입
  subtitleText: {
    fontSize: theme.FONT_SIZE.h7,
    fontWeight: theme.FONT_WEIGHT.regular,
    color: theme.GRAYSCALE[7],
    FONT_LINE:theme.FONT_LINE.h7,
    textAlign: 'center',
    letterSpacing: '-0.02em',
    paddingTop:'36px',
    paddingBottom:'64px'
  },

  // CTA 버튼 wrapper
  ctaWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '36px',
    marginBottom: '435px',
  },

  // CTA 버튼 — theme 의존값은 컴포넌트에서 주입
  ctaButton: {
    fontSize: theme.FONT_SIZE.h7,  
    fontWeight: theme.FONT_WEIGHT.bold, 
    textAlign: 'center',
    padding: '20px 50px',
    borderRadius: '50px',
    letterSpacing: '-0.02em',
    height: '60px',
    width: '250px',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  // 콘텐츠 소개 섹션
  contentSection: {
    display: 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    maxHeight: '1000px',
    minHeight: '1000px',
    backgroundColor: theme.GRAYSCALE[10]
  },

  // 콘텐츠 소개 타이틀 — theme 의존값은 컴포넌트에서 주입
  contentTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '-0.02em',
    paddingTop: '108px',
    marginBottom: '84px',
    FONT_LINE : theme.FONT_LINE.h4,
    fontSize: theme.FONT_SIZE.h3,
    fontWeight: theme.FONT_WEIGHT.bold,
  },

  // 각 블롭 개별 속성
  blobGreen: {
    position: 'absolute',  
    borderRadius: '50%',  
    left: '-80',
    top: '-60',
    width: '320px',
    height: '320px',
    backgroundColor: '#A8F0D8',
    filter: 'blur(87px)',
    opacity: '0.25',
  },

  blobBlue: {
    position: 'absolute', 
    borderRadius: '50%',
    left: '-80px',
    top: '100px',
    width: '416px',
    height: '416px',
    backgroundColor: '#7EB8FF',
    filter: 'blur(116px)',
    opacity: '0.3',
  },

  blobOrange: {
    position: 'absolute', 
    borderRadius: '50%',
    right: '786px',
    top: '57px',
    width: '283px',
    height: '283px',
    backgroundColor: '#FFBF80',
    filter: 'blur(116px)',
    opacity: '0.3',
  },

  blobYellow: {
    position: 'absolute', 
    borderRadius: '50%',
    left: '850px',
    top: '688px',
    width: '288px',
    height: '288px',
    backgroundColor: '#FFD96B',
    filter: 'blur(87px)',
    opacity: '0.25',
    paddingBottom : '105px'
  },

  blobPurple: {
    position: 'absolute', 
    borderRadius: '50%',
    top: '540px',
    right: '-150px',
    width: '384px',
    height: '384px',
    backgroundColor: '#C4A8FF',
    filter: 'blur(102px)',
    opacity: '0.3',
  },

  blobPink: {
    position: 'absolute', 
    borderRadius: '50%',
    left: '1288px',
    top: '135px',
    width: '288px',
    height: '288px',
    backgroundColor: '#FBC8FF',
    filter: 'blur(87px)',
    opacity: '0.25',
  },

  secondChaper : {
    display : 'flex',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    marginTop: '36px',
    marginBottom:'435px',
  },

  startBtn : {
    backgroundColor : theme.PALETTE.primary.main,
    color: theme.PALETTE.white,
    fontSize: theme.FONT_SIZE.h7,
    fontWeight: theme.FONT_WEIGHT.bold,
    textAlign:'center',
    padding: '20px 50px',
    borderRadius : '50px',
    letterSpacing: '-0.02em',
    height:'60px',
    width:'250px',
    whiteSpace: 'nowrap',
    display : 'flex',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
  }

  
}