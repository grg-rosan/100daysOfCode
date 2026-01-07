import React, {  useState } from "react";

const RatingComp = () => {
  const totalStars = 5;
  const [userRating, setUserRating] = useState(0);
  const [hover, setHover] = useState(0)

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return <span
            key={starValue}
            onClick={()=> setUserRating(starValue)}
               onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              cursor: "pointer",
              fontSize: "30px",
              color:
                starValue <= (hover || userRating) ? "gold" : "gray",
            }}
        >★</span>;
      })}
    </div>
  );
};

export default RatingComp;
