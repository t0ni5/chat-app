interface Message {
  id: string;
  text: string;
  time: string;
  user: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  messages: Message[];
  createdBy: string;
}
