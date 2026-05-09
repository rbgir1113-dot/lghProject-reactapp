import React from 'react';
import StudyExperienceQuizComponent from './StudyExperienceQuizComponent';
import { Link, Outlet } from 'react-router-dom';
import { NonUser } from './style';

// 비회원 체험학습 화면

const StudyExperienceContainer = () => {
    
    const learnTrialList = [

        {
            id: 1,
            level: 3,
            title: "이 수어는 무슨 뜻일까요?",
            desc: "손 모양으로 단어를 맞혀 보세요",
            img: "",
            link: ""

        },
        {
            id: 2,
            level: 3,
            title: "두 손으로 표현하는 감정",
            desc: "일상 생활 수어 표현을 배워보세요",
            img: "",
            link: ""

        },
        {
            id: 3,
            level: 4,
            title: "복합 수어 표현에 도전!",
            desc: "여러 단어를 연결해 문장을 만들어요",
            img: "",
            link: ""

        },
        {
            id: 4,
            level: 1,
            title: "숫자 수어를 알아보세요",
            desc: "1부터 10까지 숫자를 세어 보세요",
            img: "",
            link: ""

        },
        {
            id: 5,
            level: 2,
            title: "가족을 표현하는 수어",
            desc: "아버지, 어머니, 형제, 자매 표현 모두",
            img: "",
            link: ""

        },
        {
            id: 6,
            level: 3,
            title: "날씨 수어 마스터하기",
            desc: "맑음, 비, 눈, 바람 수어로 표현해요",
            img: "",
            link: ""

        }
        

    ];






    
    return (
        <NonUser>
            <div>
                미리보기 학습
                <Link to="/study/experience/mors/1">모스부호1</Link>
                <Link to="/study/experience/mors/2">모스부호2</Link>
                <Link to="/study/experience/sos/2">수신호1</Link>
                <Link to="/study/experience/sos/2">수신호2</Link>
                <Link to="/study/experience/culture/1">문화1</Link>
                <Link to="/study/experience/culture/2">문화2</Link>
                <Outlet />
            </div>
            <button>퀴즈 풀기</button>
        </NonUser>
    );
};

export default StudyExperienceContainer;