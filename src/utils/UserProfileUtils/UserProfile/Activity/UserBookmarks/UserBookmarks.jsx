import { useState } from "react";

import css from "./UserBookmarks.module.css";

import image1 from "/images/Pizzaimage1.jpg";
import image2 from "/images/Pizzaimage2.jpg";
import image3 from "/images/Pizzaimage3.jpg";
import image4 from "/images/Pizzaimage4.jpg";
import image5 from "/images/Pizzaimage5.jpg";
import happyHoursImg from "/images/happyhours.jpg";

import UserDetCard from "../../../UserDetCard/UserDetCard";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const UserBookmarks = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: image1,
      name: "Margherita Pizza"
    },
    {
      id: 2,
      imgSrc: image2,
      name: "Caprese Pizza"
    },
    {
      id: 3,
      imgSrc: image3,
      name: "Veggie Pizza"
    },
    {
      id: 4,
      imgSrc: image4,
      name: "Pizza al taglio"
    },
    {
      id: 5,
      imgSrc: image5,
      name: "Pizzette"
    },
    {
      id: 6,
      imgSrc: image1,
      name: "Margherita Pizza"
    },
    {
      id: 7,
      imgSrc: image2,
      name: "Pizza al taglio"
    },
    {
      id: 8,
      imgSrc: image3,
      name: "Caprese Pizza"
    },
    {
      id: 9,
      imgSrc: image4,
      name: "Veggie Pizza"
    },
    {
      id: 10,
      imgSrc: image5,
      name: "prabhu"
    },
    {
      id: 11,
      imgSrc: image1,
      name: "Pizzette"
    },
    {
      id: 12,
      imgSrc: image3,
      name: "Grilled Pizza"
    },
    {
      id: 13,
      imgSrc: image5,
      name: "Pizza boscaiola"
    },
    {
      id: 14,
      imgSrc: image2,
      name: "Pizza al padellino"
    },
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <UserDetCard imgSrc={item.imgSrc} name={item.name} key={item.id}/>;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserBookmarks;
