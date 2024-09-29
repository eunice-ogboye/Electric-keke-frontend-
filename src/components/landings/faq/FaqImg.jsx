const FaqImg = ({ className, imgSrc }) => {
  return (
    <div className={`faq-img ${className}`}>
      <img
        src={imgSrc}
        alt="support1"
        className="size-full object-cover object-center"
      />
    </div>
  );
};

export default FaqImg;
