const carousel = document.querySelector(".carousel");
const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let lastActiveItem = items[0]; // Keep track of the last active item
function updateCarousel() {
    const isMobile = window.innerWidth <= 768;
    items.forEach((item, index)=>{
        item.classList.remove("active", "prev", "next");
        if (isMobile) {
            if (index === Math.floor(items.length / 2)) {
                item.classList.add("active");
                lastActiveItem = item; // Update the last active item
            }
        } else {
            if (index === 0) {
                item.classList.add("active");
                lastActiveItem = item; // Update the last active item
            } else if (index === 1) item.classList.add("next");
            else if (index === items.length - 1) item.classList.add("prev");
        }
    });
}
function next() {
    const firstItem = items.shift();
    items.push(firstItem);
    updateCarousel();
    // Trigger reflow for animation
    carousel.offsetWidth;
    carousel.classList.add("transition-next");
    setTimeout(()=>{
        carousel.classList.remove("transition-next");
    }, 1000); // Should match the transition duration in CSS
}
function prev() {
    const lastItem = items.pop();
    items.unshift(lastItem);
    updateCarousel();
    // Trigger reflow for animation
    carousel.offsetWidth;
    carousel.classList.add("transition-prev");
    setTimeout(()=>{
        carousel.classList.remove("transition-prev");
    }, 1000); // Should match the transition duration in CSS
}
function handleMouseEnter(event) {
    if (window.innerWidth > 768) {
        items.forEach((item)=>item.classList.remove("active"));
        event.currentTarget.classList.add("active");
    }
}
items.forEach((item)=>{
    item.addEventListener("mouseenter", handleMouseEnter);
});
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
// Initial setup
updateCarousel();
// Handle window resize to update carousel layout
window.addEventListener("resize", updateCarousel);

//# sourceMappingURL=index.8e962d96.js.map
