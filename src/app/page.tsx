
import { Footer } from "./components/footer/Footer";
import PageFrame from "./components/pageFrame/PageFrame";

function Header() {
  return <div>Berimbau Bau Bau, berilum baubau</div>
}
export default function Home() {
  return (
    <PageFrame header={<Header />} footer={<Footer />}>
      <MainPage />
    </PageFrame>
  );

}
