import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Markup Gallery
const galleryListEl = document.querySelector('.gallery');

const createMarkupElemetsGallery = ({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const makeGalleryItem = galleryItems.map(createMarkupElemetsGallery).join('');

galleryListEl.insertAdjacentHTML('beforeend', makeGalleryItem);

// Markup Modal Elemets Galler
const onGalleryImageClick = e => {
  e.preventDefault();

  if (e.code === 'Escape') {
    modal.close();
  }

  const createMarkupModalElemetsGallery = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="auto" height="auto">`);

  createMarkupModalElemetsGallery.show();

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      createMarkupModalElemetsGallery.close();
    }
  });
};

galleryListEl.addEventListener('click', onGalleryImageClick);
