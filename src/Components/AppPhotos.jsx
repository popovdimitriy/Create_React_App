import styles from "./Photos.module.css";

function Collection({ name, images }) {
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

function AppPhotos() {
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
        <input className={styles.search_input} placeholder="Поиск по названию" />
      </div>
      <div className={styles.content}>
        <Collection
          name="Путешествие по миру"
          images={[
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          ]}
        />
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
