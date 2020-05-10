import styled from "styled-components";
import style from "../../assets/global-style"

export const ListWrapper = styled.div`
  h1 {
    margin: 20px 0 20px 5px;
    font-weight: bold;
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
