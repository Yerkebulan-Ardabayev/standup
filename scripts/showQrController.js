import QRCode from "qrcode"
import { Notification } from "./Notification";

const displayQrCode = (data) => {
  let error = false;
  const modal = document.querySelector(".modal");
  const canvas = document.querySelector(".qrCanvas");
  const closeButton = document.querySelector(".modal__close");

  QRCode.toCanvas(canvas, data, (err) => {
    if (err) {
      error = true;
      console.error(err);
      return;
    }
    console.log("QRкод создан!!!");
  });

  if (error) {
    Notification.getInstance().show("Что-то пошло не так, попробуйте позже!!")
  }

  modal.classList.add("modal__show");

  window.addEventListener('click', ({ target }) => {
    if (target === closeButton || target === modal) {
      modal.classList.remove("modal__show");
      canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
    }
    
  })
}

export const showQrController = () => {
  bookingPerformances.addEventListener('click', ({ target }) => {
    if (target.closest('.booking__hall')) {
      const bookingData = target.dataset.booking;
      displayQrCode(bookingData);
    }
  })
  
}