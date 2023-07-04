import logo from '../images/mlabs-color-2 1.png';
import avatar from '../images/Ellipse 1.png'


function Header() {
    return (
        <>
            <div className="grid-container-header">
                <div className="item">   
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="item">
                    <div className="user_name">
                        <p>Anselmo Carlos</p>
                    </div>
                    <img src={avatar} className="avatar" alt="logo" />
                </div>
            </div>
        </>
       

    );
  }


export default Header;
