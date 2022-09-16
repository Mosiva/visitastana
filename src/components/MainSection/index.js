import React from "react";
import MainI from "../../images/NSM.png";
import { MainContainer, MainBg } from "./MainElements";
import CardMainOne from "../../images/CardMainOne.png";
import CardMainTwo from "../../images/CardMainTwo.png";
import CardMainThree from "../../images/CardMainThree.png";
import CardMainFour from "../../images/CardMainFour.png";
import "./style.css";

function Main() {
  return (
    <MainContainer>
      <MainBg>
        <div className="box">
          <div className="imgmain">
            <img src={MainI} alt="Main" />
          </div>
          <div className="cardflex">
            <div className="card">
              <img alt="Avatar" src={CardMainOne} class="center" />
              <div className="maincontainer">
                <h4>
                  <b>ГДЕ ОСТАНОВИТЬСЯ?</b>
                </h4>
                <p>отели и хостелы ...</p>
              </div>
            </div>
            <div className="card">
              <img alt="Avatar" src={CardMainTwo} class="center" />
              <div className="maincontainer">
                <h4>
                  <b>ГДЕ ПОЕСТЬ?</b>
                </h4>
                <p>рестораны, кафе ...</p>
              </div>
            </div>
            <div className="card">
              <img alt="Avatar" src={CardMainThree} class="center" />
              <div className="maincontainer">
                <h4>
                  <b>КУДА СХОДИТЬ?</b>
                </h4>
                <p>Театры, кино...</p>
              </div>
            </div>
            <div className="card">
              <img alt="Avatar" src={CardMainFour} class="center" />
              <div className="maincontainer">
                <h4>
                  <b>ЧТО ПОСМОТРЕТЬ?</b>
                </h4>
                <p>музеи, байтерек ...</p>
              </div>
            </div>
          </div>
        </div>
      </MainBg>
    </MainContainer>
  );
}

export default Main;
