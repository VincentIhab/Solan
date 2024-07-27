const carousel = document.querySelector(".carousel");
const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const tracker = document.querySelector(".carousel-tracker__tracker");
const totalItems = items.length;
let currentIndex = 0;
function updateCarousel() {
    // Remove active class from all items
    items.forEach((item)=>{
        item.classList.remove("active");
    });
    // Add active class to the first visible item
    items[0].classList.add("active");
    updateTracker();
}
function updateTracker() {
    const percentage = (currentIndex + 1) / totalItems * 100; // Calculate the percentage
    tracker.style.width = `${percentage}%`;
}
function next() {
    currentIndex = (currentIndex + 1) % totalItems;
    const firstItem = items.shift(); // Remove the first item from the array
    items.push(firstItem); // Add it to the end of the array
    // Reorder the DOM elements to match the array order
    items.forEach((item)=>{
        carousel.appendChild(item);
    });
    updateCarousel(); // Update the active class
}
function prev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    const lastItem = items.pop(); // Remove the last item from the array
    items.unshift(lastItem); // Add it to the beginning of the array
    // Reorder the DOM elements to match the array order
    items.forEach((item)=>{
        carousel.appendChild(item);
    });
    updateCarousel(); // Update the active class
}
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
// Initial setup
updateCarousel();

//# sourceMappingURL=index.8e962d96.js.map
