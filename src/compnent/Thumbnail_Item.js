/* eslint-disable no-undef */
import React from 'react';

const Thumbnail_Item = () => {
  return (
    <>
      <div>
        <dl className="item">
          <dt className="thumb">
            <span className="thumnail-media">
              {' '}
              <button
                className="modal-open_btn"
                data-href="https://www.youtube.com/embed/YrweCYauK6o"
              >
                {' '}
                영상보기{' '}
              </button>
            </span>
            <a href="branduid=127434">
              <img className="" alt="상품02" title="상품02" src="" />
            </a>
          </dt>
          <dd>
            <ul className="info">
              <li className="names">
                <a href="#produc_link">상품02 제목</a>
              </li>
              <li className="subnames">
                <a href="#produc_link">상품02 설명</a>
              </li>
              <li className="icons">
                <span className="MK-product-icons">혜택 아이콘</span>
              </li>
              <li className="prices">price : 0,000 원</li>
            </ul>
          </dd>
        </dl>
      </div>
    </>
  );
};

export default Thumbnail_Item;

//참고용 샘플
function sample() {
  return (
    <>
      <div>
        <dl className="item">
          <dt className="thumb">
            <span className="thumnail-media">
              {' '}
              <button
                className="modal-open_btn"
                data-href="https://www.youtube.com/embed/YrweCYauK6o"
              >
                {' '}
                영상보기{' '}
              </button>
            </span>
            <a href="branduid=127434">
              <img className="" alt="상품02" title="상품02" src="" />
            </a>
          </dt>
          <dd>
            <ul className="info">
              <li className="names">
                <a href="#produc_link">상품02 제목</a>
              </li>
              <li className="subnames">
                <a href="#produc_link">상품02 설명</a>
              </li>
              <li className="icons">
                <span className="MK-product-icons">혜택 아이콘</span>
              </li>
              <li className="prices">price : 0,000 원</li>
            </ul>
          </dd>
        </dl>
      </div>
    </>
  );
}
