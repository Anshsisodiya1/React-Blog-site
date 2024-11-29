import React, { useState } from "react";

const AdItem = ({ description, imageUrl }) => (
  <div className="ad-item">
    <img src={imageUrl} alt="Ad" className="ad-image" />
  </div>
);

const CompAdd = () => {


  const addddata = [
    {
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLzXtuE3VLITAneoOenaMP07AIcx65cit1Q&s",
    }
  ];

  return (
    <div className="Advertisement">
      <h1>Advertisement</h1>
      {addddata.slice(0, 1).map((ad) => (
        <AdItem
          key={ad.id}
          imageUrl={ad.imageUrl}
        />
      ))}
    </div>
  );
};

export default CompAdd;





