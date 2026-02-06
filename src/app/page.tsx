
import styles from "./page.module.css";
import PageFrame from "./components/PageFrame"

function Header(){
  return <div>Berimbau Bau Bau, berilum baubau</div>
}

function Footer(){
  return <div>
    <p>I thought i saw your face today</p>
    <p>But then i turn my head away</p>
    <p>And faced against the trees</p>
    <p>But now it's just a memory</p>
    <p>As they come... as they come</p>
    <p>And i couldnt help</p>
    <p>But fall in love again</p>
    <p>No I couldnt help but fall in love again</p>
  </div>
}

export default function Home() {
  return (
    <PageFrame header={<Header/>} footer={<Footer/>}>
      <p>Hello world</p>
      <p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p><p>Hello world</p>
      <p>Hello world</p>
    </PageFrame>
  );

}
