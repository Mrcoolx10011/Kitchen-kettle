import { useState } from "react";

import css from "./UserPhotosCard.module.css";

import image1 from "/images/Pizzaimage1.jpg";
import image2 from "/images/Pizzaimage2.jpg";
import image3 from "/images/Pizzaimage3.jpg";
import image4 from "/images/Pizzaimage4.jpg";
import happyHoursImg from "/images/happyhours.jpg";

import SmallCardImg from "../../../../Cards/card6/SmallCardImg";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const UserPhotosCard = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: image1,
    },
    {
      id: 2,
      imgSrc: image2,
    },
    {
      id: 3,
      imgSrc: image3,
    },
    {
      id: 4,
      imgSrc: image4,
    },
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <SmallCardImg imgSrc={item.imgSrc} key={item.id} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserPhotosCard;
