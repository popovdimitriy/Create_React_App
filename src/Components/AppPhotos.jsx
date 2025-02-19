import styles from "./Photos.module.css";
import { useEffect, useState } from "react";
import { Collection } from "./Collection";

const cats = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];

function AppPhotos() {
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState([]);
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://67ae4c489e85da2f020d1c47.mockapi.io/Collections?${
        categoryId ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);
  return (
    <div className={styles.App}>
      <h1>Моя коллекция фотографий</h1>
      <div className={styles.top}>
        <ul className={styles.tags}>
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? `${styles.active}` : `${styles}`}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.search_input}
          placeholder="Поиск по названию"
        />
      </div>
      <div className={styles.content}>
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          collections
            .filter((obj) => obj.name.toLowerCase().includes(searchValue))
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className={styles.pagination}>
        {[...Array(5)].map((_, i) => (
          <li
            onClick={() => setPage(i)}
            className={page === i ? `${styles.active}` : `${styles}`}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppPhotos;
