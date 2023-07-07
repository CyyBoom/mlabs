import images from '../images/index';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="grid-container-home">
                <div className="item">   
                    <img src={images.initial} className="initial" alt="initial" />
                </div>
                <div className="item">   
                    <Link to="/Schedueler">
                        <button type="button" className="scheduele_button1">Agendar post</button>
                    </Link>
                </div>
            </div>
        </>
    );
  }


export default Home;

