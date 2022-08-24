import {
  faAdd,
  faCoins,
  faImage,
  faPaperPlane,
  faPeopleGroup,
  faPlane,
  faTrophy,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, Timestamp, collection, setDoc, doc } from "firebase/firestore";
import { db } from "./services/firebase";
import { useRef, useState } from "react";
import { addressState } from "./atoms/atoms";
import { useRecoilState } from "recoil";

import { ethers } from "ethers";
import abi from "../src/artifacts/utils/BirdBank.json";

interface BT_CreateObj_Props {}

const BT_CreateObj_ = ({}: BT_CreateObj_Props) => {
  const [fund_, setFund_] = useState("50");
  const [spots_, setSpots_] = useState("N/A");
  const [split_, setSplit_] = useState("3");
  const [body_, setBody_] = useState("");
  const [position_, setPosition_] = useState("right-[130px]");
  const [visibility_, setVisibility_] = useState(
    "opacity-0 pointer-events-none"
  );

  const [current_, setCurrent_] = useState(0);
  const [charCount_, setCharCount_] = useState(140);

  const [address_, setAddress_] = useRecoilState(addressState);

  const makePayment = async () => {
    try {
      const { ethereum } = window;

      if (window.ethereum) {
        // 👇️👇️👇️ Important contract/testnet specifics..
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contractABI = abi;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        const birdBank = new ethers.Contract(
          contractAddress,
          contractABI.abi,
          provider.getSigner(),
        );

        // 👇️👇️👇️ Contract functions..
        try{
          const data = await birdBank.fund("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", {value: ethers.utils.parseEther(`${parseInt(fund_)+0.035}`)});
          console.log('data:', data);
        } catch (err) {
          console.log("Error:", err)
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`rounded-[6px] shadow-md bg-[#1b2730] hover:bg-[#1b2732] transition-all duration-200 w-[550px] h-[120px] relative overflow-hidden m-2 p-2`}
    >
      <div
        className={`absolute bottom-0 left-0 flex flex-row justify-center items-center w-full h-[40px]`}
      >
        <div
          className={`opacity-50 hover:opacity-100 transition-all duration-200 flex flex-row justify-start items-center cursor-pointer w-[80px]`}
          onClick={() => {
            setPosition_("ml-[-100px]");
            setFund_("");
            if (visibility_ == "opacity-0 pointer-events-none") {
              setVisibility_("opacity-100 pointer-events-auto");
            } else if (
              visibility_ == "opacity-100 pointer-events-auto" &&
              position_ == "ml-[-100px]"
            ) {
              setVisibility_("opacity-0 pointer-events-none");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faCoins}
            className={`h-[19px] w-[19px] m-2 text-gray-400`}
            onClick={() => {}}
          />
          <p
            className={`text-white/80 transition-all duration-[800ms] font-medium text-[13px] my-1 mr-[2px] ml-[-5px] w-[15px]`}
          >
            ${fund_}
          </p>
        </div>

        <div
          className={`opacity-50 hover:opacity-100 transition-all duration-200 flex flex-row justify-start items-center cursor-pointer w-[80px]`}
          onClick={() => {
            setPosition_("ml-[-45px]");
            setSpots_("");
            if (visibility_ == "opacity-0 pointer-events-none") {
              setVisibility_("opacity-100 pointer-events-auto");
            } else if (
              visibility_ == "opacity-100 pointer-events-auto" &&
              position_ == "ml-[-45px]"
            ) {
              setVisibility_("opacity-0 pointer-events-none");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={`h-[19px] w-[19px] text-gray-400 m-2`}
            onClick={() => {}}
          />
          <p
            className={`text-white/80 transition-all duration-[800ms] font-medium text-[12px] my-1 mr-[2px] ml-[-5px] w-[15px]`}
          >
            {spots_}
          </p>
        </div>

        <div
          className={`opacity-50 hover:opacity-100 transition-all duration-200 flex flex-row justify-start items-center cursor-pointer w-[80px]`}
          onClick={() => {
            setPosition_("ml-[5px]");
            setSplit_("");
            if (visibility_ == "opacity-0 pointer-events-none") {
              setVisibility_("opacity-100 pointer-events-auto");
            } else if (
              visibility_ == "opacity-100 pointer-events-auto" &&
              position_ == "ml-[5px]"
            ) {
              setVisibility_("opacity-0 pointer-events-none");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faTrophy}
            className={`h-[18px] w-[18px] text-gray-400 m-2`}
            onClick={() => {}}
          />
          <p
            className={`text-white/80 transition-all duration-[800ms] font-medium text-[13px] my-1 mr-[2px] ml-[-5px] w-[15px]`}
          >
            {split_}
          </p>
        </div>
      </div>

      <div
        className={`rounded-[6px] shadow-md bg-[#28343e] transition-all duration-200 w-[98%] ml-auto h-[70px] flex flex-row relative`}
      >
        <div
          className={`absolute top-0 right-0 w-full h-full flex flex-row justify-center items-center`}
        >
          <div
            className={`relative overflow-hidden w-full h-full flex flex-row justify-center items-center`}
          >
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[80px] object-cover invert opacity-10 rotate-[5deg] relative bottom-[35px] left-[-80px] transition-all duration-200`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[160px] object-cover invert opacity-10 -rotate-[30deg] relative bottom-7 left-20 transition-all duration-200`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[60px] object-cover invert opacity-5 rotate-[5deg] relative bottom-[-30px] left-[150px] transition-all duration-200`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[30px] object-cover invert opacity-5 rotate-[25deg] relative bottom-[-10px] left-[-190px] transition-all duration-200`}
            />
          </div>
        </div>
        <div
          className={`transition-all duration-200 w-[50px] h-[50px] p-0 hover:p-[0.5px] rounded-[4px] mt-2 relative right-3 cursor-pointer flex flex-col justify-center items-center`}
        >
          <div
            className={`transition-all duration-200 w-full h-full rounded-[4px] bg-white/50`}
          />
        </div>
        {/* <div className={`transition-all duration-200 w-full h-[80px]`} /> */}
        <p
          className={`${
            charCount_ - current_ > 0 ? "text-white/50" : "text-red-500/80"
          } absolute bottom-2 right-16 mr-2 cursor-default transition-all duration-[800ms] font-medium text-[11px] w-[15px]`}
        >
          {charCount_ - current_}
        </p>
        <FontAwesomeIcon
          icon={faImage}
          className={`h-[18px] w-[18px] mt-[2.3px] m-2 cursor-pointer text-white/50 hover:text-white/80 transition-all duration-200 absolute bottom-0 right-1`}
          onClick={() => {
            makePayment;
          }}
        />
        <FontAwesomeIcon
          icon={faVideo}
          className={`h-[18px] w-[18px] mt-[2.3px] m-2 cursor-pointer text-white/50 hover:text-white/80 transition-all duration-200 absolute bottom-0 right-8`}
          onClick={() => {
            makePayment;
          }}
        />
      </div>
      <div
        className={`h-[27px] w-[90px] rounded-[2px] m-2 cursor-pointer bg-white/100 hover:bg-white/80 transition-all duration-200 absolute bottom-0 right-0`}
        onClick={makePayment}
      />
      <div
        className={`w-[60px] h-[30px] rounded-[6px] shadow-md bg-[#202f3c]/90 transition-all duration-200 absolute bottom-6 left-[260px] ${position_} ${visibility_} border-solid border-[1px] border-white/10 cursor-pointer flex flex-col justify-center items-center`}
      >
        <input
          type={"text"}
          // @ts-ignore
          maxlength={`${position_ != "ml-[5px]" ? "3" : "2"}`}
          className={`w-full h-full bg-transparent text-center text-white/80 font-medium text-[13px]`}
          onChange={(e) => {
            position_ == "ml-[5px]"
              ? setSplit_(e.target.value)
              : position_ == "ml-[-45px]"
              ? setSpots_(e.target.value)
              : setFund_(e.target.value);
          }}
          placeholder={"???"}
        />
      </div>
      <textarea
        className={`w-[350px] absolute left-[90px] bg-transparent text-[15px] text-white/70 transition-all duration-200 ${
          current_ < 1
            ? "opacity-60 font-normal top-[32px] h-[40px]"
            : "opacity-100 font-normal top-[10px] h-[64px]"
        }`}
        placeholder={`So Wassup?!`}
        rows={5}
        spellCheck={false}
        value={body_}
        onChange={(e) => {
          setCurrent_(e.target.value.length);
          setBody_(e.target.value);
        }}
      />
    </div>
  );
};

export default BT_CreateObj_;
