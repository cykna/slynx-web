import Link from "next/link";
import MainStyles from "./main.module.css";
import Feature from "@/app/components/feature/feature";
import Icon from "@/app/components/icon";
/**
* The component of the main page of slynx. This is idealized to be shown only on /.
* This component can be used to nagivate to `/docs/get-started`
* The component uses the following css variables:
*   `--foreground`: For the subtitle text
*   `--hover-color`: As the primary color, due to its saturation
*   `--primary-base-color-rgb`: For the background of 'get started' button
*/
export default function MainPage() {
  return (
    <main className={MainStyles.main}>
      <div className={MainStyles.entry}>
        <h1>Slynx</h1>
        <h2>Customizable, Fast, && Efficient </h2>
        <div className={MainStyles.start_now}>
          <Link href="/docs/get-started">Get Started</Link>
        </div>
      </div>
      <div className={MainStyles.lang_specs}>
        <h1>What is Slynx?</h1>
        <div>
          <Feature title="Performatic Language" icon={<Icon icon="material-symbols:speed" width="48" height="48" className={MainStyles.feature_icon} />} >
            Hello world
          </Feature>
          <Feature title="Performatic Language" icon={<Icon icon="material-symbols:speed" width="48" height="48" className={MainStyles.feature_icon} />} >
            Hello world
          </Feature>
          <Feature title="Performatic Language" icon={<Icon icon="material-symbols:speed" width="48" height="48" className={MainStyles.feature_icon} />} >
            Hello world
          </Feature>
        </div>
      </div>
    </main>
  )
}
