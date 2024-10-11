export const FilterTrigger = ({ styling, ...props }) => {
  return <div className={styling} {...props} />;
};

export const FilterGroup = ({
  styling,
  label,
  labelStyle,
  container_styles,
  children,
}) => {
  return (
    <div className={styling}>
      <p className={labelStyle}>{label}</p>
      <div className={container_styles}>{children}</div>
    </div>
  );
};

export const FilterGroupItem = ({ styling, ...props }) => {
  return <div className={`hover:translate-x-2 transition-all cursor-pointer ${styling}`} {...props} />;
};

export const FilterSheet = ({ styling, ...props }) => {
  return <div className={`relative ${styling}`} {...props} />;
};
