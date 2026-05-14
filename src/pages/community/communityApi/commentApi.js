const ROOT_URL = "http://localhost:10000/api";

export const getComments = async (postId) => {
  const response = await fetch(`${ROOT_URL}/comments/${postId}`);
  if (!response.ok) throw new Error("댓글을 불러오는 데 실패했습니다.");
  const result = await response.json();
  return result.data || [];
};
