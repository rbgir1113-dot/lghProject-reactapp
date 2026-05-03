import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ContentArea, Page } from "./communityStyle";
import MainRightSide from "./common/MainRightSide";
import SideChatSample from "./chat/SideChatSample";

const users = [
  { userId: 1, userName: "홍길동" },
  { userId: 2, userName: "장보고" },
];

const CommunityContainer = () => {
  return (
    <>
      <div>
        <Page>
          <Link to={"/community/chat"}>실시간 채팅</Link>
          <Link to={"/community/post"}>게시글</Link>
          <ContentArea>
            {/* 좌측 메인 */}
            {/* 해당 부분이 아울렛으로 되어야 함 */}
            <Outlet />

            {/* 우측 사이드 바 정의 */}
            <MainRightSide />
          </ContentArea>

          {/* 채팅 테스트 용 페이지 (라우터 건드리지 않기 위한 목적) */}
          <SideChatSample />
        </Page>
      </div>
      <div>
        지금 활동 중인 멤버
        {users.map((user) => (
          <div key={user.userId}>
            <Link to={`/community/profile/${user.userId}`}>
              {user.userName}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommunityContainer;
