const RegularList = ({
  itemsToDisplay,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {itemsToDisplay.map((item) => {
        return <ItemComponent {...{ [resourceName]: item }} />;
      })}
    </>
  );
};

export default RegularList;
