import { useEffect, useState } from "react";

const Contex = (props) => {

    const initialCode = "Next";
    const [Code, setCodeText] = useState(initialCode); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    const changeCode = (text) => {
        setCodeText(text);
    }
    function Greeting() {
        if (Code == "team") {
            return (
                <p>Penis</p>
            );
        }else if(Code == "contact"){
            return (
                <p>Kir</p>
            );
        }else{
            return (
                <p>Kir</p>
            );
        }
    }
    return (
        /*  <div className="Minter">

            <button id="walletButton" onClick={connectWalletPressed}>
              {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>
            {walletAddress.length > 0 ? (
                isMainNet ?
                    (<button id="mintButton" onClick={toggleModal}>
                      Mint NFT
                    </button>)
                    :
                    (<button id="mintButton" >
                      Change to Mainnet Network!
                    </button>)
            ) : ''}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
              <form>
                <h2> Number of tokens: </h2>
                <input
                    type="number"
                    placeholder="e.g. 5;)"
                    onChange={(event) => setnumbertoken(event.target.value)}
                />
              </form>


              <p id="status" style={{ color: "white" }}>
                {status}
              </p>
              <button onClick={onMintPressed}>Mint</button>
            </Modal>



          </div>*/
        <Greeting />
    );
};

export default Contex;
