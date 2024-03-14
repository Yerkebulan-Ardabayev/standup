import './style.css';

import { getComedians } from './scripts/api';
import { initForm } from './scripts/form';
import { createComedianBlock } from './scripts/comedians';
import { initChangeSection } from './scripts/initChangeSection';
import { initQrPage } from './scripts/qrPage';

const init = async () => {
  if (window.location.pathname.endsWith('qr.html')) {
    initQrPage();
    return;
  }
    
    
  const countComedians = document.querySelector(
    '.event__info-item_comedians .event__info-number'
  );
  const bookingComediansList = document.querySelector(
    '.booking__comedians-list'
  );
  const bookingForm = document.querySelector('.booking__form');
  const bookingInputPhone = document.querySelector('.booking__input_phone');
  const bookingInputTicket = document.querySelector('.booking__input_ticket');
  const bookingInputFullName = document.querySelector(
    '.booking__input_fullName'
  );

  const event = document.querySelector('.event');
  const booking = document.querySelector('.booking');
  const eventButtonReserve = document.querySelector('.event__button_reserve');
  const eventButtonEdit = document.querySelector('.event__button_edit');
  const bookingTitle = document.querySelector('.booking__title');

  const comedians = await getComedians();

  if (comedians) {
    countComedians.textContent = comedians.length;
    
  const changeSection = initChangeSection(
      event,
      booking,
      eventButtonReserve,
      eventButtonEdit,
      bookingTitle,
    bookingForm,
       comedians,
    bookingComediansList
    );

    initForm(
      bookingInputFullName,
      bookingInputPhone,
      bookingInputTicket,
      bookingForm,
      changeSection,
      bookingComediansList
    );
  }
};

init();
