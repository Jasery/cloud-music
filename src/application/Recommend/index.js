import React from "react";
import Slider from "../../components/slider";


function Recommend(props) {

  const bannerList = [{
    imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg'
  }, {
    imageUrl: 'http://p1.music.126.net/cwxq1bb4Xd5edzY_nUtYLw==/109951164977510913.jpg'
  }, {
    imageUrl: 'http://p1.music.126.net/_u-1Yr1Yh8feA4iGm8krnw==/109951164977440366.jpg'
  }];

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
    </div>
  )
}

export default React.memo(Recommend)
