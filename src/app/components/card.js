// components/card.js

import React from 'react';

const Card = ({ title, description, imageUrl, price }) => {
  return (
    <div className="card card-transform">
      {/* {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />} */}
      <div className="card-body">


        <div className="row">
          <div className="col-2 mb-3">
            {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
          </div>
          <div className="col-6 mb-3">
            <div className="mt-2">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
          <div className="col-4 mb-5" align="right">
            <div className="mt-2">
              <h4>฿ {price}</h4>
              <span>ผ่อน 8 เดือน</span>
            </div>
          </div>
        </div>


        <div className="row" align="center">

          <div className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">฿ 100,000</h6>
                <p className="card-text">ทุนประกัน  <br /> <br /></p>
              </div>
            </div>
          </div>

          <div className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">ซ่อมอู่</h6>
                <p className="card-text">ประเภทการซ่อม <br /> <br /></p>
              </div>
            </div>
          </div>

          <div className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">฿ 2,500,000</h6>
                <p className="card-text">ทรัพย์สินบุคคล ภายนอก <br></br></p>
              </div>
            </div>
          </div>

        </div>


        <div className="alert alert-secondary" role="alert">
          ผ่อนเงินสด 0% นาน 12 เดือน ไม่ง้อบัตรเครดิต
        </div>

        <div className="row" align="right">
        <div className="col-3 mb-3" role="alert">
          เปรียบเทียบ
        </div>

        <div className="col-3 mb-3" role="alert">
          ดูรายละเอียด
        </div>
        </div>

        {/* <div className="col-15 mb-4" align="right" >
          <div className="row"  >
            <div className="mt-2">
              <span>เปรียบเทียบ</span>
            </div>
          </div>
        </div>

        <div className="col-15 mb-4" align="right" >
          <div className="row"  >
            <div className="mt-2">
              <span>รายละเอียด</span>
            </div>
          </div>
        </div> */}



        {/* <div className="" role="alert"> ดูรายละเอียด</div> */}

        <div className="d-grid gap-2">
          <button className="btn btn-info" type="button">สนใจแผนประกัน</button>
        </div>

      </div>
    </div>
  );
};

export default Card;
