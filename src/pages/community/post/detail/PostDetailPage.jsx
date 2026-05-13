import { TAG_ON_PRIMARY } from "../../constants";
import PostContent from "./detailComponent/PostContent";
import FloatingChatButton from "../../common/FloatingChatButton";
import PostSidebar from "./sidebar/PostSidebar";
import communityStyle from "../../communityStyle";
import {
  BreadcrumbBar,
  BreadcrumbPath,
  CategoryTag,
  Crumb,
  CrumbSep,
  PostBodyWrapper,
  PostHeader,
} from "./postDetailStyle";
import CommentSection from "../../comment/CommentSection";

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";

const { Page, ContentArea, ColumnBlock } = communityStyle;

const S = {
  Page,
  ContentArea,
  ColumnBlock,
  BreadcrumbBar,
  BreadcrumbPath,
  CategoryTag,
  Crumb,
  CrumbSep,
  PostBodyWrapper,
  PostHeader,
};

const PostDetailPage = () => {
  // const navigate = useNavigate();
  // 이전 페이지 에서 게시글의 id를 가지고 와서 fetch 를 해서 게시글을 불러오기

  // fetch 한 데이터 가정하기
  const postDataDTO = {
    category: "학습 인증",
    breadcrumb: "이음 커뮤니티 › 학습 인증 게시판",
    title: "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
    authorName: "수어러버김지민",
    authorLevel: "Lv.7",
    authorAvatar: authorProfileImg,
    postDate: "2025.03.08 (오늘)",
    views: 324,
    likes: 42,
  };

  return (
    // 페이지
    <S.Page>
      {/* 좌측 9개, 우측 3개 로 나누는 레이아웃 */}
      <S.BreadcrumbBar>
        <S.Crumb>홈</S.Crumb>
        <S.CrumbSep>›</S.CrumbSep>
        <S.Crumb>커뮤니티</S.Crumb>
        <S.CrumbSep>›</S.CrumbSep>
        <S.Crumb>학습 인증</S.Crumb>
        <S.CrumbSep>›</S.CrumbSep>
        <S.Crumb current>
          수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌
        </S.Crumb>
      </S.BreadcrumbBar>
      <S.ContentArea>
        {/* 좌측 9개 메인 영역 */}
        {/* 헤더 만들기 */}

        <S.ColumnBlock>
          {/* 헤더 */}
          <S.PostHeader>
            <S.CategoryTag>{postDataDTO.category}</S.CategoryTag>
            <S.BreadcrumbPath $color={TAG_ON_PRIMARY.text}>
              {postDataDTO.breadcrumb}
            </S.BreadcrumbPath>
          </S.PostHeader>

          {/* 감싸는 카드 */}
          <S.PostBodyWrapper>
            <PostContent />
            <CommentSection />
          </S.PostBodyWrapper>
          {/* <PostContent /> */}
          {/* <CommentSection /> */}
        </S.ColumnBlock>

        {/* 우측 3개 사이드 바 영역 */}
        <PostSidebar />
      </S.ContentArea>

      <FloatingChatButton />
    </S.Page>
  );
};

export default PostDetailPage;
