import SimpleLightbox from 'simplelightbox';

export const loadBtn = document.querySelector('.load');
const loader = document.querySelector('.loader');
export const container = document.querySelector('.gallery');

export const galleryView = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
  captionPosition: 'bottom',
});

//  Markup function

export function createGallery(images) {
  const markUp = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes = 0,
        views = 0,
        comments = 0,
        downloads = 0,
      }) => `<li class="gallery-item">
  <a href="${largeImageURL}" class="link" target="_blank">
  <img src="${webformatURL}" alt="${tags}" width="360" /></a>
  <ul class="description-list">
    
  <li class="description-item">
      <h3 class="description-title">Likes</h3>
        <p class="description-text">${likes}</p>
    </li>
    
  <li class="description-item">
    <h3 class="description-title">Views</h3>
      <p class="description-text">${views}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Comments</h3>
      <p class="description-text">${comments}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Downloads</h3>
      <p class="description-text">${downloads}</p>
  </li>
</ul>
</li>`
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markUp);
  galleryView.refresh();
}

export function clearGallery() {
  container.innerHTML = '';
}

// -- Loader control

export function showLoader() {
  if (!loader.classList.contains('visible')) {
    loader.classList.add('visible');
  }
}

export function hideLoader() {
  if (loader.classList.contains('visible')) {
    loader.classList.remove('visible');
  }
}

//  -- load more button control --

export function showLoadMoreButton() {
  if (!loadBtn.classList.contains('visible')) {
    loadBtn.classList.add('visible');
  }
}

export function hideLoadMoreButton() {
  if (loadBtn.classList.contains('visible')) {
    loadBtn.classList.remove('visible');
  }
}

export function disableButton() {
  loadBtn.setAttribute('disabled', 'true');
}

export function enableButton() {
  loadBtn.removeAttribute('disabled');
}

// -- interaction with local storage --

export function saveQuery(query) {
  localStorage.setItem('queryWord', query);
}

export function getQuery() {
  return localStorage.getItem('queryWord');
}

export function removeQueryLocal() {
  localStorage.removeItem('queryWord');
}

//-- text fo iziToast--

export function errorText(error) {
  const errorText = {
    title: 'Error',
    message: `Oops.. something goes wrong, error : ${error.status} !`,
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
    titleColor: 'white',
  };
  return errorText;
}

export function infoText() {
  const infoText = {
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
  return infoText;
}

export function fillText() {
  const fillText = {
    message: 'Sorry, you need to fill searсh query',
    position: 'topRight',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
  return fillText;
}

export function endText() {
  const endText = {
    message: `We're sorry, but you've reached the end of search results.`,
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
  return endText;
}

// --- scroll function----

export function scrollPage() {
  const card = document.querySelector('.gallery-item');
  if (!card) return;

  const cardHeight = card.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}