document.addEventListener('DOMContentLoaded', () => {
    const solutionsSection = document.getElementById('solutions-section');
    const body = document.body;

    let isScrollingHorizontally = false;
    let enteringFromBottom = false;
    let horizontalOffset = 0;
    const horizontalSpeedFactor = 0.8; // Adjust speed factor as needed for acceleration

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.boundingClientRect.top < 0) {
                    enteringFromBottom = true;
                    solutionsSection.scrollLeft = solutionsSection.scrollWidth - solutionsSection.clientWidth;
                } else {
                    enteringFromBottom = false;
                }

                // Center the solutionsSection vertically
                const scrollToCenter = solutionsSection.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2 - solutionsSection.clientHeight / 2);
                window.scrollTo({
                    top: scrollToCenter,
                    behavior: 'smooth'
                });

                isScrollingHorizontally = true;
                body.style.overflowY = 'hidden';
                window.addEventListener('wheel', handleHorizontalScroll, { passive: false });
            } else {
                body.style.overflowY = 'auto';
                isScrollingHorizontally = false;
                window.removeEventListener('wheel', handleHorizontalScroll);
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
                body.style.overflowY = 'auto';
                isScrollingHorizontally = false;
                window.removeEventListener('wheel', handleHorizontalScroll);
            }
        } else {
            // Scrolling up/left
            if (scrollLeftCurrent > 0) {
                event.preventDefault();
                horizontalOffset += scrollAmount;
            } else {
                // Allow vertical scroll after reaching the start
                body.style.overflowY = 'auto';
                isScrollingHorizontally = false;
                window.removeEventListener('wheel', handleHorizontalScroll);
            }
        }
    }

    function smoothHorizontalScroll() {
        solutionsSection.scrollLeft += (horizontalOffset - solutionsSection.scrollLeft) * 0.11; // Increase smoothness
        requestAnimationFrame(smoothHorizontalScroll);
    }

    const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
    const height = scrollWrap.getBoundingClientRect().height - 1;
    const speed = 0.2;
    let offset = 0;
    
    body.style.height = Math.floor(height) + "px";
    
    function smoothScroll() {
        if (!isScrollingHorizontally) {
            offset += (window.scrollY - offset) * speed;
            const scroll = "translateY(-" + offset + "px) translateZ(0)";
            scrollWrap.style.transform = scroll;
        }

        requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
    smoothHorizontalScroll();
});



const classesAnimation = gsap.fromTo(
    ".classes_section",
    { x: "0" },  // Start position
    { x: "-100vw", ease: "power3.out" } // End position
  );

  // ScrollMagic Controller
  const controller = new ScrollMagic.Controller();

  // ScrollMagic Scene
  const scene = new ScrollMagic.Scene({
    triggerElement: ".classes_section", // Start animation when this element enters the viewport
    triggerHook: "onLeave", // Pin at the top of the viewport
    duration: 850 // Same duration as in ScrollTrigger
  })
    .setPin(".classes_section") // Pin the element in place
    .setTween(classesAnimation) // Attach the GSAP animation
    .addIndicators() // Debugging markers (optional)
    .addTo(controller); // Add to ScrollMagic controller
