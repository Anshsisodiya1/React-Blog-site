import React, { useContext } from "react";
import DataContext from "../DataContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CategoryDetail.css"

const SearchResults = () => {
  const { id } = useParams();
  const { searchText } = useParams();
  // console.log(searchText,"text");
  const data = useContext(DataContext);
  // console.log(data);
  const navigate = useNavigate();

  const searchData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(searchData,"search");

   // Filter out the current post and select 3 random items
   const otherPosts = data.filter((item) => item.id !== parseInt(id));
   const randomPosts = otherPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
 
   const handleLike = () => {
    setIsLiked((prev) => !prev);
  }; 

  return (
    <>
    <Navbar/>
    <div className="detailsParMain">
      <div className="search-result">
      <div className="detailschildmain">
        <button onClick={()=>navigate("/")} className="BackButton" >GO Back</button>
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
        <h1>Search Result for : {searchText}</h1>

        {searchData.length > 0 ? (
          <div className="result-contain">
            {searchData.map((item) => (
              <Link to={`details/${item.id}`} key={item.id}>
                <img src={item.img_url} alt={item.title} className="Detailsimg"  />
                <p className="DetailsDescription" >{item.description.split(" ").slice(0, 20).join(" ")}</p>
              </Link>
            ))}
          </div>
        ) : (
          <h2>No results found</h2>
        )}
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
   <Footer/>
    </>
  );
};

export default SearchResults;










// import React, { useContext } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import DataContext from "../DataContext";
// // import "./SearchResults.css";

// // Helper function to calculate similarity score
// const calculateSimilarity = (str1, str2) => {
//   const editDistance = (a, b) => {
//     const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
//       Array(b.length + 1).fill(0)
//     );

//     for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
//     for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

//     for (let i = 1; i <= a.length; i++) {
//       for (let j = 1; j <= b.length; j++) {
//         if (a[i - 1] === b[j - 1]) {
//           matrix[i][j] = matrix[i - 1][j - 1];
//         } else {
//           matrix[i][j] = Math.min(
//             matrix[i - 1][j - 1] + 1, // Substitution
//             matrix[i][j - 1] + 1,     // Insertion
//             matrix[i - 1][j] + 1      // Deletion
//           );
//         }
//       }
//     }

//     return matrix[a.length][b.length];
//   };

//   const maxLen = Math.max(str1.length, str2.length);
//   const distance = editDistance(str1.toLowerCase(), str2.toLowerCase());
//   return (1 - distance / maxLen) * 100; // Similarity percentage
// };

// const SearchResults = () => {
//   const { searchText } = useParams();
//   const data = useContext(DataContext);
//   const navigate = useNavigate();

//   // Filter items with a similarity score of 70% or more
//   const results = data.filter(item => {
//     const similarity = calculateSimilarity(item.title, searchText);
//     return similarity >= 70; // Threshold for similarity
//   });

//   return (
//     <div className="search-results">
//       <button onClick={() => navigate("/")} className="back-button">
//         Back to Home
//       </button>
//       <h3>Search Results for "{searchText}"</h3>
      
//       {results.length > 0 ? (
//         <div className="results-container">
//           {results.map(item => (
//             <Link to={`/detail/${item.id}`} key={item.id} className="result-card">
//                 <h1>{item.title}</h1>
//               <img src={item.img_url} alt={item.title} className="result-image" />
//               <div>
//                 <h2>{item.title}</h2>
//                 <p>{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <p>No results found. Try refining your search.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
