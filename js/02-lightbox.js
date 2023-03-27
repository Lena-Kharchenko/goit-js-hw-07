import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listItem = document.querySelector(".gallery");

const imgItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
  })
  .join(" ");

console.log(galleryItems);
console.log(listItem);

listItem.insertAdjacentHTML("afterbegin", imgItem);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
