import "./Home.css";
import login_icon from "../../../assets/login_icon.png";
const Home = () => {
  return (
    <div className="home-container">
      <img
        src="https://pbs.twimg.com/media/CnX1wcEXEAAOGcM.jpg"
        className="home-image"
        alt="GlobeChat"
      />
      <p className="home-text">
        Hey! Welcome to <span>GlobeChat</span>
      </p>
      <p className="home-description">
        A place where you can contact with anyone without worrying about
        processes like phone verification or email
      </p>
      <button className="login-button">
        <img src={login_icon} alt="login icon" />
        <span>Login</span>
      </button>
    </div>
  );
};

export default Home;
