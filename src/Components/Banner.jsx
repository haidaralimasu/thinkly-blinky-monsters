import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useTotalSupply, useMaxSupply, useCost, useWeiCost } from "../hooks";
import { notifyError, notifySuccess } from "../helpers";
import { address } from "../contracts";
import nftabi from "../contracts/abi.json";

const nftInterface = new ethers.utils.Interface(nftabi);

export default function Banner() {
  const { account, activateBrowserWallet } = useEthers();
  const cost = useCost();
  const weiCost = useWeiCost();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();
  const [amount, setAmount] = useState(1);
  const [minting, setMinting] = useState(false);

  const increase = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };

  const deacrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const onError = () => {
    notifyError("Please Connect To Ethereum Mainnet");
  };

  async function handleMint() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const txCost = Number(weiCost) * amount;
      let nftcontract = new ethers.Contract(address, nftInterface, signer);
      let transaction = await nftcontract.mint(amount, {
        value: txCost.toString(),
      });
      await transaction.wait();
      setMinting(false);
      setAmount(1);
      notifySuccess("Successfully Minted TBM");
    } catch (error) {
      notifyError("Something Went Wrong");
      setAmount(1);
      console.log(error);
      setMinting(false);
    }
  }

  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center pt-lg-5 pt-4">
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
            <div data-aos="fade-left" data-aos-duration={3000}>
              <h1 className="text-white text-lg-start text-center  h1_banner">
                The Thinky Blinky <br className="d-none d-lg-block" />
                Monster Project <br />
                {totalSupply}/{maxSupply}
              </h1>
              <p className="text-white text-lg-start text-center fs_small h1_banner pt-2 pe-lg-5">
                These monsters are just like Worry Dolls. Turning NFTs into
                quality sleep and anxiety relief. We are changing the way
                everyone maintains mind/body health and relief from WORRY!
              </p>
              <div className="my-4">
                <div id="timer" />
              </div>
              <div className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-start">
                <div>
                  {/* <a
                    href="#"
                    className="btn btn-outline-danger text-white rounded_border border_pink h1_banner fs-16 px-4"
                  >
                    Start Now
                  </a> */}

                  <div>
                    {account ? (
                      <>
                        <button
                          onClick={() => deacrease()}
                          className="btn btn-outline-danger text-white rounded_border border_pink h1_banner fs-16 px-4"
                        >
                          -
                        </button>

                        {minting ? (
                          <button className="btn btn-outline-danger text-white rounded_border border_pink h1_banner fs-16 px-4">
                            Please Wait
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMint()}
                            className="btn btn-outline-danger text-white rounded_border border_pink h1_banner fs-16 px-4"
                          >
                            Mint {amount} for {amount * cost}
                          </button>
                        )}

                        <button
                          onClick={() => increase()}
                          className="btn btn-outline-danger text-white rounded_border border_pink h1_banner fs-16 px-4"
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => activateBrowserWallet(onError)}
                        className="btn btn-outline-danger text-white rounded_border border_pink h1_banner fs-16 px-4"
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="d-flex justify-content-center pt-4 pt-lg-0"
              data-aos="fade-right"
              data-aos-duration={3000}
            >
              <img
                className="w-60 rounded-imag"
                src="assets/img/thinky-banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
