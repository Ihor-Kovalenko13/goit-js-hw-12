import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadBtn,
  disableButton,
  enableButton,
  saveQuery,
  getQuery,
  removeQueryLocal,
  endText,
  infoText,
  fillText,
  errorText,
  scrollPage,
} from './js/render-functions';

const form = document.querySelector('.form');

let page = 1;
let totalPage = 1;


hideLoadMoreButton();

form.addEventListener('submit', onSearchSubmit);
loadBtn.addEventListener('click', onLoadMore);

async function onSearchSubmit(event) {
  event.preventDefault();


  hideLoadMoreButton();
  clearGallery();
  removeQueryLocal();
  page = 1;

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error(fillText());
    return;
  }

  try {
    showLoader();

    const { hits, totalHits } = await getImagesByQuery(query, page);

    
    if (!hits.length) {
      iziToast.info(infoText());
      hideLoadMoreButton();
      return;
    }

    createGallery(hits);
    totalPage = Math.ceil(totalHits / 15);

    
    if (page < totalPage) {
      showLoadMoreButton();
      saveQuery(query);
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error(errorText(error));
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;
  const query = getQuery();

  try {
    showLoader();
    disableButton();

    const { hits } = await getImagesByQuery(query, page);
    createGallery(hits);
    scrollPage();

   
    if (page >= totalPage) {
      hideLoadMoreButton();
      removeQueryLocal();
      iziToast.info(endText());
      form.reset();
    }
  } catch (error) {
    iziToast.error(errorText(error));
  } finally {
    hideLoader();
    enableButton();
  }
}
