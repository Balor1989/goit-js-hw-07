import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryOfImages = document.querySelector('.gallery');
const cardOfImage = onCreateGalleryItem(galleryItems);
let openOriginalImage;

galleryOfImages.insertAdjacentHTML('beforeend', cardOfImage);
galleryOfImages.addEventListener('keydown', onPressEscToCloseImage);

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
             <a class="gallery__link" href="large-image.jpg">
                <img
                    loading = "lazy"
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
galleryOfImages.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    openOriginalImage = basicLightbox.create(`
		<img src="${e.target.dataset.source}" width="1280" height="900">
	`)
    openOriginalImage.show()
});


function onPressEscToCloseImage(event) {
  if (event.code !== 'Escape') {
      return;
    }
    openOriginalImage.close();
}