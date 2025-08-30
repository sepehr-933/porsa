// self-explanatory for declaring entities within our app

export type ChatRoles = "user" | "admin";

export interface IMessage {
  key: string;
  text: string;
  role: ChatRoles;
  imagesCount?: number;
}
