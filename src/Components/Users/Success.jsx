/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import styles from "./Users.module.css";

export const Success = ({ count }) => {
  return (
    <div class={styles.success_block}>
      <img src="media/dima.png" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className={styles.send_invite_btn}
      >
        Назад
      </button>
    </div>
  );
};
