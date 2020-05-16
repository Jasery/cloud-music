import React from "react";
import Slider from "../../components/slider";
import {Content, List, ListItem, ListWrapper} from "./style";
import {getCount} from "../../utils/utils";
import Scroll from "../../components/scroll";

function Recommend(props) {

  const bannerList = [{
    imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg'
  }, {
    imageUrl: 'http://p1.music.126.net/cwxq1bb4Xd5edzY_nUtYLw==/109951164977510913.jpg'
  }, {
    imageUrl: 'http://p1.music.126.net/_u-1Yr1Yh8feA4iGm8krnw==/109951164977440366.jpg'
  }];

  let recommendList = [{
    id: 1,
    picUrl: 'https://p2.music.126.net/IsMJ_kJVGOYMTi8VrThL_Q==/109951164968788000.jpg?param=300x300',
    playCount: 12334,
    name: '听完这些，我成为了一名宝丽金发烧友'
  }, {
    id: 2,
    picUrl: 'https://p2.music.126.net/XgF8r2wfeacECu0e58B6jw==/109951164891572909.jpg?param=300x300',
    playCount: 234234,
    name: '精选|我永远屈服于温柔'
  }, {
    id: 3,
    picUrl: 'https://p2.music.126.net/R-6LHG3jKs3xEEto5l43CA==/109951164838538942.jpg?param=300x300',
    playCount: 3452343,
    name: '为什么我们喜欢单曲循环伤感音乐'
  }, {
    id: 4,
    picUrl: 'https://p2.music.126.net/liTm4wTyiI-AfQoSHOLytw==/109951164951641877.jpg?param=300x300',
    playCount: 345343,
    name: '我。。。想你了。。。'
  }];
  recommendList = [...recommendList, ...recommendList,...recommendList]
  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
              {recommendList.map( item  => (
                <ListItem key={item.id + Math.random()}>
                  <div className="img-wrapper">
                    <div className="decorate"></div>
                    <img src={item.picUrl} width="100%" height="100%" alt="music"/>
                  </div>
                  <div className="play-count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                  <div className="desc">{item.name}</div>
                </ListItem>
              ))}
            </List>
          </ListWrapper>
        </div>
      </Scroll>
    </Content>
  )
}

export default React.memo(Recommend)
