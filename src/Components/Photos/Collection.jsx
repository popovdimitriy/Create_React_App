import React from "react";
import styles from "./Photos.module.css";

export function Collection({ images, name }) {
  return (
    <div className={styles.collection}>
      <img className={styles.collection_big} src={images[0]} alt="Item" />
      <div className={styles.collection_bottom}>
        <img className={styles.collection_mini} src={images[1]} alt="Item" />
        <img className={styles.collection_mini} src={images[2]} alt="Item" />
        <img className={styles.collection_mini} src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}
