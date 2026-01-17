import "./home.css";
import Contents from "../components/contents.tsx";
import Previews from "../components/previews.tsx";
import WindowSection from "../components/WindowSection/windowSection.tsx";

export default function Home() {
  return (
    <div className="details">
      <WindowSection />
      <Previews />
      <div>
        <Contents />
      </div>
    </div>
  );
}
