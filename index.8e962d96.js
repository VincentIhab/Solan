const carousel = document.querySelector(".carousel");
const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const tracker = document.querySelector(".carousel-tracker__tracker");
const withAnimations = document.querySelector(".with-animations");
const totalItems = items.length;
let currentIndex = 0;
let startX = 0;
let endX = 0;
let isDragging = false;
function updateCarousel(direction) {
    // Remove active and direction classes from all items
    items.forEach((item)=>{
        item.classList.remove("active", "come-from-right", "come-from-left", "come-from-right-prev", "come-from-left-prev");
    });
    // Add active and direction class to the first visible item
    if (direction === "next") {
        items[0].classList.add("active", "come-from-right");
        items[items.length - 1].classList.add("come-from-right-prev");
    } else if (direction === "prev") {
        items[0].classList.add("active", "come-from-left");
        items[1].classList.add("come-from-left-prev");
    } else items[0].classList.add("active");
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
    updateCarousel("next"); // Update the active class with direction
}
function prev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    const lastItem = items.pop(); // Remove the last item from the array
    items.unshift(lastItem); // Add it to the beginning of the array
    // Reorder the DOM elements to match the array order
    items.forEach((item)=>{
        carousel.appendChild(item);
    });
    updateCarousel("prev"); // Update the active class with direction
}
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
// Initial setup
updateCarousel();
// Touch event handlers
carousel.addEventListener("touchstart", handleTouchStart, false);
carousel.addEventListener("touchmove", handleTouchMove, false);
carousel.addEventListener("touchend", handleTouchEnd, false);
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}
function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}
function handleTouchEnd() {
    const deltaX = startX - endX;
    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) next();
        else prev();
    }
}
// Mouse event handlers for desktop
carousel.addEventListener("mousedown", handleMouseDown, false);
carousel.addEventListener("mousemove", handleMouseMove, false);
carousel.addEventListener("mouseup", handleMouseUp, false);
carousel.addEventListener("mouseleave", handleMouseLeave, false);
function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX;
}
function handleMouseMove(event) {
    if (isDragging) endX = event.clientX;
}
function handleMouseUp() {
    if (isDragging) handleDragEnd();
}
function handleMouseLeave() {
    if (isDragging) handleDragEnd();
}
function handleDragEnd() {
    isDragging = false;
    const deltaX = startX - endX;
    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) next();
        else prev();
    }
}
withAnimations.addEventListener("click", (e)=>{
    e.preventDefault();
    if (withAnimations.textContent === "with animations") withAnimations.textContent = "without animtions";
    else withAnimations.textContent = "with animations";
    carousel.classList.toggle("animated");
});

//# sourceMappingURL=index.8e962d96.js.map
