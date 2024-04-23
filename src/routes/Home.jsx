import Footer from "../component/Footer";
import App from "../App";
import "../style/index.css";

const Home = () => {
  return (
    <div className="page">
      <App />
          <div className="first-block">
          <div id="cards"><img src="../../public/first-photo.jpg" alt="" /></div>
          <div id="cards"><img src="../../public/second-photo.jpg" alt="" /></div>
          <div id="cards"><img src="../../public/thirds-img.jpg" alt="" /></div>
      </div>
      <div className="second-block">
          <h2>instagram</h2>
          <form action="https://www.instagram.com/just_photo_aya/" target="_blank">
          <button>More!</button></form>
      </div>
           <Footer/>
    </div>
  );
};

export default Home;
