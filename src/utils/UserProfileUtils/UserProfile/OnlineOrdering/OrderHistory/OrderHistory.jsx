import {useState} from 'react'

import css from './OrderHistory.module.css'

import orderonlineImg from '/images/orderonline.jpg'

import OrderHistoryCard from '../../../../Cards/OrderHistoryCard/OrderHistoryCard'
import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";
import OrderDetails from '../../../../../Modals/OrderDetailsModal/OrderDetails'

import Pagination from '../../../../Pagination/Pagination'

const OrderHistory = ({hashId}) => {
    let [viewDet, setViewDet] = useState(false);
    let [orderId, setOrderId] = useState();

    let [data, setData] = useState([
        {
          id:1,
          imgSrc: orderonlineImg,
          name:"Mirch Masala",
          address:"C G Road, Ahmedabad",
          orderNum:"211",
          items:[{
              itemName: "Paneer Tikka Masala",
              qty: 1
          },
          {
            itemName: "Tandoori Butter Roti",
            qty: 1
          }],
          orderedOn: new Intl.DateTimeFormat("en" , {
            timeStyle: "medium",
            dateStyle: "short"
          })?.format(new Date()),
          itemTotal:"150.00",
          coupon: {
              couponName:"TryNew",
              discount:"50"
          },
          taxesandcharges:"30.00",
          totalSavings:"75.00",
          grandTotal:"105.00",
          paymentType:"Using Card",
          orderStatus: "Delivered",
          phoneNum:"8074786491",
          deliveredTo:"My home, kuakpally, hyderabad",
          fssaiNo:"13618013000777",
          fav: true,
          summaryLinkId:"#"
        },
        {
         
          id:2,
          imgSrc: orderonlineImg,
          name:"Mirch Masala",
          address:"C G Road, Ahmedabad",
          orderNum:"211",
          items:[{
              itemName: "Paneer Tikka Masala",
              qty: 1
          },
          {
            itemName: "Tandoori Butter Roti",
            qty: 1
          }],
          orderedOn: new Intl.DateTimeFormat("en" , {
            timeStyle: "medium",
            dateStyle: "short"
          })?.format(new Date()),
          itemTotal:"150.00",
          coupon: {
              couponName:"TryNew",
              discount:"50"
          },
          taxesandcharges:"30.00",
          totalSavings:"75.00",
          grandTotal:"105.00",
          paymentType:"Using Card",
          orderStatus: "Delivered",
          phoneNum:"8074786491",
          deliveredTo:"My home, kuakpally, hyderabad",
          fssaiNo:"13618013000777",
          fav: true,
          summaryLinkId:"#"
      },
      {
       
        id:3,
        imgSrc: orderonlineImg,
        name:"Mirch Masala",
        address:"C G Road, Ahmedabad",
        orderNum:"211",
        items:[{
            itemName: "Paneer Tikka Masala",
            qty: 1
        },
        {
          itemName: "Tandoori Butter Roti",
          qty: 1
        }],
        orderedOn: new Intl.DateTimeFormat("en" , {
          timeStyle: "medium",
          dateStyle: "short"
        })?.format(new Date()),
        itemTotal:"150.00",
        coupon: {
            couponName:"TryNew",
            discount:"50"
        },
        taxesandcharges:"30.00",
        totalSavings:"75.00",
        grandTotal:"105.00",
        paymentType:"Using Card",
        orderStatus: "Delivered",
        phoneNum:"8074786491",
        deliveredTo:"My home, kuakpally, hyderabad",
        fssaiNo:"13618013000777",
        fav: true,
        summaryLinkId:"#"
    }
    ]);

    let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <>
          <div className={css.innerDiv}>
            {data.map((item) => {
              return <OrderHistoryCard udata={item} key={item?.id} setViewDet={setViewDet} setOrderId={setOrderId} viewDet={viewDet} />
            })}
            {viewDet ? <OrderDetails id={orderId} setViewDet={setViewDet} /> : ""}
          </div>
          <Pagination page="1" total="31" size="10" />
        </>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
}

export default OrderHistory