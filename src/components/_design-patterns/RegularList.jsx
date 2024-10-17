const RegularList = ({ list, component: Component, ...props }) => {
  return (
    <>
      {list.map((item, index) => (
        <Component key={index} {...{ ...item, ...props }} />
      ))}
    </>
  );
};

export default RegularList;
