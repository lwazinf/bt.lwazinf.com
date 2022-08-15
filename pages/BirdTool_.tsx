import BT_CampaignObj_ from "../components/BT_CampaignObj_";
import BT_CreateObj_ from "../components/BT_CreateObj_";
import { db } from "../components/services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface BirdTool_Props {}

const BirdTool_ = ({}: BirdTool_Props) => {
  const listMap = [
    {
      tweet_:
        "hdhgdhgdhgds dshvdsjhds dsjhbdssd dsjb bd sjhbjvhvuyvu kv khv jhvjhv jhvj vj hv jh.",
      fund_: 105,
      spots: 45,
      split_: 3,
    },
    {
      tweet_: "scjhgs sjhskj skskhsls shslhs slkhjs sljsls slkjsl.",
      fund_: 1000,
      spots: 30,
      split_: 1,
    },
  ];

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] min-h-screen relative">
      <BT_CreateObj_ />

      {listMap.map((myMap, index) => {
        return (
          <BT_CampaignObj_
            tweet_={myMap.tweet_}
            fund_={myMap.fund_}
            spots_={myMap.spots}
            split_={myMap.split_}
          />
        );
      })}
    </div>
  );
};

export default BirdTool_;
