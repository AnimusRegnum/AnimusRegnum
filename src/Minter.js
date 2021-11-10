import { useEffect, useState } from "react";
import {
  connectWallet, drawCash,
  getCurrentWalletConnected,
  mintNFT,
} from "./util/interact.js";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [numberoftoken, setnumbertoken] = useState("");
  const [url, setURL] = useState("");
  const [isMainNet, setIsMainNet] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setIsMainNet(window.ethereum.networkVersion == 1);
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);



  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (chainId) =>{
       setIsMainNet(chainId == "0x1");
      });

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Click mint button to mint an NFT.");
        } else {
          setWallet("");
          setStatus("Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT (url, name, numberoftoken);
    setStatus(status);
    if (success) {
      setName("");
      setnumbertoken("");
      setURL("");
    }
  };
  const onDrawPressed = async () => {
    const { status } = await drawCash ();
    setStatus(status);
  };



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
      <li>
        <i className="glyphicon glyphicon-credit-card"></i>
        <a href="#"onClick={connectWalletPressed}>
          {walletAddress.length > 0 ? (
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
          ) : (
              <span>Connect</span>
          )}
        </a>
      </li>
  );
};

export default Minter;
