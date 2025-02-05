import styles from './Users.module.css';

export const Success = ({ count }) => {
  return (
    <div class={styles.success_block}>
      <img src="images/success.svg" alt="Success" />
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
