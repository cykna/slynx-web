import { useRef, useState } from "react";
import "./contents.css";

export function* generator_of<T, R>(value: Iterable<T, R>) {
  yield* value;
}

export interface PageContentArg {
  title: string,
  children: React.ReactNode,
  click?: () => void,
}

export function Topic(args: PageContentArg) {
  return <div className="topic">
    <h1 className="data-title">{args.title}</h1>
    <>{args.children}</>
  </div>
}

export function GettingStarted() {
  return <>
    <Topic title="Getting started">
      Bla bla bla bli blo blu
    </Topic>
  </>
}

export function TopicPreview(args: PageContentArg) {
  return <div className="topic-preview" onClick={args.click}>
    <div><h1 className="topic-title">{args.title}</h1></div>
    <div>{args.children}</div>
  </div>
}

/** The contents of the language, such as goal, rfc, doc, etc. It's only a bridge to them */
export default function Contents() {
  const left = useRef<HTMLElement>(null);
  const [centerChild, setCenterChild] = useState(null as React.ReactNode);


  return <div className="contents">
    <div className="contents-left">
      <h1 className="lang-title">Slynx</h1>
      <h2 className="subtitle">Building Your Mom So You Don't Have To</h2>
    </div>
    <div className="content-center">
      {centerChild ? centerChild : false}
    </div>
    <div className="right-content" ref={left as any}>
      <TopicPreview title="About">
        <p>Check the goals and the language aims on the future</p>
      </TopicPreview>

      <TopicPreview title="Getting Started" click={() => setCenterChild(GettingStarted())}>
        <p>Start here with links and basic informations about the language</p>
      </TopicPreview>
      <TopicPreview title="Links">
        <p>Get related links to communities, tooling, and etc</p>
      </TopicPreview>
      <TopicPreview title="Changelogs">
        <p>See the changelogs and what've changed on the lang</p>
      </TopicPreview>
      <TopicPreview title="FAQ">Check frequent questions</TopicPreview>
    </div>
  </div>
}
