import React from "react";

import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { IconBaseProps } from "react-icons";

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
    id: 4,
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
  instagram: React.ComponentType<IconBaseProps>;
  twitter: React.ComponentType<IconBaseProps>;
  linkdin: React.ComponentType<IconBaseProps>;
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
  {
    id: 2,
    image: "/images/EmmaWatson.svg",
    title: "Emma Watson",
    subTitle: "Managing Director",
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkdin: FaLinkedinIn,
  },
  {
    id: 3,
    image: "/images/WillSmith.svg",
    title: "wILL Smith",
    subTitle: "Product Designer",
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkdin: FaLinkedinIn,
  },
];
