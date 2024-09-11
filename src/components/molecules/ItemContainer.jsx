// ItemContainer.js
import React from 'react';
import Item from './Item';
import { Company, Explore, Terms, Help } from './Menus';
import Logo from '../../views/Logo';

export default function ItemContainer() {
  return (
    <div className="ml-4 w-full gap-y-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-left">
      <div>
        <Logo />
        <p className="text-[#4F4F4F] roboto-regular text-[14px]">
          Your next goto companion for travel
        </p>
      </div>
      <Item links={Company} title="Company" />
      <div>
        <Item links={Explore} title="Explore" />
        <a
          className="text-[#2F80ED] roboto-regular text-[14px] hover:underline hover:decoration-blue-500"
          href="#"
        >
          see more
        </a>
      </div>
      <Item links={Terms} title="Terms and Policy" />
      <Item links={Help} title="Help" />
    </div>
  );
}
