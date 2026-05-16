const ROOT_URL = "http://localhost:10000/api";

export const getChatRooms = async (page = 1) => {
  const response = await fetch(`${ROOT_URL}/chats/rooms?page=${page}`);
  if (!response.ok) throw new Error("채팅방 목록을 불러오는 데 실패했습니다.");
  const json = await response.json();
  return json.data;
};

export const getChatMessages = async (chatRoomId) => {
  const response = await fetch(`${ROOT_URL}/chats/${chatRoomId}`);
  if (!response.ok) throw new Error("채팅 메시지를 불러오는 데 실패했습니다.");
  const json = await response.json();
  return json.data;
};

export const sendChatMessage = async (chatRoomId, chatContent) => {
  const response = await fetch(`${ROOT_URL}/chats/${chatRoomId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatContent, chatType: "텍스트" }),
  });
  if (!response.ok) throw new Error("메시지 전송에 실패했습니다.");
  return await response.json();
};
