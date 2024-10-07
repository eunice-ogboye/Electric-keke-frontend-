const RegularList = ({
  itemsToDisplay,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  console.log(itemsToDisplay)
  return (
    <>
      {itemsToDisplay.map((item) => {
        return <ItemComponent {...{ [resourceName]: item }} />;
      })}
    </>
  );
};

export default RegularList;
