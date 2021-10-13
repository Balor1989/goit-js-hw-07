import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryOfImages = document.querySelector('.gallery');
const cardOfImage = onCreateGalleryItem(galleryItems);


galleryOfImages.insertAdjacentHTML('beforeend', cardOfImage);

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
                </a> `
    }).join('')
}
// Interface
new SimpleLightbox('.gallery a', {
   disableRightClick: true,
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt', 
});




