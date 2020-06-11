import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

function changeFunction(obj) {
  console.log(obj);
}

const SelectInfo = ({ value }) => {
  const infoValues = value;
  //   console.log(infoValues);
  const infoList = infoValues.map((infoValue) => (
    <option value={infoValue}>{infoValue}</option>
  ));
  return <select onChange={changeFunction(this)}>{infoList}</select>;
};

export default SelectInfo;
