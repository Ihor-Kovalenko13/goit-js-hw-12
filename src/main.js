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

form.addEventListener('submit', showGallery);
loadBtn.addEventListener('click', clickLoad);

async function showGallery(event) {
  event.preventDefault();
  clearGallery();
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
      return;
    }

    createGallery(hits);
    // scrollPage();

    totalPage = Math.ceil(totalHits / 15);

    if (page < totalPage) {
      saveQuery(query);
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      form.reset();
    }
  } catch (error) {
    iziToast.error(errorText(error));
  } finally {
    hideLoader();
    // form.reset();
  }
}

async function clickLoad(event) {
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
      iziToast.error(endText());
      form.reset();
    }
  } catch (error) {
    iziToast.error(errorText(error));
  } finally {
    hideLoader();
    enableButton();
  }
}