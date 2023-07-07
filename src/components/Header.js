import logo from '../images/mlabs-color-2 1.png';
import avatar from '../images/ellipse.png'


function Header() {
    return (
        <header className="App-header">
            <div className="grid-container-header">
                <div className="item">   
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="item">
                    <div className="user_name">
                        <p className="user">Anselmo Carlos</p>
                    </div>
                    <img src={avatar} className="avatar" alt="logo" />
                </div>
            </div>
        </header>  
    );
  }


export default Header;
