// import './styles/header.css';
import style from './styles/avatar.module.css';
// import logo from './images/avatar.png'

const Avatar=()=>{
    return(
        <div className={style.head}>
            <nav className={style.navigation}>
           <div className={style.avatar}> 
           
           <img 
        // style={{display:'none'}}
        className={style.pic}
        alt={style.pic}
        src={process.env.PUBLIC_URL+'avatar.png'}/>
        <img 
        />
           </div>
           <div className={style.education}>
            <ul>
                <li className={style.educ}>Mogilev University</li>
                <li className={style.educ}>Mogilev University</li>
                <li className={style.educ}>Mogilev University</li>
            </ul>
           </div>
            </nav>
        </div>
    )
}
export default Avatar; 