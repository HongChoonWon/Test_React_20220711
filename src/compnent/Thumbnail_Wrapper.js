/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Thumbnail_Item from './Thumbnail_Item';
import Axios from 'axios';

const data = {};

const getData = () => {
  axios
    .get({
      url: 'http://localhost:3000/src/json/data.json', // 통신할 웹문서
      method: 'post', // 통신할 방식
      data: {
        // 인자로 보낼 데이터
        foo: 'diary',
      },
    })
    .then((reponse) => {
      debugger;
    });
};

const Thumbnail_Wrapper = () => {
  getData();

  return (
    <>
      <div className="item-wrap">
        <div className="item-list">
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
          <Thumbnail_Item />
        </div>
      </div>
    </>
  );
};

export default Thumbnail_Wrapper;
