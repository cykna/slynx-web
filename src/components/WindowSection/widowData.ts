export type WindowContentType = "text" | "code";

export interface WindowData {
  id: string;
  title: string;
  type: WindowContentType;
  content: string;
  user: string;
  language?: "SLYNX";
}
