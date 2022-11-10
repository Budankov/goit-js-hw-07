import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Markup Gallery
const galleryListEl = document.querySelector('.gallery');

const createMarkupElemetsGallery = ({ preview, original, description }) =>
  `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;

const makeGalleryItem = galleryItems.map(createMarkupElemetsGallery).join('');

galleryListEl.insertAdjacentHTML('beforeend', makeGalleryItem);

// Usage SimpleLightbox
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
