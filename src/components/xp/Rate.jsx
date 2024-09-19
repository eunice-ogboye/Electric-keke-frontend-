import React, { useState } from "react";

const Rate = ({ rate, handleClick, statik, big, className }) => {
  const [indicate, setIndicate] = useState(2);
  const [show, setShow] = useState(false);

  const StatikRating = () => {
    return (
      <div className={`flex items-center gap-x-4 ${className}`}>
        {[1, 2, 3, 4, 5].map((item) => (
          <span key={item}>
            {rate >= item ? (
              <img
                src={big ? "/big-star-gold.svg" : "/star-gold.svg"}
                alt="rated"
              />
            ) : (
              <img src={big ? "/big-star.svg" : "/star.svg"} alt="rated" />
            )}
          </span>
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
              <span key={item}>
                {rate >= item ? (
                  <img
                    src={big ? "/big-star-gold.svg" : "/star-gold.svg"}
                    alt="rated"
                  />
                ) : (
                  <img src={big ? "/big-star.svg" : "/star.svg"} alt="rated" />
                )}
              </span>
            ))}
          </div>
        )}
        {show && (
          <div
          className={`flex items-center w-fit ${className}`}
            onMouseLeave={() => setShow(false)}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <span
                key={item}
                onMouseEnter={() => setIndicate(item)}
                onMouseLeave={() => setIndicate(0)}
                onClick={() => handleClick(item)}
                className="hover:scale-150 transition-transform duration-100 cursor-pointer"
              >
                {indicate >= item ? (
                  <img
                    src={big ? "/big-star-gold.svg" : "/star-gold.svg"}
                    alt="rated"
                  />
                ) : (
                  <img src={big ? "/big-star.svg" : "/star.svg"} alt="rated" />
                )}
              </span>
            ))}
          </div>
        )}
      </>
    );
  };
  return statik ? StatikRating() : DynamikRating();
};

export default Rate;
