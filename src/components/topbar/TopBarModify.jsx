import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarStyle";

export default function TopBarModify({ nameValid, idValid }) {
  return (
    <Top>
      <button>
        <img src={back} alt='' />
      </button>
      <button className={nameValid && idValid ? "active" : "btn-save"}>
        저장
      </button>
    </Top>
  );
}