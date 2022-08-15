import { useState } from "react";
import { useRecoilState } from "recoil";
import { nodeState } from "./atoms/atoms";

import React from "react";
import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  faEllipsisH,
  faTrophy,
  faCoins,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bg_ from "./Bg_";

interface CampaignObj_Props {
  tweet_: string,
  fund_: number,
  spots_: number,
  split_: number,
  // media_: string
}

const CampaignObj_ = ({tweet_, fund_, spots_, split_}: CampaignObj_Props) => {
  // 👇️👇️👇️ Recoil atoms..
  // const [notification_, setNotification_] = useRecoilState(notificationState);
  const [options_, setOptions_] = useState(false);
  const [option_, setOption_] = useState("main");
  const [image_, setImage_] = useState(-1);

  return (
    <div
      className={`rounded-[6px] shadow-md bg-[#1b2730] hover:bg-[#1b2732] transition-all duration-200 w-[550px] h-[200px] relative overflow-hidden m-1`}
    >
      <div
        className={`transition-all duration-[1000ms] ${
          options_
            ? "opacity-30 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } absolute top-0 w-full h-full`}
      >
        <Bg_ />
      </div>

      {/* <div className={`flex flex-row absolute bottom-0 w-full h-[30px] justify-end`}>
        <p className={`text-white/50 font-medium text-[15px]`}>
          Participants:
        </p>
        <p className={`text-white/70 font-semibold text-[12px] ml-1`}>
          23
        </p>
        <p className={`text-white/60 font-semibold text-[15px] mr-3`}>
          /30
        </p>
        <p className={`text-white/50 font-medium text-[15px]`}>
          Split:
        </p>
        <p className={`text-white/70 font-semibold text-[15px] ml-1 mr-3`}>
          $50
        </p>
        <p className={`text-white/50 font-medium text-[15px]`}>
          Seats:
        </p>
        <p className={`text-white/70 font-semibold text-[15px] ml-1 mr-3`}>
          5
        </p>
      </div> */}

      <div
        className={`flex flex-row absolute top-0 w-full h-full items-center p-6 mt-[-40px] transition-all duration-200 ${
          options_
            ? "opacity-30 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <div
          className={`min-w-[160px] h-full bg-white/50 rounded-[6px] mr-3 relative right-[6px] top-[45px]`}
        />
        <p
          className={`text-white/70 font-normal text-[15px] w-[330px] ml-auto`}
        >
          {tweet_}
        </p>
      </div>
      <div
        className={`flex flex-row absolute bottom-0 right-6 w-[330px] h-[110px] justify-start items-center  transition-all duration-200 ${
          options_
            ? "opacity-30 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <div
          className={`min-w-[70px] h-[70px] rounded-[4px] m-[6px] cursor-pointer hover:p-[1.8px] ${
            image_ == 0 ? "p-[1.5px]" : "p-0"
          } transition-all duration-200`}
        >
          <div
            className={`w-full h-full bg-white/50 rounded-[4px]`}
            onClick={() => {
              if (image_ == 0) {
                setImage_(-1);
              } else {
                setImage_(0);
              }
            }}
          />
        </div>
        <div
          className={`min-w-[70px] h-[70px] rounded-[4px] m-[6px] cursor-pointer hover:p-[1.8px] ${
            image_ == 1 ? "p-[1.5px]" : "p-0"
          } transition-all duration-200`}
        >
          <div
            className={`w-full h-full bg-white/50 rounded-[4px]`}
            onClick={() => {
              if (image_ == 1) {
                setImage_(-1);
              } else {
                setImage_(1);
              }
            }}
          />
        </div>
        <div
          className={`min-w-[70px] h-[70px] rounded-[4px] m-[6px] cursor-pointer hover:p-[1.8px] ${
            image_ == 2 ? "p-[1.5px]" : "p-0"
          } transition-all duration-200`}
        >
          <div
            className={`w-full h-full bg-white/50 rounded-[4px]`}
            onClick={() => {
              if (image_ == 2) {
                setImage_(-1);
              } else {
                setImage_(2);
              }
            }}
          />
        </div>
        <div
          className={`min-w-[70px] h-[70px] rounded-[4px] m-[6px] cursor-pointer hover:p-[1.8px] ${
            image_ == 3 ? "p-[1.5px]" : "p-0"
          } transition-all duration-200`}
        >
          <div
            className={`w-full h-full bg-white/50 rounded-[4px]`}
            onClick={() => {
              if (image_ == 3) {
                setImage_(-1);
              } else {
                setImage_(3);
              }
            }}
          />
        </div>
      </div>

      <FontAwesomeIcon
        icon={faEllipsisH}
        className={`h-[25px] w-[25px] mt-[2.3px] m-2 cursor-pointer text-white/50 hover:text-white/80 transition-all duration-200 absolute top-0 right-2`}
        onClick={() => {
          setOptions_(!options_);
          if (!options_) {
            setOption_("main");
          } else {
            setOption_("");
          }
        }}
      />

      <div
        className={`w-[150px] h-[93px] rounded-[6px] shadow-md bg-[#202f3c]/90 transition-all duration-200 absolute top-3 right-11 border-solid border-[1px] border-white/10 ${
          options_
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`relative w-full h-full rounded-[6px] overflow-hidden`}>
          <div
            className={`${
              option_ == "main"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <CopyToClipboard
              text={tweet_}
              onCopy={() => {
                setOptions_(false);
              }}
            >
              <p
                className={`text-white/70 hover:text-white transition-all duration-200 font-normal text-[13px] w-full cursor-pointer text-center my-2`}
              >
                Copy Tweet Text
              </p>
            </CopyToClipboard>
          </div>
          <p
            className={`text-white/70 hover:text-white transition-all duration-200 font-normal text-[13px] w-full cursor-pointer text-center my-2 ${
              option_ == "main"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setOption_("details");
            }}
          >
            Campaign Details
          </p>
          <p
            className={`text-white/70 hover:text-white transition-all duration-200 font-normal text-[13px] w-full cursor-pointer text-center my-2 ${
              option_ == "main"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setOption_("ranking");
            }}
          >
            View Ranking
          </p>
        </div>
        <div
          className={`absolute top-0 w-full h-full flex flex-col transition-all duration-[800ms] ${
            option_ == "details"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex flex-row justify-center items-center hover:opacity-100 transition-all duration-200 pt-1 ${
              option_ == "details"
                ? "opacity-80 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setOption_("");
            }}
          >
            <FontAwesomeIcon
              icon={faCoins}
              className={`h-[20px] w-[20px] ml-6 mr-[-28px] text-gray-400`}
              onClick={() => {}}
            />
            <p
              className={`text-white/80 transition-all duration-[800ms] font-medium text-[13px] w-full text-left ml-9 my-1 cursor-default`}
            >
              ${fund_} Fund
            </p>
          </div>
          <div
            className={`flex flex-row justify-center items-center hover:opacity-100 transition-all duration-200 ${
              option_ == "details"
                ? "opacity-80 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setOption_("");
            }}
          >
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className={`h-[18px] w-[18px] text-gray-400 ml-6 mr-[-28px]`}
              onClick={() => {}}
            />
            <p
              className={`text-white/80 hover:text-white transition-all duration-[800ms] font-medium text-[13px] w-full text-left ml-9 my-1 cursor-default`}
            >
              {spots_} Spots
            </p>
          </div>
          <div
            className={`flex flex-row justify-center items-center hover:opacity-100 transition-all duration-200 ${
              option_ == "details"
                ? "opacity-80 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setOption_("");
            }}
          >
            <FontAwesomeIcon
              icon={faTrophy}
              className={`h-[18px] w-[18px] text-gray-400 ml-6 mr-[-28px]`}
              onClick={() => {}}
            />
            <p
              className={`text-white/80 hover:text-white transition-all duration-[800ms] font-medium text-[13px] w-full text-left ml-9 my-1 cursor-default`}
            >
              {split_} Split
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignObj_;
