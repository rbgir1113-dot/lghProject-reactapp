import { useState } from "react";
import CommentItem from "./CommentItem";
import {
  CommentSectionWrapper,
  HeaderRow,
  CommentTitle,
  CountBadge,
  TextArea,
  SubmitRow,
  SubmitButton,
  CommentList,
} from "./commentStyle";

const S = {
  CommentSectionWrapper,
  HeaderRow,
  CommentTitle,
  CountBadge,
  TextArea,
  SubmitRow,
  SubmitButton,
  CommentList,
};

const profileImg1 =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const profileImg2 =
  "https://www.figma.com/api/mcp/asset/491962d2-cd51-4e18-a625-fd4324bdaeec";
const defaultAvatarImg =
  "https://www.figma.com/api/mcp/asset/cb1e934a-35f4-4b63-abf6-44baea169a05";

const MOCK_COMMENTS = [
  {
    id: 1,
    avatar: defaultAvatarImg,
    userNickname: "영상러이소희",
    isAuthor: false,
    commentId: null,
    commentContent: "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕\n영상도 꼭 올려주세요! 기다릴게요 📹",
    likeCount: 1,
    replyCount: 1,
    commentCreateAt: "2시간 전",
    showAccessibility: true,
  },
  {
    id: 2,
    avatar: profileImg2,
    userNickname: "댓글 작성 유저",
    isAuthor: false,
    commentId: null,
    commentContent: "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕\n영상도 꼭 올려주세요! 기다릴게요 📹ㅇㅇ",
    likeCount: 1,
    replyCount: 1,
    commentCreateAt: "2시간 전",
    showAccessibility: true,
  },
  {
    id: 3,
    avatar: profileImg1,
    userNickname: "게시글 작성자 (글 작성자)",
    isAuthor: true,
    commentId: 1,
    commentContent: "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕\n영상도 꼭 올려주세요! 기다릴게요 📹ㅇㅇ",
    likeCount: 1,
    replyCount: 1,
    commentCreateAt: "2시간 전",
    showAccessibility: true,
  },
  {
    id: 4,
    avatar: defaultAvatarImg,
    userNickname: "영상러이소희",
    isAuthor: false,
    commentId: null,
    commentContent: "저도 지금 도전 중인데 이 글 보고 너무 힘이 나요!! 감사합니다 💕\n영상도 꼭 올려주세요! 기다릴게요 📹",
    likeCount: 1,
    replyCount: 1,
    commentCreateAt: "2시간 전",
    showAccessibility: true,
  },
];

const CommentSection = ({ commentCount = 247, comments = MOCK_COMMENTS }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
  };

  return (
    <S.CommentSectionWrapper>
      <S.HeaderRow>
        <S.CommentTitle>댓글</S.CommentTitle>
        <S.CountBadge>{commentCount}</S.CountBadge>
      </S.HeaderRow>

      <S.TextArea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="따뜻한 댓글을 남겨보세요"
      />

      <S.SubmitRow>
        <S.SubmitButton onClick={handleSubmit}>댓글 등록</S.SubmitButton>
      </S.SubmitRow>

      <S.CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </S.CommentList>
    </S.CommentSectionWrapper>
  );
};

export default CommentSection;
