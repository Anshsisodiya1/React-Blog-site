import React, { useState } from "react";

const AdItem = ({ description, imageUrl }) => (
  <div className="ad-item">
    <img src={imageUrl} alt="Ad" className="ad-image" />
    {description && <p className="ad-description">{description}</p>}
  </div>
);

const Advertisenment = ({ Advisible }) => {


  const addddata = [
    {
      id: 1,
      imageUrl:
        "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/be09/feae/64e0/6c7c/4aff/f19f/47c5/3eb0/9bad/7d99/7d99.jpeg",
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBXQhX8m7cvppb63teUD5BrEdglXdzEgEFQ&s",
    },
    {
      id: 3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEVSwbgNSbZBl9_CfTC5AMEE1_Jcae2dzlQ&s",
    },
    {
      id: 4,
      imageUrl:
        "https://imgk.timesnownews.com/story/Tanishq_ekatvam_ad.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://newspaperads.ads2publish.com/wp-content/uploads/2017/12/rolex-watches-the-date-just-41-ad-times-of-india-pune-30-11-2017.png",
    },
    {
      id: 6,
      imageUrl:
        "https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/afaqs/media/post_attachments/73f37f78fb2bc4284439429a303e425f12610615af4b6cf6dda608c45ad60fa8.jpg",
    },
    {
      id: 7,
      title: "Ad Title 7",
  
      imageUrl:
        "https://newspaperads.ads2publish.com/wp-content/uploads/2017/09/van-heusen-power-dressing-festive-fashion-ad-calcutta-times-06-09-2017.jpg",
    },
    {
      id: 8,
      title: "Ad Title 8",
      imageUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/luxury-car-for-rent-%281%29-design-template-465c05d8542bec6b4a844db99c0fec4d_screen.jpg?ts=1657161243",
    },
    {
      id: 9,
      title: "Ad Title 9",
      imageUrl:
        "https://urbando.in/wp-content/uploads/2023/12/luxurious-villas-in-Siruseri-626x445.jpg",
    },
  ];

  return (
    <div className="Advertisement">
      <h1>Advertisement</h1>
      {addddata.slice(0, Advisible).map((ad) => (
        <AdItem
          key={ad.id}
          imageUrl={ad.imageUrl}
        />
      ))}
    </div>
  );
};

export default Advertisenment;





