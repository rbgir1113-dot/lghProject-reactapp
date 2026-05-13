import theme from "../../../../../styles/theme";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  AccessBtn,
  AccessibilityBox,
  AccessibilityLabel,
  ActionButtons,
  ActionRow,
  AuthorAvatar,
  AuthorMeta,
  AuthorName,
  AuthorRow,
  AuthorSubRow,
  Divider,
  IconButton,
  LevelBadge,
  LikeButton,
  MetaText,
  PostContentWrapper,
  PostTitle,
  Tag,
  TagRow,
} from "../postDetailStyle";
import DummyContent from "./dummyContent/DummyContent";

const { PALETTE } = theme;

const S = {
  AccessBtn,
  AccessibilityBox,
  AccessibilityLabel,
  ActionButtons,
  ActionRow,
  AuthorAvatar,
  AuthorMeta,
  AuthorName,
  AuthorRow,
  AuthorSubRow,
  Divider,
  IconButton,
  LevelBadge,
  LikeButton,
  MetaText,
  PostContentWrapper,
  PostTitle,
  Tag,
  TagRow,
};

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const reportIconImg =
  "https://www.figma.com/api/mcp/asset/3823b07b-8dff-47fb-9bc5-b1dacb0103e8";
const linkIconImg =
  "https://www.figma.com/api/mcp/asset/307137f6-4a5b-4f60-8e17-56fb9a225552";

const PostContent = ({
  category = "학습 인증",
  breadcrumb = "이음 커뮤니티 › 학습 인증 게시판",
  title = "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
  authorName = "수어러버김지민",
  authorLevel = "Lv.7",
  authorAvatar = authorProfileImg,
  postDate = "2025.03.08 (오늘)",
  views = 324,
  likes = 42,
  tags = ["# 수어기초", "# 알파벳", "# 태그1", "# 태그2"],
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div>
      <S.PostContentWrapper>
        <S.PostTitle>{title}</S.PostTitle>

        {/* 게시글 작성자 정보 */}
        <S.AuthorRow>
          <S.AuthorAvatar src={authorAvatar} alt={authorName} />
          <S.AuthorMeta>
            <S.AuthorName>{authorName}</S.AuthorName>
            <S.AuthorSubRow>
              <S.LevelBadge>{authorLevel}</S.LevelBadge>
              <S.MetaText>
                · {postDate} · 조회 {views}
              </S.MetaText>
            </S.AuthorSubRow>
          </S.AuthorMeta>
        </S.AuthorRow>

        {/* 구분선 */}
        <S.Divider />

        {/* 게시글 몸체 */}
        <DummyContent />
        <S.TagRow>
          {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
          ))}
        </S.TagRow>

        {/* 접근성 도구 */}
        <S.AccessibilityBox>
          <S.AccessibilityLabel $color={PALETTE.primary.main}>
            접근성 도구
          </S.AccessibilityLabel>
          <S.AccessBtn variant="blue" pos="180px">
            수어로 보기
          </S.AccessBtn>
          <S.AccessBtn variant="green" pos="466px">
            글 읽어주기
          </S.AccessBtn>
        </S.AccessibilityBox>

        {/* 게시글 관련 액션 버튼 */}
        <S.ActionRow>
          <S.LikeButton liked={liked} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </S.LikeButton>
          <S.ActionButtons>
            <S.IconButton aria-label="링크 복사">
              <img src={linkIconImg} alt="링크" />
            </S.IconButton>
            <S.IconButton danger aria-label="게시글 신고">
              <img src={reportIconImg} alt="신고" />
            </S.IconButton>
          </S.ActionButtons>
        </S.ActionRow>
      </S.PostContentWrapper>

      {/* 댓글 섹션 */}
      {/* <CommentSection /> */}
    </div>
  );
};

export default PostContent;
