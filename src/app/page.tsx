import { Footer } from "./components/footer/Footer";
import PageFrame from "./components/pageFrame/PageFrame";
import styles from "./page.module.css";

function Header() {
  return <div>Berimbau Bau Bau, berilum baubau</div>
}



export default function Home() {
  return (
    <PageFrame header={<Header />} footer={<Footer />}>
      <p>Hello world</p>
      <p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p>
      <p>Hello world</p>
    </PageFrame>
  );
}
