document.addEventListener("DOMContentLoaded", ()=>{
    const solutionsSection = document.getElementById("solutions-section");
    const body = document.body;
    let isScrollingHorizontally = false;
    let enteringFromBottom = false;
    let horizontalOffset = 0;
    const horizontalSpeedFactor = 0.8; // Adjust speed factor as needed for acceleration
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                if (entry.boundingClientRect.top < 0) {
                    enteringFromBottom = true;
                    solutionsSection.scrollLeft = solutionsSection.scrollWidth - solutionsSection.clientWidth;
                } else enteringFromBottom = false;
                // Center the solutionsSection vertically
                const scrollToCenter = solutionsSection.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2 - solutionsSection.clientHeight / 2);
                window.scrollTo({
                    top: scrollToCenter,
                    behavior: "smooth"
                });
                isScrollingHorizontally = true;
                body.style.overflowY = "hidden";
                window.addEventListener("wheel", handleHorizontalScroll, {
                    passive: false
                });
            } else {
                if (enteringFromBottom && solutionsSection.scrollLeft === 0) {
                    // Allow vertical scroll after reaching the start when entering from the bottom
                    body.style.overflowY = "auto";
                    isScrollingHorizontally = false;
                } else if (!enteringFromBottom) body.style.overflowY = "auto";
                window.removeEventListener("wheel", handleHorizontalScroll);
            }
        });
    }, {
        threshold: 0.7
    });
    observer.observe(solutionsSection);
    function handleHorizontalScroll(event) {
        if (!isScrollingHorizontally || event.deltaY === 0) return;
        const scrollLeftMax = solutionsSection.scrollWidth - solutionsSection.clientWidth;
        const scrollLeftCurrent = solutionsSection.scrollLeft;
        const scrollAmount = event.deltaY * horizontalSpeedFactor;
        if (event.deltaY > 0) {
            // Scrolling down/right
            if (scrollLeftCurrent < scrollLeftMax) {
                event.preventDefault();
                horizontalOffset += scrollAmount;
            } else {
                // Allow vertical scroll after reaching the end
                body.style.overflowY = "auto";
                isScrollingHorizontally = false;
                window.removeEventListener("wheel", handleHorizontalScroll);
            }
        } else // Scrolling up/left
        if (scrollLeftCurrent > 0) {
            event.preventDefault();
            horizontalOffset += scrollAmount;
        } else {
            // Allow vertical scroll after reaching the start
            body.style.overflowY = "auto";
            isScrollingHorizontally = false;
            window.removeEventListener("wheel", handleHorizontalScroll);
        }
    }
    function smoothHorizontalScroll() {
        solutionsSection.scrollLeft += (horizontalOffset - solutionsSection.scrollLeft) * 0.05; // Increase smoothness
        requestAnimationFrame(smoothHorizontalScroll);
    }
    const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
    const height = scrollWrap.getBoundingClientRect().height - 1;
    const speed = 0.01;
    let offset = 0;
    body.style.height = Math.floor(height) + "px";
    function smoothScroll() {
        let lastYOffset = 0;
        if (!isScrollingHorizontally) {
            offset += (window.scrollY - offset) * speed;
            const scroll = "translateY(-" + offset + "px) translateZ(0)";
            scrollWrap.style.transform = scroll;
        } else lastYOffset = window.scrollY;
        requestAnimationFrame(smoothScroll);
    }
    smoothScroll();
    smoothHorizontalScroll();
});

//# sourceMappingURL=index.8e962d96.js.map
