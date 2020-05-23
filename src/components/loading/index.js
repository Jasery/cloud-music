import React from "react";
import styled, { keyframes } from "styled-components";
import style from "../../assets/global-style";

const loading = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const LoaddingWrapper = styled.div`
  > div {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    margin: auto;
    background-color: ${style["theme-color"]};
    animation: ${loading} 1.4s infinite ease-in;
  }
  >div:nth-child(2) {
    animation-delay: -0.7s;
  }
`;

function Loading() {
  return (
    <LoaddingWrapper>
      <div></div>
      <div></div>
    </LoaddingWrapper>
  )
}
export default React.memo(Loading);
