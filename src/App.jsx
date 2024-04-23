
import Navbar from "./component/Navbar";
import "./App.css";
//import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";

function App() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownVisible(false);
  // };
  return (
    <div className="App">
            <header className="App-header">     
        <div
          className="menu"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {/* <DropdownMenu /> */}
          {/* {isDropdownVisible && <Navbar />} */}
          <Navbar />
        </div>
        </header>
        <div className="banner">
        <img src="../../public/main-back.JPG"></img>
        <h1>Добро пожаловать в мир фотографии</h1>
       </div> 
       <div className="flex">
      </div>
    </div>
  );
}

export default App;
