import React from "react";
import { foundersData } from "../Constants/aboutData";

const Founders = () => {
  return (
    <div className="flex items-center gap-6">
      {foundersData.map(
        ({ id, image, title, subTitle, instagram, twitter, linkdin }) => {
          const InstagramIcon = instagram;
          const TwitterIcon = twitter;
          const LinkedinIcon = linkdin;

          return (
            <div key={id}>
              <img src={image} alt={title} />
              <p>{title}</p>
              <p>{subTitle}</p>

              <div className="text-black flex items-center gap-3 text-xl">
                <TwitterIcon />
                <InstagramIcon />
                <LinkedinIcon />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Founders;
