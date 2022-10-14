import styles from "./styles/personInfo.module.css";

const PersonInfo = () => {
  return (
    <div className={styles.personInfo}>
      <div className={styles.address}>
        <img
          className={styles.icon}
          alt="address"
          src={process.env.PUBLIC_URL + "house.jpg"}
        />
        Belarus, Minsk
      </div>
      <div className={styles.icon}>
        <img
          className={styles.icon}
          alt="phone"
          src={process.env.PUBLIC_URL + "house.jpg"}
        />
        github
      </div>
      <div className={styles.icon}>
        <img
          className={styles.icon}
          alt="phone"
          src={process.env.PUBLIC_URL + "house.jpg"}
        />
        HTTPS://WWW.LINKEDIN.COM/IN/NATALLIA- ALISEVICH/
      </div>
      <div className={styles.icon}>
        {" "}
        <img
          className={styles.icon}
          alt="house"
          src={process.env.PUBLIC_URL + "house.jpg"}
        />
        ALISEVICH.NATALI@GMAIL.COM
      </div>
      <div className={styles.icon}>
        {" "}
        <img
          className={styles.icon}
          alt="phone"
          src={process.env.PUBLIC_URL + "house.jpg"}
        />
        +375 29 746 54 18
      </div>
      <div>
        I am a Frontend/React.js Developer with a technical background.
        {/* I already have experience with
functional, integration, system,
and user acceptance testing
during my software testing
training. */}
        I can participate in creating useful beautiful products and solving
        business problems.I intend to grow professionally and improve my skills
        Now I'm eager to join project where I can use my skills.
      </div>
    </div>
  );
};
export default PersonInfo;
