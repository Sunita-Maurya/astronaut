import React, { useState } from "react";
import ModalBeanSpacer from "./BeanSpacerModal/ModalBeanSpacer";
import ModalForWallet from "./walletConnect./ModalForWallet";
import Modal from "react-modal";

function index() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [whichModal, setWhichModal] = useState("mint");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#202932",
      border: "2px solid #1668D4",
    },
    overlay: {
      background: "rgba(0,0,0,0.7)",
    },
  };
  const modalWrapper = {
    background: "#202932",
    width: "350px",
    height: "350px",
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setWhichModal("mint");
    setIsOpen(false);
  }
  return (
    <div>
      {/* <ModalForWallet />
      <ModalBeanSpacer clickHanlder={clickHanlder} open={open} /> */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* {!account && whichModal === "mint" && ( */}
        <ModalForWallet />
        {/* )} */}

        {/* {!account && whichModal === "wallet" && (
          <div style={modalWrapper}>
            <div
              style={{
                background: "#1668D4",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div>Select your wallet</div>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "30x",
                  padding: "5px",
                }}
                onClick={closeModal}
              >
                <RxCross2 style={{ fontSize: "24px" }} />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "200px",
              }}
            >
              <img
                src={metamask}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #1668D4",
                }}
                onClick={onConnectWithMetamaskClick}
              />
              <img
                src={connectWallet}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #1668D4",
                  backgroundSize: "contain",
                }}
                onClick={onConnectWithWalletConnect}
              />
            </div>
          </div>
        )} */}

        {/* if account */}
        {/* {account && buyWithMatic && (
          <div style={modalWrapper}>
            <div
              style={{
                background: "#1668D4",
                padding: "10px",
                display: "flex",
                justifyContent: "space-evenly",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div>Select Below</div>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "30x",
                  padding: "5px",
                }}
                onClick={closeModal}
              >
                <RxCross2 style={{ fontSize: "24px" }} />
              </button>
            </div>
            <div style={{ padding: "50px 10px", textAlign: "center" }}>
              <div
                style={{
                  border: "2px solid #1668D4",
                  margin: "10px auto",
                  padding: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    padding: "5px",
                  }}
                >
                  Connected Wallet
                </p>
                <p>
                  {account.slice(0, 6)}....{account.slice(-6)}
                </p>
                <a
                  href="https://opensea.io/collection/penguin-posse-club"
                  target="_blank"
                  className="btn-modal"
                  style={{ display: "block" }}
                >
                  Buy on Opensea
                </a>
              </div>
              <button className="btn-modal" onClick={logout}>
                DISCONNECT
              </button>
            </div>
          </div>
        )} */}

        {/* {!buyWithMatic && (
          <div style={modalWrapper}>
            <div
              style={{
                background: "#1668D4",
                padding: "10px",
                display: "flex",
                justifyContent: "space-evenly",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div>Mint with Matic</div>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "30x",
                  padding: "5px",
                }}
                onClick={closeModal}
              >
                <RxCross2 style={{ fontSize: "24px" }} />
              </button>
            </div>
            <div style={{ padding: "50px 10px", textAlign: "center" }}>
              <div
                style={{
                  border: "2px solid #1668D4",
                  margin: "10px auto",
                  padding: "10px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    value={count}
                    onChange={(e) => {
                      setCount(e.target.valueAsNumber);
                    }}
                    style={{
                      background: "transparent",
                      border: "1px solid #1668D4",
                      padding: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "15%",
                      background: "transparent",
                      border: "1px solid #1668D4",
                      padding: "5px",
                    }}
                    onClick={() => setCount(remainingNfts)}
                  >
                    Max
                  </button>
                </div>

                <div>
                  <button
                    className="btn-modal"
                    onClick={() => decrementCountHandler()}
                  >
                    -
                  </button>
                  <button
                    className="btn-modal"
                    onClick={() => IncrementCountHandler()}
                  >
                    +
                  </button>
                  <button
                    disabled={isdisable || count === 0}
                    className="btn-modal"
                    onClick={mint}
                  >
                    Mint Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </Modal>
    </div>
  );
}

export default index;
export { ModalForWallet, ModalBeanSpacer };
