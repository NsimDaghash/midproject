import React from "react";
import Chart from "../../components/chart/Chart";
//import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import LastJoined from "../../components/lastJoined/lastJoined";
//import LastTransaction from "../../components/lastTransaction/lastTransaction";

export default function Home() {
  return (
    <div className="home">
      {/*<FeaturedInfo />*/}
      <Chart />
      <div className="lastOnes">
        <LastJoined/>
        {/*<LastTransaction/>*/}
      </div>
    </div>
  );
}
