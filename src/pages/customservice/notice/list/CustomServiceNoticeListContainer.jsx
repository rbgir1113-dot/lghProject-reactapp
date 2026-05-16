import React, { useState, useEffect } from 'react';
import { styles } from '../../style';
import CustomServiceNoticeListComponent from './CustomServiceNoticeListComponent';
import { useNavigate, useParams, Outlet, useLocation } from 'react-router-dom';

const TABS = ["전체", "공지", "업데이트", "이벤트"];
const ITEMS_PER_PAGE = 10;

const DUMMY_NOTICES = [
  { id: "pin1", pinned: true,  category: "공지",    title: "[필독] 이음 서비스 이용약관 개정 안내",   date: "2026.05.05" },
  { id: "pin2", pinned: true,  category: "업데이트", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!", date: "2026.05.05" },
  { id: 7,      pinned: false, category: "이벤트",  title: "5월 어린이날 특별 이벤트",               date: "2026.05.05" },
  { id: 6,      pinned: false, category: "공지",    title: "[필독] 이음 서비스 이용약관 개정 안내",   date: "2026.05.05" },
  { id: 5,      pinned: false, category: "업데이트", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!", date: "2026.05.05" },
  { id: 4,      pinned: false, category: "이벤트",  title: "5월 어린이날 특별 이벤트",               date: "2026.05.05" },
  { id: 3,      pinned: false, category: "이벤트",  title: "5월 어린이날 특별 이벤트",               date: "2026.05.05" },
  { id: 2,      pinned: false, category: "공지",    title: "[필독] 이음 서비스 이용약관 개정 안내",   date: "2026.05.05" },
  { id: 1,      pinned: false, category: "업데이트", title: "이음 커뮤니티 채팅방이 새롭게 열렸어요!", date: "2026.05.05" },
];

const fetchNoticesAPI = ({ category, page, size }) => {
  const filtered = category
    ? DUMMY_NOTICES.filter((n) => n.category === category)
    : DUMMY_NOTICES;
  const totalPages = Math.ceil(filtered.length / size) || 1;
  const notices = filtered.slice((page - 1) * size, page * size);
  return Promise.resolve({ notices, totalPages });
};

const CustomServiceNoticeListContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isWrite = location.pathname.endsWith('/write');

  const [notices, setNotices]         = useState([]);
  const [activeTab, setActiveTab]     = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages]   = useState(1);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState(null);
  const [isAdmin, setIsAdmin]         = useState(false);  // ← 추가

  // 로그인 유저 정보 가져오기
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch('http://localhost:10000/api/auth/me', { credentials: 'include' });  // ← URL 변경
        console.log('me status:', res.status);
        if (res.ok) {
          const user = await res.json();
          console.log('me user:', user);
          setIsAdmin(user.role === 'ADMIN');
        }
      } catch (err) {
        console.log('me error:', err);
        setIsAdmin(false);
      }
    };
    fetchMe();
  }, []);

  useEffect(() => {
    const loadNotices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const category = activeTab === "전체" ? "" : activeTab;
        const data = await fetchNoticesAPI({ category, page: currentPage, size: ITEMS_PER_PAGE });
        setNotices(data.notices);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadNotices();
  }, [activeTab, currentPage]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleWriteClick = () => {
    navigate('/customservice/notice/write');
    window.scrollTo(0, 0);
  };

  const handleNoticeClick = (notice) => {
    navigate(`/customservice/notice/${notice.id}`);
  };

  const heroCard = (
    <div style={styles.heroCard}>
      <div>
        <div style={styles.heroBadge()}>고객지원</div>
        <h1 style={styles.heroTitle}>공지사항</h1>
        <p style={styles.heroSub}>이음 서비스의 새로운 소식과 업데이트를 확인하세요.</p>
      </div>
      <div style={styles.heroIllust}>
        <span style={{ display: 'flex' }}>
          <img src="/assets/image/customService/noticeIcon.svg" alt="" style={{width: '80px'}}/>
        </span>
      </div>
    </div>
  );

  // 상세 or 글쓰기 → heroCard + Outlet만 렌더링
  if (id || isWrite) {
    return (
      <>
        {heroCard}
        <Outlet />
      </>
    );
  }

  // 목록
  return (
    <>
      {heroCard}
      <CustomServiceNoticeListComponent
        notices={notices}
        tabs={TABS}
        activeTab={activeTab}
        currentPage={currentPage}
        totalPages={totalPages}
        isLoading={isLoading}
        error={error}
        onTabChange={handleTabChange}
        onPageChange={setCurrentPage}
        onNoticeClick={handleNoticeClick}
        onWriteClick={handleWriteClick}
        isAdmin={isAdmin}
      />
    </>
  );
};

export default CustomServiceNoticeListContainer;
