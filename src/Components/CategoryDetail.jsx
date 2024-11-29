import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "../DataContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  const { id } = useParams();
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  // Find the current post
  const post = data.find((item) => item.id === parseInt(id));

  // Filter out the current post and select 3 random items
  const otherPosts = data.filter((item) => item.id !== parseInt(id));
  const randomPosts = otherPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="detailsParMain">
        <div className="detailschildmain">
          <button className="BackButton" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <div className="MainDetails">
            <h1 className="DetailsTitle">{post.title}</h1>

            <div className="personalintro">
              <div className="namedate">
                <div className="person-img"></div>
                <h3>Ansh Sisodiya</h3>
                <h4>1 November 2024</h4>
              </div>
              <div className="socialmedia">
                <div className="twitter" title="Twitter"></div>
                <div className="facebook" title="Facebook"></div>
                <div className="YouTube" title="YouTube"></div>
                <div className="instagram" title="Instagram"></div>
              </div>
            </div>

            <img className="Detailsimg" src={post.img_url} alt={post.title} />
            <p className="DetailsDescription">{post.description}</p>
          </div>
          <div className="like-share-container">
            <div className="like-button" onClick={handleLike}></div>
            <div className="share-button"></div>
          </div>
        </div>
      </div>

      <div className="DetailsMore">
        <h1 className="DetailsMoreHead">More From The Domain</h1>

        <div className="card-grid">
          {randomPosts.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img_url} className="card-image" alt={item.title} />
              <div className="card-description">
                <p className="overlay-text">
                  {item.description.substring(0, 50)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryDetail;
