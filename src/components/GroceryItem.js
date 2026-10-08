const GroceryItem = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.name}</span>
              <span> - ₹{item.originalPrice}</span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <img src={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroceryItem;
