import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '15px',
  timeout: 5000,
  opacity: 1,
  warning: {
    background: '#54ADFF',
    textColor: '#111111',
    notiflixIconColor: '#ffc107',
  },
});

const getMessage = error => {
  switch (error.status) {
    case 400:
      Notiflix.Notify.warning(`${error.data.message}`);
      break;
    case 401:
      Notiflix.Notify.warning(`${error.data.message}`);
      break;
    case 409:
      Notiflix.Notify.warning(`${error.data.message}`);
      break;
    case 500:
      Notiflix.Notify.warning(
        `Unfortunately, something has gone wrong. Please refresh your browser\nError ${error.status}`
      );
      break;
    default:
      Notiflix.Notify.warning(
        `Oops, something went wrong...Try it again\nError ${error.status} ${error.statusText} `
      );
  }
};

export default getMessage;
