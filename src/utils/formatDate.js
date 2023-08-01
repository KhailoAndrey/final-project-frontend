function convertDateFormat(inputDate) {
    // Разделяем исходную дату на компоненты: день, месяц и год
    const dateComponents = inputDate.split('-');
    const day = dateComponents[0];
    const month = dateComponents[1];
    const year = dateComponents[2];
  
    // Объединяем компоненты в новую строку с форматом "дд.мм.гггг"
    const formattedDate = `${day}.${month}.${year}`;
  
    return formattedDate;
  }
    
  export default convertDateFormat;