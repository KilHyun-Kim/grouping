import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const SelectInfo = ({ value }) => {
  const infoValues = value;
  const infoList = infoValues.map((infoValue) => <option>{infoValue}</option>);
  return <select>{infoList}</select>;
};

export default SelectInfo;
