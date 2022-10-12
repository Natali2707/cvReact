import style from "./styles/main.module.css";
import Skills from "./Skills";
import Hobby from "./Hobby";
import Experience from "./Experience";
import PersonInfo from "./PersonInfo";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.leftBlock}>
        <PersonInfo />
      </div>
      <div className={style.rightBlock}>
        <Skills />
        <Hobby />
        <Experience />
      </div>
    </main>
  );
};

export default Main;
