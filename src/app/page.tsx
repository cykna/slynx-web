
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/header";
import PageFrame from "./components/pageFrame/PageFrame";
import MainPage from "./pages/main/main";


export default function Home() {
  return (
    <PageFrame header={<Header />} footer={<Footer />}>
      <MainPage />
    </PageFrame>
  );

}
