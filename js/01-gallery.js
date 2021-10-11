import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryOfImages = document.querySelector('.gallery');
const cardOfImage = onCreateGalleryItem(galleryItems);

galleryOfImages.insertAdjacentHTML('beforeend', cardOfImage);

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
             <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div> 
        `
    }).join('')
}
galleryOfImages.addEventListener('click', e => {})