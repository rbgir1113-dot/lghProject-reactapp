import React, { useState } from "react";
import { colors } from "../constants";
import OutlineButton from "../common/OutlineButton";
import ToggleSwitch from "../common/ToggleSwitch";
import { H11Regular } from "../communityTextStyle";
import {
  PageBg,
  Popup,
  Header,
  HeaderLeft,
  ProfileArea,
  RoomProfileBox,
  RoomInfo,
  RoomTitle,
  RoomSubText,
  MessageStatus,
  LiveBadge,
  LiveIcon,
  LiveText,
  TodayMsgRow,
  TodayMsgText,
  HeaderRight,
  LeaveBtn,
  MinimizeBtn,
  CloseBtn,
  Body,
  LeftPanel,
  ParticipantHeader,
  ParticipantLabel,
  CountBadge,
  Divider,
  UserList,
  UserItem,
  UserProfileRow,
  AvatarWrap,
  AvatarImg,
  OnlineDot,
  UserMeta,
  UserNameText,
  UserRoleText,
  LevelBadge,
  CenterPanel,
  MessagesArea,
  OtherMsgWrap,
  MsgAvatar,
  MsgContentCol,
  SenderName,
  MsgTimeRow,
  OtherBubble,
  OtherBubbleText,
  MsgTime,
  MyMsgRow,
  MyBubble,
  MyBubbleText,
  InputArea,
  AttachRow,
  AttachIcons,
  AttachIcon,
  AttachDivider,
  InputRow,
  TextInputBox,
  InputPlaceholder,
  SendBtn,
  RightPanel,
  RightPanelScroll,
  PanelSection,
  SectionLabel,
  RoomProfileImg,
  RoomTitleCenter,
  RoomTitleText,
  StatusRow,
  LiveStatusRow,
  LiveDot,
  LiveLabel,
  ParticipantCount,
  IntroText,
  TagGrid,
  Tag,
  AccessRow,
  AccessLabel,
  UserInfoTopSection,
  UserInfoSectionHeader,
  UserInfoSectionTitle,
  UserBigAvatarBox,
  UserInfoName,
  LevelRoleBadge,
  ActionDescText,
  ReportCard,
  ReportCardTitle,
  ReportCardDesc,
  ORANGE,
} from "./ChatStyle";

// Figma asset URLs (expires in 7 days)
const assets = {
  roomProfile:
    "https://www.figma.com/api/mcp/asset/4597fd24-1f77-4b23-a97f-9d0612d37539",
  liveVector:
    "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7",
  emojiIcon:
    "https://www.figma.com/api/mcp/asset/7326d7ec-d93d-4233-a0cb-6b4c1a81433e",
  imageIcon:
    "https://www.figma.com/api/mcp/asset/0e43611f-4878-4e38-a9b5-3429810282f1",
  linkIcon:
    "https://www.figma.com/api/mcp/asset/02cbb637-a056-4524-a973-dd1de4c0bc6d",
  signIcon:
    "https://www.figma.com/api/mcp/asset/e4fac756-efc7-444e-8b51-66b882636ee0",
  downloadIcon:
    "https://www.figma.com/api/mcp/asset/20ea9338-907b-444f-9835-2f74b2aa1a24",
  minimizeV:
    "https://www.figma.com/api/mcp/asset/d026f38b-0832-4a94-b0cc-5bbc2206c401",
  closeV:
    "https://www.figma.com/api/mcp/asset/633d41af-e1e1-462a-acec-b1534e4d49ad",
  onlineDot:
    "https://www.figma.com/api/mcp/asset/b33f6cd4-cc19-4c37-9250-813cb5dca21d",
  avatarBook:
    "https://www.figma.com/api/mcp/asset/08386982-c82d-42f5-af37-598a6fd8785a",
  avatar2:
    "https://www.figma.com/api/mcp/asset/83e9a63d-b47c-449f-b99b-fcf322b5e2bd",
  avatar3:
    "https://www.figma.com/api/mcp/asset/cc784c94-994e-4a8f-91f1-23642503d8d9",
  avatar4:
    "https://www.figma.com/api/mcp/asset/ba8e3192-8c1a-4388-baa8-a512da31e094",
  avatar5:
    "https://www.figma.com/api/mcp/asset/6d0896e4-c001-4785-806b-e2b3e7943f21",
  msgAvatar1:
    "https://www.figma.com/api/mcp/asset/047eac11-c15a-4d40-bf4b-3c6cc159b4de",
  msgAvatar2:
    "https://www.figma.com/api/mcp/asset/f2fad4c6-fd43-4ef4-8d70-4cf117c31970",
};

const USERS = [
  {
    id: 1,
    name: "이규학",
    role: "학습자",
    level: 7,
    avatar: assets.avatarBook,
    iconProfile: true,
    online: false,
  },
  {
    id: 2,
    name: "사용자 2",
    role: "학습자",
    level: 5,
    avatar: assets.avatar2,
    iconProfile: false,
    online: true,
  },
  {
    id: 3,
    name: "사용자 3",
    role: "학습자",
    level: 7,
    avatar: assets.avatar3,
    iconProfile: false,
    online: true,
  },
  {
    id: 4,
    name: "사용자 4",
    role: "학습자",
    level: 7,
    avatar: assets.avatar4,
    iconProfile: false,
    online: true,
  },
  {
    id: 5,
    name: "사용자 5",
    role: "학습자",
    level: 8,
    avatar: assets.avatar5,
    iconProfile: false,
    online: true,
  },
  {
    id: 6,
    name: "사용자 6",
    role: "학습자",
    level: 7,
    avatar: assets.avatarBook,
    iconProfile: true,
    online: false,
  },
];

const MESSAGES = [
  {
    id: 1,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar1,
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 2,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar2,
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 3,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar1,
    content:
      "여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지 여러줄 메세지",
    time: "14:02",
  },
  {
    id: 4,
    type: "mine",
    content: "안녕하세요! 오늘도 열공해요 💪",
    time: "15:00",
  },
  {
    id: 5,
    type: "other",
    sender: "상대방",
    avatar: assets.msgAvatar2,
    content: "메세지 메세지",
    time: "14:02",
  },
  {
    id: 6,
    type: "mine",
    content:
      "안녕하세요! 오늘도 열공해요 💪안녕하세요! 오늘도 열공해안녕하세요! 오늘도 열공해",
    time: "15:00",
  },
];

const TAGS = [
  { label: "#수어기초", bg: colors.primaryLight, color: colors.primary },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#일상회화", bg: colors.liveBg, color: colors.live },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#질문환영", bg: "#fff3e8", color: "#ff8004" },
  { label: "#초보환영", bg: "#e1beec", color: "#b63fde" },
];

// ─── Main Component ────────────────────────────────────────────────────────────

const PopupChatScreen = ({ onMinimize, onClose, onLeave }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [signToggle, setSignToggle] = useState(false);
  const [readToggle, setReadToggle] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.id === user.id ? null : user));
  };

  return (
    <PageBg>
      {/* 헤더와 몸체 column 방향으로 감싸는거 */}
      <Popup>
        {/* ── Header ── */}
        <Header>
          <HeaderLeft>
            {/* 왼쪽 채팅방 프로필 영역 */}
            {/* 방 이름 및 참여 인원수 */}
            <ProfileArea>
              {/* 프로필 */}
              <RoomProfileBox>
                <img src={assets.roomProfile} alt="채팅방 프로필" />
              </RoomProfileBox>
              {/* 방 설명 */}
              <RoomInfo>
                <RoomTitle>학습 일상 대화방</RoomTitle>
                <RoomSubText>00명 참여 중</RoomSubText>
              </RoomInfo>
            </ProfileArea>
            {/* 라이브 상태 및 오늘 발생한 메세지 갯수 */}
            <MessageStatus>
              {/* 상태, (라이브 등) */}
              <LiveBadge>
                <LiveIcon src={assets.liveVector} alt="" />
                <LiveText>LIVE</LiveText>
              </LiveBadge>
              {/* 오늘 메세지 갯수 */}
              <TodayMsgRow>
                <img src={assets.downloadIcon} alt="" />
                <TodayMsgText>오늘 00개 메시지</TodayMsgText>
              </TodayMsgRow>
            </MessageStatus>
          </HeaderLeft>
          {/* 나가기, 최소화 닫기 버튼 모음 */}
          <HeaderRight>
            <LeaveBtn onClick={onLeave}>채팅방 나가기</LeaveBtn>
            <MinimizeBtn onClick={onMinimize}>
              <img src={assets.minimizeV} alt="최소화" />
            </MinimizeBtn>
            <CloseBtn onClick={onClose}>
              <img src={assets.closeV} alt="닫기" />
            </CloseBtn>
          </HeaderRight>
        </Header>

        {/* ── Body ── */}
        <Body>
          {/* 참여자 리스트 */}
          <LeftPanel>
            <ParticipantHeader>
              <ParticipantLabel>참여자</ParticipantLabel>
              <CountBadge>247</CountBadge>
            </ParticipantHeader>
            <Divider />
            <UserList>
              {USERS.map((user) => (
                <UserItem
                  key={user.id}
                  $selected={selectedUser?.id === user.id}
                  onClick={() => handleUserClick(user)}
                >
                  <UserProfileRow>
                    <AvatarWrap>
                      <AvatarImg
                        src={user.avatar}
                        alt={user.name}
                        $isIcon={user.iconProfile}
                      />
                      {user.online && (
                        <OnlineDot src={assets.onlineDot} alt="" />
                      )}
                    </AvatarWrap>
                    <UserMeta>
                      <UserNameText>{user.name}</UserNameText>
                      <UserRoleText>{user.role}</UserRoleText>
                    </UserMeta>
                  </UserProfileRow>
                  <LevelBadge>Lv.{user.level}</LevelBadge>
                </UserItem>
              ))}
            </UserList>
          </LeftPanel>

          {/* 채팅 중앙부 */}
          <CenterPanel>
            <MessagesArea>
              {MESSAGES.map((msg) =>
                msg.type === "other" ? (
                  <OtherMsgWrap key={msg.id}>
                    <MsgAvatar src={msg.avatar} alt={msg.sender} />
                    <MsgContentCol>
                      <SenderName>{msg.sender}</SenderName>
                      <MsgTimeRow>
                        <OtherBubble>
                          <OtherBubbleText>{msg.content}</OtherBubbleText>
                        </OtherBubble>
                        <MsgTime>{msg.time}</MsgTime>
                      </MsgTimeRow>
                    </MsgContentCol>
                  </OtherMsgWrap>
                ) : (
                  <MyMsgRow key={msg.id}>
                    <MsgTime>{msg.time}</MsgTime>
                    <MyBubble>
                      <MyBubbleText>{msg.content}</MyBubbleText>
                    </MyBubble>
                  </MyMsgRow>
                ),
              )}
            </MessagesArea>
            <InputArea>
              <AttachRow>
                <AttachIcons>
                  <AttachIcon src={assets.emojiIcon} alt="이모지" />
                  <AttachIcon src={assets.imageIcon} alt="이미지" />
                  <AttachIcon src={assets.linkIcon} alt="링크" />
                </AttachIcons>
                <AttachDivider />
                <AttachIcon src={assets.signIcon} alt="수어" />
              </AttachRow>
              <InputRow>
                <TextInputBox>
                  <InputPlaceholder>메시지 입력...</InputPlaceholder>
                </TextInputBox>
                <SendBtn>➤</SendBtn>
              </InputRow>
            </InputArea>
          </CenterPanel>

          {/* 우측 패널 */}
          <RightPanel>
            {selectedUser ? (
              /* ChatRoomUserInfo — 유저 선택 시 */
              <RightPanelScroll>
                <UserInfoTopSection>
                  <UserInfoSectionHeader>
                    <UserInfoSectionTitle>유저 정보</UserInfoSectionTitle>
                    <Divider />
                  </UserInfoSectionHeader>
                  <UserBigAvatarBox $isIcon={selectedUser.iconProfile}>
                    <img src={selectedUser.avatar} alt={selectedUser.name} />
                  </UserBigAvatarBox>
                  <UserInfoName>{selectedUser.name}</UserInfoName>
                  <LevelRoleBadge>
                    Lv.{selectedUser.level} · {selectedUser.role}
                  </LevelRoleBadge>
                  <OutlineButton
                    borderColor={colors.primary}
                    textColor={colors.primary}
                    padding="10px 16px"
                  >
                    + 팔로우
                  </OutlineButton>
                  <OutlineButton
                    bgColor={colors.primary}
                    borderColor={colors.primary}
                    textColor={colors.textWhite}
                    padding="10px 16px"
                  >
                    1:1 채팅 시작
                  </OutlineButton>
                </UserInfoTopSection>
                <PanelSection>
                  <SectionLabel>유저 프로필 이동</SectionLabel>
                  <ActionDescText>
                    해당 유저의 프로필로 이동합니다.
                  </ActionDescText>
                  <OutlineButton
                    borderColor={colors.live}
                    textColor={colors.live}
                  >
                    유저 프로필로 이동
                  </OutlineButton>
                </PanelSection>
                <PanelSection>
                  <SectionLabel>채팅방 프로필로 되돌아가기</SectionLabel>
                  <ActionDescText>
                    해당 유저 정보 열람을 종료 후 다시 채팅방 프로필 내용으로
                    돌아갑니다
                  </ActionDescText>
                  <OutlineButton
                    borderColor={colors.danger}
                    textColor={colors.danger}
                    onClick={() => setSelectedUser(null)}
                  >
                    유저 정보 열람 종료
                  </OutlineButton>
                </PanelSection>
                <PanelSection $last>
                  <ReportCard>
                    <ReportCardTitle>⚠️ 신고 및 차단</ReportCardTitle>
                    <ReportCardDesc>
                      부적절한 활동이 확인되면 신고해 주세요. 운영팀이
                      검토합니다.
                    </ReportCardDesc>
                  </ReportCard>
                  <OutlineButton borderColor={ORANGE} textColor={ORANGE}>
                    이 유저 신고하기
                  </OutlineButton>
                  <OutlineButton
                    borderColor={colors.border}
                    textColor={colors.textSub}
                  >
                    이 유저 차단하기
                  </OutlineButton>
                </PanelSection>
              </RightPanelScroll>
            ) : (
              /* 채팅방 기본 정보 패널 — 높이 초과 시 스크롤 */
              <RightPanelScroll>
                {/* 채팅방 프로필 */}
                <PanelSection $center $gap="12px">
                  <RoomProfileImg>
                    <img src={assets.roomProfile} alt="채팅방" />
                  </RoomProfileImg>
                  <RoomTitleCenter>
                    <RoomTitleText>수어 일상 대화방</RoomTitleText>
                    <StatusRow>
                      <LiveStatusRow>
                        <LiveDot src={assets.liveVector} alt="" />
                        <LiveLabel>라이브</LiveLabel>
                      </LiveStatusRow>
                      <ParticipantCount>00명</ParticipantCount>
                    </StatusRow>
                  </RoomTitleCenter>
                </PanelSection>

                {/* 채팅방 소개 */}
                <PanelSection>
                  <SectionLabel>채팅방 소개</SectionLabel>
                  <IntroText>
                    <H11Regular $color={colors.textMain}>
                      수어로 일상 대화를 나누는
                    </H11Regular>
                    <H11Regular $color={colors.textMain}>
                      공간이에요. 초보자도 환영!
                    </H11Regular>
                    <H11Regular $color={colors.textMain}>
                      서로 격려하며 함께 배워요 🌱
                    </H11Regular>
                  </IntroText>
                </PanelSection>

                {/* 태그 */}
                <PanelSection $gap="9px">
                  <SectionLabel>태그</SectionLabel>
                  <TagGrid>
                    {TAGS.map((tag, i) => (
                      <Tag key={i} $bg={tag.bg} $color={tag.color}>
                        {tag.label}
                      </Tag>
                    ))}
                  </TagGrid>
                </PanelSection>

                {/* 접근성 도구 */}
                <PanelSection $gap="8px">
                  <SectionLabel>접근성 도구</SectionLabel>
                  <AccessRow>
                    <AccessLabel>수어 자동 변환</AccessLabel>
                    <ToggleSwitch
                      checked={signToggle}
                      onChange={() => setSignToggle((v) => !v)}
                      activeColor={colors.accessibilitySign}
                    />
                  </AccessRow>
                  <AccessRow>
                    <AccessLabel>메세지 읽어주기</AccessLabel>
                    <ToggleSwitch
                      checked={readToggle}
                      onChange={() => setReadToggle((v) => !v)}
                      activeColor={colors.accessibilityRead}
                    />
                  </AccessRow>
                </PanelSection>

                {/* 채팅방 공유 / 나가기 */}
                <PanelSection $gap="8px">
                  <OutlineButton
                    borderColor={colors.border}
                    textColor={colors.textSub}
                  >
                    채팅방 공유
                  </OutlineButton>
                  <OutlineButton
                    borderColor={colors.live}
                    textColor={colors.live}
                  >
                    채팅방 나가기
                  </OutlineButton>
                </PanelSection>

                {/* 채팅방 신고 */}
                <PanelSection $gap="8px" $last>
                  <SectionLabel>채팅방 신고</SectionLabel>
                  <IntroText>
                    <H11Regular $color={colors.textMain}>
                      만약 해당 채팅방에서 부적절한 행위
                    </H11Regular>
                    <H11Regular $color={colors.textMain}>
                      혹은 대화가 발생한다면 아래의
                    </H11Regular>
                    <H11Regular $color={colors.textMain}>
                      신고하기 버튼으로 신고 가능합니다.
                    </H11Regular>
                  </IntroText>
                  <OutlineButton
                    borderColor={colors.danger}
                    textColor={colors.danger}
                  >
                    채팅방신고
                  </OutlineButton>
                </PanelSection>
              </RightPanelScroll>
            )}
          </RightPanel>
        </Body>
      </Popup>
    </PageBg>
  );
};

export default PopupChatScreen;
