import { pinJSONToIPFS } from "./pinata.js";
require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../TestAbol.json");
const contractAddress = "0xdC68Df821103ABAB3495284cB2B7Fb0F8Ddb9B96";

//const contractABI = require('../contract-abi.json')
//const contractAddress = "0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

export const connectWallet = async () => {
  if (window.ethereum) {

      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "Type the amount of tokens you want to buy!",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "Something went wrong: " + err.message,
        };
      }


  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {

      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          if (window.ethereum.networkVersion == 1) {
            return {
              address: addressArray[0],
              status: "Type the amount of tokens you want to buy!",
            };
          }else{
            return {
              address: addressArray[0],
              status: "Potato!",
            };
          }
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "Something went wrong: " + err.message,
        };
      }

  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

async function loadContract() {
  return new web3.eth.Contract(contractABI, contractAddress);
}

export const mintNFT  = async (url, name, description) => {

  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;
  //const pinataResponse = await pinJSONToIPFS(metadata);
  //const tokenURI = pinataResponse.pinataUrl;

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  const tokensPrice = 0.035 * description;
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: web3.utils.toHex(web3.utils.toWei(tokensPrice.toString(),"ether")),
    gas: '0x76c0',
    data: window.contract.methods
        .mintShoe(description)
        //.mintNewToken("lol", `ShoeVault #lol`,`https://nft.abolfazl.dev/src/loading.mp4`,` This token represents membership to the ShoeVault\nAt the ShoeVault we have a IRL collection of sneakers that belongs to the community.\n\nThe end goal is to become a modern version of StockX, of course, run by a DAO \nVisit www.shoevault.io for more details`,'https://shoevault.io/', "1000000000000000000", true)
        .encodeABI(),
  };

  if (description == 0 || description  > 15 ) {
    return {
      success: false,
      status: "You can just mint 15 Tokens per time!",
    };
  }else{
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
            "Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" +
            txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "Something went wrong: " + error.message,
      };
    }

  }

};
export const drawCash  = async () => {

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
        .withdraw()
        // .mintNewToken("lol", `ShoeVault #lol`,`https://nft.abolfazl.dev/src/loading.mp4`,` This token represents membership to the ShoeVault\nAt the ShoeVault we have a IRL collection of sneakers that belongs to the community.\n\nThe end goal is to become a modern version of StockX, of course, run by a DAO \nVisit www.shoevault.io for more details`,'https://shoevault.io/', "1000000000000000000", true)
        .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
          "Check out your transaction on Etherscan: https://etherscan.io/tx/" +
          txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "Something went wrong: " + error.message,
    };
  }
};
