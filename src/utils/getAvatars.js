const getAvatars = (choice_of_ride) => {
  return choice_of_ride === "ride"
    ? [
        { src: "/how-to-go/ride1.png", bgColor: "bg-basic" },
        { src: "/how-to-go/ride3.png", bgColor: "bg-[#AA9C75]" },
        { src: "/how-to-go/ride3.png", bgColor: "bg-[#D4B5AD]" },
      ]
    : [
        { src: "/how-to-go/delivery1.png", bgColor: "bg-[#B5CBF8]" },
        { src: "/how-to-go/delivery2.png", bgColor: "bg-basic-agile" },
        { src: "/how-to-go/delivery3.png", bgColor: "bg-[#D4B5AD]" },
      ];
};

export default getAvatars;
