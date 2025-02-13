import styles from "./Photos.module.css";
import { useEffect, useState } from "react";
import { Collection } from "./Collection";

function AppPhotos() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://67ae4c489e85da2f020d1c47.mockapi.io/Collections")
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      });
  }, []);
  return (
    <div className={styles.App}>
      <h1>Моя коллекция фотографий</h1>
      <div className={styles.top}>
        <ul className={styles.tags}>
          <li className={styles.active}>Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input
          className={styles.search_input}
          placeholder="Поиск по названию"
        />
      </div>
      <div className={styles.content}>
        {collections.map((obj, index) => (
          <Collection key={index} name={obj.name} images={obj.photos} />
        ))}
      </div>
      <ul className={styles.pagination}>
        <li>1</li>
        <li className={styles.active}>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default AppPhotos;
