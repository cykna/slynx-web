import PageFrameStyles from "./PageFrame.module.css";

export interface PageFrameProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

export default function PageFrame(props: PageFrameProps) {
  return (
    <div className="relative flex flex-col items-center w-full bg-foreground text-background overflow-hidden p-6 pt-0">
      <header className="w-full">
        {props.header}
      </header>
      <div className="p-6 flex flex-col rounded-[50px] bg-background z-0 relative overflow-hidden w-[calc(100%-var(--frame-width))] *:z-10 *:relative">
        {/* Global background shade effects, ordered top-to-bottom as in design */}
        <img
          src="/ShadeEffect1.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade1}`}
        />
        <img
          src="/ShadeEffect2.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade2}`}
        />
        <img
          src="/ShadeEffect3.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade3}`}
        />
        <img
          src="/ShadeEffect4.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade4}`}
        />
        <img
          src="/ShadeEffect5.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade5}`}
        />
        <div className="text-foreground">
          {props.children}
        </div>
      </div>
      {props.footer}
    </div>
  )
}
