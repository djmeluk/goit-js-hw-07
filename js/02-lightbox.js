import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const cardMarkup = createPictureMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", cardMarkup);
galleryList.addEventListener("click", onClickGalleryImg);

function createPictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}


function onClickGalleryImg(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;

    }
}
const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});