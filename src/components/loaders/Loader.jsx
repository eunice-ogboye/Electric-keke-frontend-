const Loader = ({ type = "spin", className, size }) => {
  const divide = size / 2;

  const SpinLoader = () => {
    return (
      <div className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width={size}
          height={size}
          style={{
            shapeRendering: "auto",
            display: "block",
            background: "rgba(255, 255, 255, 0);",
          }}
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              stroke="yellow"
              strokeWidth={5}
              fill="#e15b64"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
              strokeLinecap="round"
            >
              <animateTransform
                values="0 50 51;360 50 51"
                keyTimes="0;1"
                repeatCount="indefinite"
                dur="1s"
                type="rotate"
                attributeName="transform"
              ></animateTransform>
            </path>
            <g></g>
          </g>
        </svg>
      </div>
    );
  };

  const Spinner2 = () => {
    return (
      <div className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width={size}
          height={size}
          style={{
            shapeRendering: "auto",
            display: "block",
            background: "rgb(255, 255, 255, 0)",
          }}
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <circle
              stroke-dasharray="164.93361431346415 56.97787143782138"
              r="35"
              stroke-width="10"
              stroke="#e15b64"
              fill="none"
              cy="50"
              cx="50"
              strokeLinecap="round"
            >
              <animateTransform
                keyTimes="0;1"
                values="0 50 50;360 50 50"
                dur="1s"
                repeatCount="indefinite"
                type="rotate"
                attributeName="transform"
              ></animateTransform>
            </circle>
            <g></g>
          </g>
        </svg>
      </div>
    );
  };

  const BlubLoader = () => {
    return (
      <div className={className}>
        <img src="/loaders/loading.gif" />
      </div>
    );
  };

  return type === "spin"
    ? SpinLoader()
    : type === "spin2"
    ? Spinner2()
    : BlubLoader();
};

export default Loader;
