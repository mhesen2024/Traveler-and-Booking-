import React from "react";
import PaymentOptions from "../components/molecules/PaymentOptions";
import UserInfo from "../components/molecules/UserInfo";
import Checking from "../components/molecules/CheckingDetails";
import PriceDetails from "../components/molecules/PriceDetails";
import ImpInformation from "../components/molecules/ImpInformation";

const CheckOut = () => {
  return (
    <>
      
      <div className="booking-page flex flex-col md:flex-row gap-4 my-6 ">
        <div className="left-column flex-1 space-y-4 ">
        <h1 className="text-xl font-semibold mx-[175px] ">Secure your reservation</h1>
          <UserInfo />
          <PaymentOptions />
          <ImpInformation />
        </div>
        <div className="right-column w-full md:w-1/3 space-y-4">
          <Checking />
          <PriceDetails />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
