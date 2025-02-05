/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styles from "./Modal.module.css";

const ModalApp = ({ open, setOpen, children }) => (
  <div
    className={
      open ? `${styles.overlay_animated.show}` : `${styles.overlay_animated}`
    }
  >
    <div className={styles.modal}>
      <svg
        onClick={() => setOpen(false)}
        height="200"
        viewBox="0 0 200 200"
        width="200"
      >
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
);

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.App}>
      <button onClick={() => setOpen(true)} className={styles.open_modal_btn}>
        ✨ Открыть окно
      </button>

      {/* Вариант 3. Вывели в отдельный компонент ModalApp и добавили
      динамический контент через чилдрен внутри модельного окна - Параграф и кнопку   */}
      <ModalApp open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <h3>Это модельное окно</h3>
        <button>12345</button>
      </ModalApp>
    </div>
  );
}
export default Modal;

/* Вариант 1. Условный рендер. Подходит когда не требуется анимация.    
 {open && (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <svg
            onClick={() => setOpen(false)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
    )}  */

/* Вариант 2. Когда можно добавлять анимацию. Используя классы.  
   .overlay_animated {opacity: 0; visibility: hidden;  
    &.show           {opacity: 1; visibility: visible;*/
/* <div
        className={
          open
            ? `${styles.overlay_animated.show}`
            : `${styles.overlay_animated}`
        }
      >
        <div className={styles.modal}>
          <svg
            onClick={() => setOpen(false)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div> */
