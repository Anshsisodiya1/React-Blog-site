import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import "./Component.css";
import CompAdd from "./CompAdd";

const Technology = () => {
  const [visible, setVisible] = useState(3); 
  const [visibleright, setVisibleright] = useState(6); 
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const lazyloader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 1300);
    };
    lazyloader();
  }, []);

  const data = useContext(DataContext);
  const technology = data.filter((item) => item.category === "Technology");

  const selectedArray = [
    17,18,19,20,21, 22, 23,
  ];

  // Function to get a random image from selectedArray
  const getRandomImage = () => {
    const randomId =
      selectedArray[Math.floor(Math.random() * selectedArray.length)];
    return data.find((item) => item.id === randomId);
  };

  const card1 = getRandomImage();
  const card2 = getRandomImage();
  const card3 = getRandomImage();

  const handleLoad = () => {
    setVisible((prev) => prev + 3);
    setVisibleright((prev)=>prev+6) 
  };

  return (
    <>
      <Navbar />
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
        <div className="second-container">
        <h1>Top Stories</h1>
            <div className="card-grid">
              <div
                className="card"
                style={{ backgroundImage: `url(${card1?.img_url})` }}
              >
                <div className="card-description">
                  <h2>{card1?.name}</h2>
                  <p>
                    {card1?.description.split(" ").slice(0, 40).join(" ") + "..."}
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ backgroundImage: `url(${card2?.img_url})` }}
              >
                <div className="card-description">
                  <h2>{card2?.name}</h2>
                  <p>
                    {card2?.description.split(" ").slice(0, 40).join(" ") + "..."}
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ backgroundImage: `url(${card3?.img_url})` }}
              >
                <div className="card-description">
                  <h2>{card3?.name}</h2>
                  <p>
                    {card3?.description.split(" ").slice(0, 40).join(" ") + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Bollywoodmain">
            {/* LeftSide Section */}
            <div className="LeftSide">
              <h1 className="main-heading">Technology</h1>
              <div className="ChildMain">
                {technology.slice(0, visible).map((item) => (
                  <div className="BollyMainMovie-left" key={item.id}>
                    <Link to={`/detail/${item.id}`} className="bollylink">
                
                      <div className="bimg">
                        <img
                          src={item.img_url}
                          alt="Bollywood movie"
                          className="BollyMainimg"
                        />
                      </div>
                      <div className="bdes">
                        <h3 className="Title">{item.title}</h3>
                        <p className="description">
                          {item.description.split(" ").slice(0, 60).join(" ") + "..."}
                        </p>
                      </div>
                    
                    </Link>
                  </div>
                ))}
              </div>
              {visible < technology.length && (
                <button onClick={handleLoad} className="Load-more-btn">Load More</button>
              )}
            </div>

            {/* RightSide Section */}
            <div className="RightSide">
              <h1>Top Posts</h1>
              <div className="ChildMain">
                {technology.slice(0, visibleright).map((item) => (
                  <div className="BollyMainMovie" key={item.id}>
                    <Link to={`/detail/${item.id}`} className="rightbollypost">
                      <div className="bimg">
                        <img
                          src={item.img_url}
                          alt="Bollywood movie"
                          className="Bollyrightimg"
                        />
                      </div>
                      <div className="bdes">
                        <p className="description">
                          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="comp-add">
            <CompAdd/>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Technology;
