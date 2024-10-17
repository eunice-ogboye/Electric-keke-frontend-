import { useState, useEffect } from "react";

export const useAreInputsFilled = (comparisonStatement) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (comparisonStatement) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [comparisonStatement]);

  return disabled;
};
