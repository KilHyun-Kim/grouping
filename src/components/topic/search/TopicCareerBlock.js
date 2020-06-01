import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

const CareerBlock = styled.div`
  width: 30%;
  display: flex;
  input[type="checkbox"] {
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #cacece;
  }
  label {
    cursor: pointer;
  }
  /* span {
    height: 100%;
    font-size: 0.9rem;
  } */
  border-left: 1px solid ${palette.blue[0]};
`;

const CareerBoxLi = styled.li`
  margin-left: 1rem;
  display: inline-block;
  width: 100%;
  padding-top: 0.5rem;
`;

const TopicCareerBlock = () => {
  const careers = [
    { career: "신입", id: "new" },
    { career: "1년", id: "first" },
    { career: "2년", id: "second" },
    { career: "3년", id: "third" },
    { career: "4년", id: "fourth" },
    { career: "5년 이상", id: "fifth" },
  ];

  console.log(careers);
  const careerList = careers.map((career) => (
    <CareerBoxLi>
      {console.log(career)}
      <input type="checkbox" id={career.id} />
      <label for={career.id}>{career.career}</label>
    </CareerBoxLi>
  ));
  return (
    <CareerBlock>
      <ul>{careerList}</ul>
    </CareerBlock>
  );
};

export default TopicCareerBlock;
