import style from "./styles/avatar.module.css";
import ava from './images/avatar.png';
import teach from './images/logo-teach.png';
import skillUp from './images/skillUp.png';

const Avatar = () => {
  return (
    <div className={style.head}>
      <nav className={style.navigation}>
        <div className={style.avatar}>
        <img  className={style.pic} src={ava}  alt=" myPhoto" />
          {/* <img
            className={style.pic}
            alt="my photo"
            src={process.env.PUBLIC_URL + "avatar.png"}
          /> */}
        </div>


        <div className={style.introduce}>
            <h1>ALISEVICH NATALLIA</h1>
            <h3>OBJECTIVE:<strong>
            Front End Developer</strong></h3>
        </div>
        
        <div className={style.education}>
          <h1>Education and Training</h1>
          <ul>
          <li className={style.educ}>  
          TeachMeSkills <img  className={style.logo} src={teach}  alt=" TeachMeSkills" />April 2022-...
          <h4>Frontend/React.js Developer</h4>
             </li>
          <li className={style.educ}>
          SkillUp <img  className={style.logo} src={skillUp}  alt="SkillUp" />June 2021-October 2021 
          <h4> QA-engineer. Writing test documentation: bug reports (Jira), test plan,check-lists (Jira, TestRail), test cases (Jira, TestRail)</h4>
             </li>
            <li className={style.educ}>
              Mogilev Technological Institute
              <h4>Accountant-economist</h4>
            </li>
           
            <li className={style.educ}>
              Mogilev Technological Institute
              <h4>Process Engineer and Chemical Engineer <br/>
              <i>
                Winner of the republican competition of scientific works among
                university students
              </i></h4>
            </li>
          </ul>
        </div>


      </nav>
    </div>
  );
};
export default Avatar;
