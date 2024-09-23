const getDriverAuthImageAndTitle = (processStage) => {
  return processStage === "Identity"
    ? {
        img: "/selfie.svg",
        title: "Take A Selfie of Yourself",
        desc: "your face has to be well lit and well positioned, make sure you don't have any background light.",
      }
    : process === "Driver License Front"
    ? {
        img: "/license-card.svg",
        title: "Driver's License",
        desc: "Upload a clear front picture of your drivers license, showing all corners of the drivers license.",
      }
    : process === "Driver License Back"
    ? {
        img: "/license-card.svg",
        title: "Driver's License",
        desc: "Upload a clear back picture of your drivers license, showing all corners of the drivers license.",
      }
    : {
        title: "Processing",
        desc: "We are reviewing the information you provide to verify your identity. verification process takes 24 hours, a notification will be sent to your email.",
      };
};

export default getDriverAuthImageAndTitle;