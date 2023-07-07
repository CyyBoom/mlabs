import images from '../images/index';

function Header() {
    return (
        <header className="App-header">
            <div className="grid-container-header">
                <div className="item">   
                    <img src={images.logo} className="App-logo" alt="logo" />
                </div>
                <div className="item">
                    <div className="user_name">
                        <p className="user">Anselmo Carlos</p>
                    </div>
                    <img src={images.avatar} className="avatar" alt="logo" />
                </div>
            </div>
        </header>  
    );
  }


export default Header;
