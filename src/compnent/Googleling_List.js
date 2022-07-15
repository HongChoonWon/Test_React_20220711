import React from "react";

export default function Googleling_List() {
  return (
    <div className="item-wrap">
      <div className="item-list">
        <dl className="item">
          <dt className="thumb">
            <span className="thumnail-media"></span>
            <a href="branduid=127464">
              <img className="" alt="상품01" title="상품01" />
            </a>
          </dt>
          <dd>
            <ul className="info">
              <li className="names">
                <a href="#produc_link">상품01 제목</a>
              </li>
              <li className="subnames">
                <a href="#produc_link">상품01 설명</a>
              </li>
              <li className="icons">
                <span className="MK-product-icons">혜택 아이콘</span>
              </li>
              <li className="prices">price : 0,000 원</li>
            </ul>
          </dd>
        </dl>
        <dl className="item">
          <dt className="thumb">
            <span className="thumnail-media">
              {" "}
              <button
                className="modal-open_btn"
                data-href="https://www.youtube.com/embed/YrweCYauK6o"
              >
                {" "}
                영상보기{" "}
              </button>
            </span>
            <a href="branduid=127434">
              <img className="" alt="상품02" title="상품02" />
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
        <dl className="item">
          <dt className="thumb">
            <a href="branduid=127446">
              <img className="" alt="상품03" title="상품03" />
            </a>
          </dt>
          <dd>
            <ul className="info">
              <li className="names">
                <a href="#produc_link">상품03 제목</a>
              </li>
              <li className="subnames">
                <a href="#produc_link">상품03 설명</a>
              </li>
              <li className="icons">
                <span className="MK-product-icons">혜택 아이콘</span>
              </li>
              <li className="prices">price : 0,000 원</li>
            </ul>
          </dd>
        </dl>
        <dl className="item">
          <dt className="thumb">
            <a href="branduid=127363">
              <img className="" alt="상품04" title="상품04" />
            </a>
          </dt>
          <dd>
            <ul className="info">
              <li className="names">
                <a href="#produc_link">상품04 제목</a>
              </li>
              <li className="subnames">
                <a href="#produc_link">상품04 설명</a>
              </li>
              <li className="icons">
                <span className="MK-product-icons">혜택 아이콘</span>
              </li>
              <li className="prices">price : 0,000 원</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}
