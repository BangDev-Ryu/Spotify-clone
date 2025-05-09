import React from "react";
import styles from "./Item.module.css";

const Item = ({ img = "/images/default-track.png", title = "This is title" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={img}
          alt="Track Image"
          className={styles.icon}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      
      {/* Nút Play sẽ xuất hiện khi hover vào Item */}
      <button className={styles.playButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Item;
