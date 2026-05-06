import React, { useState } from "react";
import styled from "styled-components";
import { ColumnBlock } from "../communityStyle";
import SideUserProfile from "./SideUserProfile copy";
import SideNotice from "./SideNotice";
import FloatingChatButton from "./FloatingChatButton";
import SideChatListComponent from "../chat/chatComponents/SideChatListComponent";
import SideChatRequestComponent from "../chat/chatComponents/SideChatRequestComponent";
import SideChatComponent from "../chat/chatComponents/SideChatComponent";
import PopupChatScreen from "../chat/PopupChatScreen";
import PopupChatRoomSelect from "../chat/PopupChatRoomSelect";

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow-y: auto;
`;

const VIEW = {
  LIST: "list",
  REQUEST: "request",
  ROOM: "room",
  POPUP: "popup",
  POPUP_SELECT: "popupSelect",
};

const MainRightSide = () => {
  const [view, setView] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // 사이드 채팅 핸들러
  const handleOpen = () => setView(VIEW.LIST);
  const handleClose = () => setView(null);
  const handleExpand = () => setView(VIEW.POPUP);
  const handleTabChange = (tab) =>
    setView(tab === "request" ? VIEW.REQUEST : VIEW.LIST);
  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setView(VIEW.ROOM);
  };
  const handleMinimizeRoom = () => setView(VIEW.LIST);
  const handleViewAll = () => setView(VIEW.LIST);

  // 팝업 채팅 핸들러
  const handlePopupMinimize = () => setView(VIEW.LIST);
  const handlePopupClose = () => setView(null);
  const handlePopupLeave = () => setView(VIEW.POPUP_SELECT);

  // 채팅방 선택 팝업 핸들러
  const handleSelectMinimize = () => setView(VIEW.LIST);
  const handleSelectClose = () => setView(null);
  const handleSelectRoomClick = (room) => {
    setSelectedRoom(room);
    setView(VIEW.POPUP);
  };

  const sharedProps = {
    onClose: handleClose,
    onExpand: handleExpand,
    onTabChange: handleTabChange,
  };

  return (
    <div>
      <ColumnBlock width="312px">
        <SideUserProfile />
        <SideNotice />

        {/* 사이드 채팅 패널 */}
        {view === VIEW.LIST && (
          <SideChatListComponent
            {...sharedProps}
            onMinimize={handleClose}
            onRoomClick={handleRoomClick}
          />
        )}
        {view === VIEW.REQUEST && (
          <SideChatRequestComponent
            {...sharedProps}
            activeTab="request"
            onMinimize={handleClose}
            onRequestClick={() => {}}
          />
        )}
        {view === VIEW.ROOM && (
          <SideChatComponent
            chatPartnerName={selectedRoom?.name ?? "ㅇㅇ"}
            onClose={handleClose}
            onMinimize={handleMinimizeRoom}
            onExpand={handleExpand}
            onViewAll={handleViewAll}
          />
        )}

        {/* 플로팅 버튼 — 사이드/팝업이 열려있으면 숨김 */}
        {/* 해당 플로팅 버튼은 사이드 채팅창 띄우고 줄이는데 목적 */}
        {view === null && <FloatingChatButton onClick={handleOpen} />}
      </ColumnBlock>

      {/* 팝업 채팅 화면 — position: fixed 오버레이 */}
      {view === VIEW.POPUP && (
        <PopupOverlay>
          <PopupChatScreen
            onMinimize={handlePopupMinimize}
            onClose={handlePopupClose}
            onLeave={handlePopupLeave}
          />
        </PopupOverlay>
      )}

      {/* 채팅방 선택 팝업 — 채팅방 나가기 시 표시 */}
      {view === VIEW.POPUP_SELECT && (
        <PopupOverlay>
          <PopupChatRoomSelect
            onMinimize={handleSelectMinimize}
            onClose={handleSelectClose}
            onRoomSelect={handleSelectRoomClick}
          />
        </PopupOverlay>
      )}
    </div>
  );
};

export default MainRightSide;
