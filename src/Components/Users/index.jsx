import { Skeleton } from "./Skeleton";
import { User } from "./User";
import styles from "./Users.module.css";

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
}) => {
  console.log(searchValue);

  return (
    <div>
      <div className={styles.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className={styles.skeleton_list}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={styles.users_list}>
          {items
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
                //toLowerCase() - перевод в нижний регистр, для поиска с любой буквы (большая, маленькая)
              );
            })
            .map((obj) => (
              <User
                onClickInvite={onClickInvite}
                isInvited={invites.includes(obj.id)}
                key={obj.id}
                {...obj}
              />
              // <User {...obj} /> = (работает точно также как)
              // <User  first_name={obj.first_name} last_name={obj.last_name} email={obj.email} avatar={obj.avatar}/>
            ))}
        </ul>
      )}
      <button onClick={onClickSendInvites} className={styles.send_invite_btn}>
        Отправить приглашение
      </button>
    </div>
  );
};
