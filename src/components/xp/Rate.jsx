import Star from "../../assets/svg/Star";
import React, { useState } from "react";

const Rate = ({ rate, handleClick, statik, className, size = 20 }) => {
  const [indicate, setIndicate] = useState(2);
  const [show, setShow] = useState(false);

  const StatikRating = () => {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div>
            <Star key={item} rated={rate >= item ? true : false} size={size} />
          </div>
        ))}
      </div>
    );
  };

  const DynamikRating = () => {
    return (
      <>
        {!show && (
          <div
            className={`flex items-center w-fit ${className}`}
            onMouseEnter={() => setShow(true)}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="border">
                <Star
                  key={item}
                  rated={rate >= item ? true : false}
                  size={size}
                />
              </div>
            ))}
          </div>
        )}
        {show && (
          <div
            className={`flex items-center w-fit ${className}`}
            onMouseLeave={() => setShow(false)}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                onMouseEnter={() => setIndicate(item)}
                onMouseLeave={() => setIndicate(0)}
                onClick={() => handleClick(item)}
                className="hover:scale-150 transition-transform duration-100 cursor-pointer"
              >
                <Star
                  key={item}
                  rated={rate >= item ? true : false}
                  size={size}
                />
              </div>
            ))}
          </div>
        )}
      </>
    );
  };
  return statik ? StatikRating() : DynamikRating();
};

export default Rate;
