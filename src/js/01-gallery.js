import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

createGallery(galleryItems);

function createGallery(arr) {
  const str = arr
    .map(({ preview: url, description: alt, original }) => {
      return `<li class="gallery__item">
          <a class="gallery__link"
          href="${original}"
          onclick="return false;">
            <img
              class="gallery__image"
              src="${url}"
              alt="${alt}"
            />
          </a>
        </li>`;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', str);
}

let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  captionClass: 'captionPosition',
});
console.log('Hello');
console.log('lightbox: ', lightbox);
