import React from "react";

import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons"; // NOT a default import


export const activityData = [
  {
    id: 1,
    image: "/images/icon_shop.svg",
    likes: "10.5k",
    title: "Sallers active our site",
  },
  {
    id: 2,
    image: "/images/Icon-Sale.svg",
    likes: "33k",
    title: "Mopnthly Produduct Sale",
  },
  {
    id: 3,
    image: "/images/Icon-Shopping bag.svg",
    likes: "45.5k",
    title: "Customer active in our site",
  },
  {
    id: 3,
    image: "/images/Icon-Moneybag.svg",
    title: "Anual gross sale in our site",
    likes: "25k",
  },
];






interface Founder {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  instagram: IconType;
  twitter: IconType;
  linkdin: IconType;
}

export const foundersData: Founder[] = [
  {
    id: 1,
    image: "/images/TomCruise.svg",
    title: "Tom Cruise",
    subTitle: "Founder & Chairman",
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkdin: FaLinkedinIn,
  },
];

