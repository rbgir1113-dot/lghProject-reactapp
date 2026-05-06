import React, { useState } from "react";
import {
  SelectPageBg,
  SelectPopup,
  SelectHeader,
  HeaderTitle,
  HeaderBtns,
  MinimizeBtn,
  SelectCloseBtn,
  SelectBody,
  SelectLeftPanel,
  PanelTop,
  PanelHeader,
  PanelLabel,
  SelectCountBadge,
  Divider,
  RoomList,
  RoomItem,
  RoomItemLeft,
  RoomIconBox,
  RoomMetaCol,
  RoomNameText,
  LiveRow,
  SelectLiveDot,
  SelectLiveLabel,
  RoomCountText,
  SelectUserList,
  SelectUserItem,
  UserAvatarBox,
  SelectUserNameText,
  FilterTabsRow,
  FilterTab,
  SelectRightPanel,
  OngoingRoomList,
  OngoingRoomItem,
  OngoingProfileBox,
  OngoingRoomInfo,
  OngoingRoomTopRow,
  OngoingRoomNameRow,
  OngoingRoomName,
  OngoingRoomCount,
  OngoingLastTime,
  OngoingLastMsg,
} from "./ChatStyle";

const assets = {
  chatIcon:
    "https://www.figma.com/api/mcp/asset/b4896850-6051-457c-b680-087b71fd7760",
  minimizeV:
    "https://www.figma.com/api/mcp/asset/44666575-71f6-416e-a884-3df8697b8a6e",
  closeV:
    "https://www.figma.com/api/mcp/asset/4b5d23e6-44b7-4a45-8a8f-9ed805ef3301",
};

const LIVE_ROOMS = [
  { id: 1, name: "수어 학습 질문방", count: 84 },
  { id: 2, name: "수어 학습 질문방", count: 0 },
  { id: 3, name: "수어 학습 질문방", count: 0 },
  { id: 4, name: "수어 학습 질문방", count: 0 },
  { id: 5, name: "수어 학습 질문방", count: 0 },
];

const ONGOING_ROOMS = [
  {
    id: 1,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
  {
    id: 2,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
  {
    id: 3,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
];

const FILTER_TABS = ["라이브 채팅방", "팔로우 한 유저", "요청"];

const FOLLOW_USERS = [
  { id: 1, name: "ㅇㅇㅇ님" },
  { id: 2, name: "ㅇㅇㅇ님" },
  { id: 3, name: "ㅇㅇㅇ님" },
  { id: 4, name: "ㅇㅇㅇ님" },
];

const REQUEST_USERS = [
  { id: 1, name: "ㅇㅇㅇ님" },
  { id: 2, name: "ㅇㅇㅇ님" },
  { id: 3, name: "ㅇㅇㅇ님" },
];

// ─── Main Component ────────────────────────────────────────────────────────────

const PopupChatRoomSelect = ({ onMinimize, onClose, onRoomSelect }) => {
  const [activeRoom, setActiveRoom] = useState(1);
  const [activeFilter, setActiveFilter] = useState("라이브 채팅방");

  return (
    <SelectPageBg>
      <SelectPopup>
        {/* ── Header ── */}
        <SelectHeader>
          <HeaderTitle>채팅방 선택</HeaderTitle>
          <HeaderBtns>
            <MinimizeBtn onClick={onMinimize}>
              <img src={assets.minimizeV} alt="최소화" />
            </MinimizeBtn>
            <SelectCloseBtn onClick={onClose}>
              <img src={assets.closeV} alt="닫기" />
            </SelectCloseBtn>
          </HeaderBtns>
        </SelectHeader>

        {/* ── Body ── */}
        <SelectBody>
          {/* 라이브 채팅방 목록 */}
          <SelectLeftPanel>
            <PanelTop>
              <PanelHeader>
                <PanelLabel>라이브 채팅방</PanelLabel>
                <SelectCountBadge>247</SelectCountBadge>
              </PanelHeader>
              <Divider />
              {activeFilter === "라이브 채팅방" ? (
                <RoomList>
                  {LIVE_ROOMS.map((room) => (
                    <RoomItem
                      key={room.id}
                      $active={activeRoom === room.id}
                      onClick={() => {
                        setActiveRoom(room.id);
                        onRoomSelect?.(room);
                      }}
                    >
                      <RoomItemLeft>
                        <RoomIconBox>
                          <img src={assets.chatIcon} alt="" />
                        </RoomIconBox>
                        <RoomMetaCol>
                          <RoomNameText>{room.name}</RoomNameText>
                          <LiveRow>
                            <SelectLiveDot />
                            <SelectLiveLabel>라이브</SelectLiveLabel>
                          </LiveRow>
                        </RoomMetaCol>
                      </RoomItemLeft>
                      <RoomCountText>{room.count}명</RoomCountText>
                    </RoomItem>
                  ))}
                </RoomList>
              ) : (
                <SelectUserList>
                  {(activeFilter === "팔로우 한 유저"
                    ? FOLLOW_USERS
                    : REQUEST_USERS
                  ).map((user) => (
                    <SelectUserItem key={user.id}>
                      <UserAvatarBox />
                      <SelectUserNameText>{user.name}</SelectUserNameText>
                    </SelectUserItem>
                  ))}
                </SelectUserList>
              )}
            </PanelTop>

            <FilterTabsRow>
              {FILTER_TABS.map((tab) => (
                <FilterTab
                  key={tab}
                  $active={activeFilter === tab}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </FilterTab>
              ))}
            </FilterTabsRow>
          </SelectLeftPanel>

          {/* 진행중인 채팅방 목록 */}
          <SelectRightPanel>
            <PanelHeader>
              <PanelLabel>진행중인 채팅방</PanelLabel>
              <SelectCountBadge>3</SelectCountBadge>
            </PanelHeader>
            <Divider />
            <OngoingRoomList>
              {ONGOING_ROOMS.map((room) => (
                <OngoingRoomItem key={room.id}>
                  <OngoingProfileBox />
                  <OngoingRoomInfo>
                    <OngoingRoomTopRow>
                      <OngoingRoomNameRow>
                        <OngoingRoomName>{room.name}</OngoingRoomName>
                        <OngoingRoomCount>{room.count}명</OngoingRoomCount>
                      </OngoingRoomNameRow>
                      <OngoingLastTime>{room.time}</OngoingLastTime>
                    </OngoingRoomTopRow>
                    <OngoingLastMsg>{room.lastMsg}</OngoingLastMsg>
                  </OngoingRoomInfo>
                </OngoingRoomItem>
              ))}
            </OngoingRoomList>
          </SelectRightPanel>
        </SelectBody>
      </SelectPopup>
    </SelectPageBg>
  );
};

export default PopupChatRoomSelect;
