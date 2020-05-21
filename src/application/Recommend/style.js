import styled from "styled-components";
import style from "../../assets/global-style"

export const ListWrapper = styled.div`
  max-width: 100%;
  h1 {
    margin: 20px 0 20px 5px;
    font-weight: bold;
    color: ${style["font-color"]};
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  width: 33.3333%;
  position: relative;
  margin-bottom: 10px;
  padding: 3px;
  box-sizing: border-box;
  img {
    border-radius: 4px;
  }
  .play-count {
    position: absolute;
    top: 3px;
    right: 5px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  
  .desc {
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    color: ${style['font-color-desc']}
  }
`;

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  overflow: auto;
  .item {
    width: 100px;
    height: 100px;
    background-color: aqua;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`
