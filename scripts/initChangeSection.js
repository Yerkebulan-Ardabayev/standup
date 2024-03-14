import { createComedianBlock } from "./comedians";

export const initChangeSection = (
  event,
  booking,
  eventButtonReserve,
  eventButtonEdit,
  bookingTitle,
  bookingForm,
  comedians,
  bookingComediansList
) => {
  eventButtonEdit.style.transition = "opacity 0.5s, visibility 0.5s";
  eventButtonReserve.style.transition = "opacity 0.5s, visibility 0.5s"
  eventButtonEdit.classList.remove('event__button_hidden');
  eventButtonReserve.classList.remove('event__button_hidden');

  const changeSection = (event, booking) => {
    if(event && booking) {
      event.classList.toggle('event__hidden');
    booking.classList.toggle('booking__hidden');
    }    

    if (!booking.classList.contains('booking__hidden')) {
      const comedianBlock = createComedianBlock(comedians, bookingComediansList);
    bookingComediansList.append(comedianBlock);
    }  

  }

  eventButtonReserve.addEventListener('click', () => {
    changeSection(event, booking);
    bookingTitle.textContent = 'Забронируйте место в зале';
    bookingForm.method = 'PATCH';
  })

  eventButtonEdit.addEventListener('click', () => {
    changeSection(event, booking);
    bookingTitle.textContent = 'Редактирование брони';
    bookingForm.method = 'PATCH';
  })

  return changeSection;
};
