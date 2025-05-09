import React from "react";
import Item from "../common/Item";
import styles from "./ItemGrid.module.css";

const ItemGrid = ({ items, columns = 3 }) => {
  // Tạo một chuỗi các cột dựa trên số lượng cột được truyền vào
  const ItemGridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`, // "1fr" là phần chia đều cho mỗi cột
  };

  return (
    <div className={styles.gridContainer} style={ItemGridStyle}>
      {items.map((item, index) => (
        <Item key={index} img={item.img} title={item.title} />
      ))}
    </div>
  );
};

export default ItemGrid;
