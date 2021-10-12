import React, { useState, useEffect } from "react";
import Table from "./Charts/Table";
import { GetDataById } from "../Firebase/writemood";
import Fade from "react-reveal/Fade";
//import {Getdata}  from "../../Firebase/cognigitiveapi";
import Loading from "./Loading";
const Analysis = () => {
  const [wymData, setWymData] = useState();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [face, setFace] = useState({});
  // useEffect(async () => {
  //   if (localStorage.getItem("user-details") !== null) {
  //     let values = localStorage.getItem("user-details");
  //     let newVal = JSON.parse(values);
  //     setProfile(newVal.user);
  //   }

  //   const uid = `${profile.uid}`;
  //   console.log(uid);
  //   let des = GetDataById(uid);
  //   let ses = Getdata(uid);
  //   console.log(ses);
  //   console.log(des);
  //   setWymData(des);
  //   console.log(wymData);
  //   console.log(des);
  // }, [wymData, profile.uid]);

  /* eslint-disable */
  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }

    const uid = `${profile.uid}`;

    (async () => {
      const datas = await GetDataById(uid);
      if (datas) {
        setWymData(datas);
      }
      console.log(datas);
      setLoading(false);
    })();
    (async () => {
      const data2 = await GetDataById(uid);
      if (data2) {
        setFace(data2);
      }
      console.log(data2);
      setLoading(false);
    })();
    // console.log(uid);
    // let des = GetDataById(uid);
    // let ses = Getdata(uid);
    // console.log(ses);
    // console.log(des);
    // setWymData(des);
    // console.log(des);
  }, [loading]);

  useEffect(() => {
    console.log(wymData);
    console.log(face);
  }, [wymData, face]);

  return loading === true ? (
    <Loading />
  ) : (
    <div className="container">
      <Fade>
        <div>
          <Table />
        </div>
      </Fade>

      {/* <div className="charts">
        <div className="chart-1">
          <BarChart />
        </div>
        <br></br>
        <div className="chart-2">
          <LineChart />
        </div>
        <br></br>
        <div className="chart-3">
          <PieChart />
        </div>
        <div className="chart-3">
          <Circular />
        </div>
      </div> */}
    </div>
  );
};

export default Analysis;
