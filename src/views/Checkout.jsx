import React from "react";
import PaymentOptions from "../components/molecules/PaymentOptions";
import UserInfo from "../components/molecules/UserInfo";
import Checking from "../components/molecules/CheckingDetails";
import PriceDetails from "../components/molecules/PriceDetails";
import ImpInformation from "../components/molecules/ImpInformation";

const CheckOut = () => {
  return (
    <div className="px-4 py-6 lg:px-8">
      <div className="booking-page flex flex-col lg:flex-row gap-6 lg:gap-8 my-6">
        {/* Left Column */}
        <div className="left-column w-full lg:flex-1 space-y-6">
          <h1 className="text-lg sm:text-xl font-semibold text-center lg:text-left">
            Secure your reservation
          </h1>
          <UserInfo />
          <PaymentOptions />
          <ImpInformation />
        </div>
        
        {/* Right Column */}
        <div className="right-column w-full lg:w-1/3 space-y-6 mt-6 lg:mt-0">
          <Checking />
          <PriceDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;


