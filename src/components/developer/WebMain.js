import React, { useEffect, useState } from "react";
import styled from "styled-components";
import webDesignImg from "../../images/webdesign2.jpg";
import webFrontImg from "../../images/webfront.jpg";
import webBackImg from "../../images/webback.jpg";
import WebIntro from "./WebIntro";
import FirstIntro from "./FristIntro";

const WebPageWrapper = styled.div`
  width: 100%;
  height:100%;
  display:flex;  /* background-image: url(${webDesignImg}); */
  flex-direction:column;
  /* background-color: green; */
  background-size: 100% 100%;
  color:white;

`;

const useScroll = () => {
  const [scroll, setScroll] = useState({
    y: 0,
  });
  const onScroll = () => {
    setScroll({ y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scroll;
};

const WebMain = () => {
  /* 0에서 휠 한번 내렸을때 + 100 */
  /* Top 값 말고 태그에 맞춰서 옮기기 추가하기, */
  /* react-scroll 추가하기 */
  // const { y } = useScroll();
  // if (y >= 100 && y <= 200) {
  //   window.scrollTo({ top: 657, left: 0, behavior: "auto" });
  // } else if (y >= 750 && y < 857) {
  //   window.scrollTo({ top: 1314, left: 0, behavior: "auto" });
  // } else if (y >= 1114 && y <= 1214) {
  //   window.scrollTo({ top: 657, left: 0, behavior: "auto" });
  // } else if (y < 650 && y >= 550) {
  //   window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  // }
  const styleDesigner = {
    backgroundImage: `url(${webDesignImg})`,
  };
  const styleFront = {
    backgroundImage: `url(${webFrontImg})`,
  };
  const styleBack = {
    backgroundImage: `url(${webBackImg})`,
    textAlign: "right",
  };
  // 밑에 map 함수사용하고 props 관리하여 깔끔하게 정리하기
  return (
    <WebPageWrapper>
      <FirstIntro />
      <WebIntro
        backImage={styleDesigner}
        Topic="WEB DESIGNER"
        express="웹 컨텐츠 제작에서 화면 레이아웃 및 디자인 구상"
        tech="PhotoShop / Ilustrator / InDesign / AdobeXD"
        path1="/web/designer"
        path2="/web"
      />
      <WebIntro
        backImage={styleFront}
        Topic="FRONTEND"
        express="사용자에게 직접 보이는 UI & UX 개발"
        tech="HTML / CSS / JavaScript / React / Vue.js"
        path1="/web/frontend"
        path2="/web"
      />
      <WebIntro
        backImage={styleBack}
        Topic="BACKEND"
        express="사용자의 요청에 따라 데이터를 제공 및 관리 "
        tech="Java / Python / Ruby / PHP"
        path1="/web/backend"
        path2="/web"
      />
    </WebPageWrapper>
  );
};

export default WebMain;
