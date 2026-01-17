import { useRef } from "react";
import "./contents.css";

export function* generator_of<T, R>(value: Iterable<T, R>) {
  yield* value;
}

export interface PageContentArg {
  title: string,
  children: React.ReactNode
}
export function PageTopic(args: PageContentArg) {
  return <div className="topic">
    <div><h1 className="topic-title">{args.title}</h1></div>
    <div>{args.children}</div>
  </div>
}

/** The contents of the language, such as goal, rfc, doc, etc. It's only a bridge to them */
export default function Contents() {
  const left = useRef<HTMLElement>(null);
  const right = useRef<HTMLElement>(null);

  return <div className="contents">
    <div className="contents-bg">
      <h1 className="lang-title">Slynx</h1>
      <h2 className="subtitle">Building Your Mom So You Don't Have To</h2>
    </div>
    <div className="contents-fg">
      <div className="content left-content" ref={left as any}>
        <PageTopic title="TOPICO">Abacate</PageTopic>
        <PageTopic title="TOPICO">Abacate</PageTopic>
        <PageTopic title="TOPICO">Gengibre</PageTopic>
        <PageTopic title="TOPICO">Gergilim</PageTopic>
      </div>
      <div className="preview-contents content center-contenr">

      </div>
      <div className="content right-content" ref={right as any}>
        <PageTopic title="TOPICO">Inhonho</PageTopic>
        <PageTopic title="TOPICO">Xicarinha</PageTopic>
        <PageTopic title="TOPICO">Las Ocho Chaves</PageTopic>
        <PageTopic title="TOPICO">Nikolas Maduro</PageTopic>
      </div>
    </div>

  </div>
}
