// import styled from 'styled-components';
import style from './styles/experience.module.css';
// const FooterWrapper=styled.footer`
// width:100%;
// height:50px;
// background:black;
// color:white;
// color:${props=>props.color||'white'};
// display:flex;
// justify-content:center;
// align-items:center;`

const Experience=()=>{
return(
<div className={style.experience}>Опыт работы</div>
)
}

//   с пом этого мы сможем принимать какие-то вещи с помощью пропсов (передача данных от комп к комп)
export default Experience;