const ROOT_URL = "http://localhost:10000/api";

export const getChatRooms = async (page = 1) => {
  const response = await fetch(`${ROOT_URL}/chats/rooms?page=${page}`);
  if (!response.ok) throw new Error("채팅방 목록을 불러오는 데 실패했습니다.");
  const json = await response.json();
  return json.data;
};
