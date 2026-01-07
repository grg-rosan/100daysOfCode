import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../css/imageimport.css";
import Masonry from "react-masonry-css";
const ImageImport = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=13");
      const data = await res.json();
      setImage(data);
    };
    fetchImage();
  }, []);
  return (
    <>
      {/* <div className="gallery"> */}
        <Masonry
          breakpointsCols={4}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {image.map((img) => (
            <img
              key={img.id}
              src={img.download_url}
              alt={img.author}
              width="300"
            />
          ))}
        </Masonry>
      {/* </div> */}
    </>
  );
};

export default ImageImport;
