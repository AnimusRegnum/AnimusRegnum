import './App.css';
import Minter from './Minter'
import Contex from './contex'
import {useState} from "react";
function App() {
    const initialCode = "Next";
    const [Code, setCodeText] = useState(initialCode); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    const changeCode = (text) => {
        setCodeText(text);
    }
    function Content() {
        if (Code == "contact") {
            return (
                <div>
                    <p style={{fontSize: '50px', display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '30px'}}>Contact</p>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <form id="contact-form" className="form-horizontal" role="form">

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NAME" name="name"
                                   value="" required=""></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"
                                   value="" required=""></input>
                        </div>
                    </div>

                    <textarea style={{resize: 'none'}} className="form-control"  placeholder="MESSAGE" name="message" required=""></textarea>

                    <button className="btn btn-light send-button" id="submit" type="submit" value="SEND">
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                        </div>

                    </button>

                </form>
            </div>
                </div>
            );
        }else if(Code == "team"){
            return (
           <div>
            <div className="card">
                <div className="photo"
                     style={{backgroundImage: 'url("assets/Site/effico.jpg")'}}></div>
                <div className="banner"></div>
                <ul>
                    <li><b>Efficio Ignis Vitae</b></li>
                    <li>HEAD OF PROJECT DEVELOPMENT</li>

                </ul>
                <div className="social-media-banner">
                    <a href="https://efficio.carrd.co/" target="_blank"><i className="glyphicon glyphicon-globe" style={{fontSize: '20px'}}></i></a>
                </div>
            </div>
            <div className="card">
                <div className="photo"
                     style={{backgroundImage: 'url("assets/Site/abol.jpg")'}}></div>
                <div className="banner"></div>
                <ul>
                    <li><b>Abolfazl Arab</b></li>
                    <li>Blockchain Developer</li>
                </ul>
                <div className="social-media-banner">
                    <a href="https://twitter.com/arab_eth" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="mail:inbox@abolfazl.de" target="_blank"><i className="glyphicon glyphicon-envelope"
                                                                        style={{fontSize: '20px'}}></i></a>
                    <a href="https://www.instagram.com/abo._.l/" target="_blank"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/abolfazl-arab/" target="_blank"><i
                        className="fa fa-linkedin"></i></a>
                </div>
            </div>
           </div>

            );
        }else{
            return (
                <p>
                    <ul className="a">
                        <li>The NFTMMORPG, where you create your own society as a sovereign in the universe of
                            Animus Regnum
                        </li>
                        <li>Create your government and command fleets. Your choices affect the overall story.
                        </li>
                        <li>Freedom to play however you like. Eplore, hunt, build, fight, or go on quest and
                            play the game how you wish with friends.
                        </li>
                        <li>Every asset is an NFT in the game and the currency in-game will also be
                            cryptocurrency that can be traded off-game.
                        </li>
                        <li>Unique races, classes, and fighting styles for players to experience unique
                            character builds.
                        </li>
                        <li>Some assets like starships, cars and other similar assest will come with certain IP
                            rights to use these assest outside of game.
                        </li>
                    </ul>
                </p>
            );
        }
    }


  return (
    <div className="App">
        <div>
            <div className="container-fluid splash" id="splash">
            </div>
            <div className="main_box" id="main">
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div className="logoBox">
                        <p>ANIMUS</p>
                        <hr className="white"></hr>
                            <p>REGNUM </p>
                    </div>

                    <div className="contentBox" id="mainContent">
                        <Content>
                        </Content>
                    </div>
                </div>

                <div className="right">
                    <div className="sidebar_menu">
                        <div className="menu">
                            <ul>
                                <Minter>
                                </Minter>

                                <li>
                                    <i className="glyphicon glyphicon-th-large"></i>
                                    <a href="Main.html" target="_blank">Lore</a>
                                </li>
                                <li onClick="">
                                    <i className="glyphicon glyphicon-book"></i>
                                    <a href="About.html" target="_blank">About</a>
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-calendar"></i>
                                    <a href="#" style={{pointerEvents: 'none'}}>Minting</a>
                                    <i className="glyphicon glyphicon-lock"></i>
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-folder-open"></i>
                                    <a href="#" style={{pointerEvents: 'none'}}>Inventory</a>
                                    <i className="glyphicon glyphicon-lock"></i>
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-th-list"></i>
                                    <a href="#" style={{pointerEvents: 'none'}}>Cataloge</a>
                                    <i className="glyphicon glyphicon-lock"></i>
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-user"></i>
                                    <a href="#" onClick={() => changeCode("team")}>Team</a>
                                </li>
                                <li>
                                    <i className="glyphicon glyphicon-earphone"></i>
                                    <a href="#" onClick={() => changeCode("contact")} style={{pointerEvents: 'none'}}>Contact</a>
                                    <i className="glyphicon glyphicon-lock"></i>
                                </li>


                            </ul>
                        </div>
                        <div className="social_media">
                            <ul>
                                <li>
                                    <i className="glyphicon glyphicon-question-sign"></i>
                                    <a href="#" style={{pointerEvents: 'none'}}>Help</a>
                                    <i className="glyphicon glyphicon-lock"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <footer className="container-fluid footer">
            </footer>
        </div>


    </div>
  );
}

export default App;
