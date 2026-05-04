import styled from "styled-components";
import theme from "../../../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  flexBetweenRow,
  h11Medium,
  h11Regular,
  h12Bold,
  h5Bold,
  h8Medium,
  h9Bold,
} from "../../../../styles/common";
import {
  communityBorderRadius,
  communityWidthStyle,
  flexBetweenTopRow,
  FlexRow,
  hoverStyle,
} from "../../communityStyle";
import { BORDER_STYLE } from "../../constants";

// 게시글 카드 컴포넌트 카드 스타일
const Card = styled.div`
  background: ${theme.PALETTE.white};
  ${communityBorderRadius}
  ${communityWidthStyle}
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: ${BORDER_STYLE.original};
  ${hoverStyle}
`;

// 태그와 시간 row 로 묶는 스타일 정의
const TagAndTimeRow = styled.span`
  ${flexBetweenRow}
  width: 100%;
`;

const Tag = styled.span`
  background: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  ${h12Bold}
  border-radius: 100px;
  padding: 2px 8px;
  white-space: nowrap;
`;

const TimeText = styled.p`
  ${h11Medium}
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  white-space: nowrap;
`;

// 제목과 글 내용 묶는 row
const ContentAndTitleRow = styled.div`
  ${flexBetweenTopRow}
  margin-top: 16px;
  gap: 28px;
`;

// 글 내용
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 9px;
`;

// 제목
const Title = styled.p`
  ${h5Bold}
  margin: 0;
  word-break: keep-all;
`;

// 내용
const Description = styled.p`
  ${h8Medium}
  color: ${theme.GRAYSCALE[9]};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// 게시글 이미지
const Thumbnail = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  background: ${theme.GRAYSCALE[0]};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 작성자 정보 및 게시글 조회수 정보 meta를 묶는 row
const PostMetaRow = styled.div`
  ${flexBetweenRow}
  margin-top: 36px;
`;

const AvatarAndAuthorRow = styled.div`
  ${flexBetweenRow}
  gap: 8px;
`;

// 작성자 프로필 원형
const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

// 작성자 이름 스타일
const AuthorName = styled.span`
  ${h9Bold}
  color: ${theme.TEXT_COLOR.basic};
  white-space: nowrap;
`;

// 상태를 묶어 줄 row
const PostStateRow = styled.div`
  ${flexBetweenRow}
  gap: 12px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    ${h11Medium}
    color: ${theme.GRAYSCALE[9]};
  }

  span {
    ${h11Regular}
    color: ${theme.TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

const PostListCard = ({
  postTag = "학습 인증",
  postCreateAt = "방금 전",
  postTitle = "수어에서 감정 표현할 때 표정이 얼마나 중요한가요?",
  postContent = "수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할지 궁금합니다.",
  postThumbnail = null, // DTO 정의 시 확정
  userNickname = "수어러버김지민",
  authorAvatar = null, // DTO 정의 시 확정
  postLikeCount = 42,
  comments = 18, // DTO 정의 시 확정
  postReadCount = 887,
}) => {
  return (
    // 포스트 카드 영역
    <Card>
      {/* 태그 및 작성 시각 */}
      <TagAndTimeRow>
        <Tag>{postTag}</Tag>
        <TimeText>{postCreateAt}</TimeText>
      </TagAndTimeRow>

      {/* 게시글 컨텐츠 (제목, 내용) 및 썸네일 row */}
      {/* <ContentAndTitleRow gap="28px" marginTop="16px"> */}
      <ContentAndTitleRow>
        {/* 게시글 제목 및 내용 */}
        <ContentArea>
          <Title>{postTitle}</Title>
          <Description>{postContent}</Description>
        </ContentArea>
        {/* 게시글 썸네일 */}
        <Thumbnail>
          {postThumbnail && <img src={postThumbnail} alt="게시글 썸네일" />}
        </Thumbnail>
      </ContentAndTitleRow>

      {/* 작성자 및 좋아요, 조회수, 댓글 수 나타내기 */}
      <PostMetaRow>
        {/* 작성자 프로필 이미지 및 이름 */}
        <AvatarAndAuthorRow>
          {authorAvatar && <Avatar src={authorAvatar} alt={userNickname} />}
          <AuthorName>{userNickname}</AuthorName>
        </AvatarAndAuthorRow>

        {/* 좋아요, 조회수, 댓글 수 row */}
        <PostStateRow>
          {/* 좋아요 */}
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{postLikeCount}</span>
          </StatItem>
          {/* 댓글수 */}
          <StatItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </StatItem>
          {/* 조회수 */}
          <StatItem>
            <FontAwesomeIcon icon={faEye} />
            <span>{postReadCount}</span>
          </StatItem>
        </PostStateRow>
      </PostMetaRow>
    </Card>
  );
};

export default PostListCard;
