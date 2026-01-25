import type { WindowData } from "./widowData";

export default function WindowContent({ data }: { data: WindowData }) {
  if (data.type === "code") {
    return (
      <pre className="code-block">
        <code>{data.content}</code>
      </pre>
    );
  }

  return <p className="text-block">{data.content}</p>;
}
