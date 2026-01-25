import type { WindowData } from "./widowData";

export const WINDOWS: WindowData[] = [
  {
    id: "1",
    title: "Bem-vindo",
    user: "system",
    type: "text",
    content: `style AppText(size: int, color:int) {
  styleprop font_family = "Sans Serif";
  styleprop font_size = size;
  styleprop text_color = color;
}

style Rounded(pixels:int){
  styleprop border_radius = pixels;
}

style RoundedCounter(color:int, round:int) inherits Rounded(round) {
  styleprop color = color;
}

static style GeneralText = AppText(16,0xffffff);

component Counter {
  prop value = 0;
  pub(parent) style: Style?;

  Div {
    style: style matches Some(s) ? s : RoundedCounter(0xff0000, 24),
    P {
      text: value,
      style: GeneralText
    }
    Button {
      text: "Increase to be $(value+1)",
      style: GeneralText,
      on_click: event -> value += 1;
    }
  }
}

component AlotOfCounters<N:const int > 0>{
  for i in 0..N do if i % 2 {
    Counter{}
  };
}

func main():Component -> AlotOfCounters<20>;`,
  },
  {
    id: "2",
    title: "Código SLYNX",
    user: "dev",
    type: "code",
    language: "SLYNX",
    content: `window {
  title: "Hello"
  width: 100
}`,
  },
  {
    id: "3",
    title: "Nota",
    user: "admin",
    type: "text",
    content: "Toda window é renderizada dinamicamente.",
  },
];
