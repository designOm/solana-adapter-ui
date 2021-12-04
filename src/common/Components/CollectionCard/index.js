import React from 'react'
import { Images } from '../../../assets/images';
import './index.scss';


const CollectionsCard = () => (
  <div className="collectionsCards">
    <div className="collectionsCards__images">
      <div className="collectionsCards__images__list">
        {[...Array(7)].map((d, i) => (
          <div
            className="collectionsCards__images__list--item"
            key={i}
            style={{
              backgroundImage: `url(${Images.collectionImg})`,
            }}
          />
        ))}
      </div>
      <div className="collectionsCards__images__hoverContent tf-body2">
        Combining attitude, disdain and superiority, the ApexDucks are here to
        cause trouble and have some wild adventures. Authorities? Pffft, who
        needs 'em?
      </div>
    </div>
    <div className="collectionsCards__content">
      <div className="titleBox">
        <h4 className="tf-h4">Space Ducks</h4>
        <span className="tf-overline">(99 items)</span>
      </div>
      <div className="metaDetails">
        <p>
          <label className="tf-title2">TRADE VOLUME</label>
          <span className="tf-caption">1,02,536.00</span>
        </p>
        <p>
          <label className="tf-title2">FLOOR PRICE</label>
          <span className="tf-caption">5.5 SOL</span>
        </p>
        <p>
          <label className="tf-overline">last 24 hours</label>
          <span>
            <img src={Images.upArrow} alt="|" />
            <span className="tf-overline">0.50 SOL</span>{" "}
            <span className="tf-overline">(+10.00 %)</span>
          </span>
        </p>
      </div>
    </div>
  </div>
);


export default CollectionsCard;