import React from "react";
import Item from "./Item";

const ItemGrid = ({ items, columns }) => {
  return (
    <div 
      className="grid gap-2 w-full px-4 py-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
      }}
    >
      {items.map((item, index) => (
        <Item key={index} img={item.img} title={item.title} />
      ))}
    </div>
  );
};

export default ItemGrid;
