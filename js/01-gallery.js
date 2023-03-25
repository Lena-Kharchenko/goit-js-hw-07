import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listItem = document.querySelector(".gallery");

const imgList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join(" ");

listItem.insertAdjacentHTML("afterbegin", imgList);

console.log(galleryItems);
console.log(listItem);

listItem.addEventListener("click", onImageClickChange);

function onImageClickChange(event) {
  event.preventDefault();

  const isClickOnImg = event.target.classList.contains("gallery__image");

  const imgChange = event.target.dataset.source;

  if (!isClickOnImg) {
    console.log("You have not selected a picture");
    return;
  }
  console.log(event.target);

  createModalWindow(imgChange);
}

function createModalWindow(imgChange) {
  const instance = basicLightbox.create(
    `
		<img src = ${imgChange} width="1400" height="900" src="https://placehold.it/1400x900">
	`
  );

  instance.show();
}

document.addEventListener("keydown", escapeCloseModalWindow);

function escapeCloseModalWindow(event) {
  const escPress = event.code === "Escape";
  if (escPress) {
    instance.close();
    document.removeEventListener("keydown", escapeCloseModalWindow);
  }
}
