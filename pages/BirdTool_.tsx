import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../components/services/firebase";
import BT_CampaignObj_ from "../components/BT_CampaignObj_";
import BT_CreateObj_ from "../components/BT_CreateObj_";
import { useEffect, useState } from "react";

interface BirdTool_Props {}

const BirdTool_ = ({}: BirdTool_Props) => {
  const [campaigns_, setCampaigns_] = useState<string[]>([]);

  onSnapshot(collection(db, "campaigns"), (snapshot) => {
    let campaigns : any[] = [];
    snapshot.docs.forEach((doc) => {
      return campaigns.push({ ...doc.data() });
    })
    setCampaigns_(campaigns)
  })

  return (
    <div className="flex flex-col items-center justify-center w-[1200px] min-h-screen relative">
      <BT_CreateObj_ />
      {/* @ts-ignore */}
      {campaigns_.map((myMap, index) => {
        return (
          <BT_CampaignObj_ 
          key={index}
          data_={
            // @ts-ignore
            campaigns_[index]
          }
          />
        );
      })}
    </div>
  );
};

export default BirdTool_;
