document.addEventListener("DOMContentLoaded", ()=>{
    const solutionsItem = document.querySelector(".Solutions");
    const dropdownMenu = solutionsItem.querySelector(".dropdown-menu");
    const overlay = document.getElementById("overlay");
    const solutionslink = document.querySelector(".Solutions-link");
    const solutionslinkarrow = document.querySelector(".Solutions-arrow");
    const navigation = document.querySelector(".navigation");
    const dropdownItem = document.querySelectorAll(".dropdown--item");
    solutionsItem.addEventListener("mouseenter", ()=>{
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        solutionslink.style.color = "#fff";
        solutionslinkarrow.style.fill = "#fff";
    // on hold for add a overlay for the navigation
    // navigation.classList.add('onhoveronsolutions')
    });
    solutionsItem.addEventListener("mouseleave", ()=>{
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        solutionslink.style.color = "inherit";
        solutionslinkarrow.style.fill = "#000";
    // on hold for add a overlay for the navigation
    // navigation.classList.remove('onhoveronsolutions')
    });
    dropdownItem.forEach((el)=>{
        el.addEventListener("mouseenter", ()=>{
            dropdownMenu.classList.add("wide-dropdownMenu");
        });
    });
    dropdownMenu.addEventListener("mouseleave", ()=>{
        dropdownMenu.classList.remove("wide-dropdownMenu");
    });
});
// workProcess sections 
document.addEventListener("DOMContentLoaded", function() {
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();
    // GSAP animation for fading in and scaling up
    const fadeInAnimation = gsap.fromTo("#work-process", {
        opacity: 0,
        y: 50
    }, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "sine.out"
    });
    // GSAP animation for fading out and moving up
    const fadeOutAnimation = gsap.to("#work-process", {
        duration: 0.2,
        opacity: 0,
        y: -50,
        ease: "sine.out"
    });
    // Create ScrollMagic Scene for fading in
    new ScrollMagic.Scene({
        triggerElement: "#work-process",
        triggerHook: 0.11 // Trigger when 25% of the element is visible
    }).setTween(fadeInAnimation).addTo(controller);
    // Create ScrollMagic Scene for fading out
    new ScrollMagic.Scene({
        triggerElement: "#work-process",
        triggerHook: 0.50,
        offset: document.querySelector("#work-process").offsetHeight // Offset to ensure the trigger happens at the bottom of the element
    }).setTween(fadeOutAnimation).addTo(controller);
    // Intersection Observer for background and text color changes
    const sections = document.querySelectorAll(".st1, .st2, .st3, .st4, .work-process__title_con");
    const workProcess = document.getElementById("work-process");
    const workProcessBackground = document.querySelector(".work-process__background");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("work-process__title_con")) workProcess.style.backgroundColor = "#F7F7F7"; // Use solid color
                else if (entry.target.classList.contains("st1")) {
                    workProcess.style.backgroundColor = "#000"; // Use solid color
                    workProcess.style.color = "#E2E5E4";
                } else if (entry.target.classList.contains("st2")) {
                    workProcess.style.backgroundColor = "#183D3D"; // Use solid color
                    workProcess.style.color = "#E2E5E4";
                    workProcessBackground.style.opacity = "0";
                    workProcessBackground.style.display = "none";
                } else if (entry.target.classList.contains("st3")) {
                    workProcess.style.backgroundColor = "#ffffff"; // Use solid color
                    workProcess.style.color = "#000";
                } else if (entry.target.classList.contains("st4")) {
                    workProcess.style.backgroundColor = "#ffffff"; // Use solid color
                    workProcess.style.color = "#000";
                    workProcessBackground.style.display = "block";
                    setTimeout(()=>{
                        workProcessBackground.style.opacity = "1";
                    }, 100);
                }
                entry.target.style.opacity = "1";
            } else // Reset animation when out of view
            entry.target.style.opacity = "0";
        });
    }, {
        root: null,
        threshold: 0.3 // Adjust the threshold as needed
    });
    sections.forEach((section)=>{
        observer.observe(section);
    });
    // Handle line color and height
    const lines = document.querySelectorAll(".line");
    const handleScroll = ()=>{
        const windowHeight = window.innerHeight;
        const lineHeight = 1584; // 70rem in pixels
        const speedFactor = 0.5; // Adjust this value to slow down the line height growth
        lines.forEach((line)=>{
            const rect = line.getBoundingClientRect();
            const startColor = line.dataset.colorStart;
            const endColor = line.dataset.colorEnd;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const visibleHeight = Math.min(windowHeight - rect.top, lineHeight);
                const adjustedHeight = visibleHeight * speedFactor; // Adjust the visible height by the speed factor
                const newHeight = adjustedHeight / lineHeight * lineHeight;
                line.style.height = `${newHeight}px`;
                const progress = visibleHeight / lineHeight;
                line.style.backgroundColor = interpolateColor(startColor, endColor, progress);
            } else {
                line.style.height = "0";
                line.style.backgroundColor = startColor;
            }
        });
    };
    const interpolateColor = (color1, color2, factor)=>{
        const result = color1.slice(1).match(/.{2}/g).map((c, i)=>{
            const value = Math.round(parseInt(c, 16) * (1 - factor) + parseInt(color2.slice(1).match(/.{2}/g)[i], 16) * factor);
            return value.toString(16).padStart(2, "0");
        }).join("");
        return `#${result}`;
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check on page load
    // Create animations for descriptions
    function createAnimations(section) {
        const leftPs = section.querySelectorAll(".work-process__decription--left");
        const rightPs = section.querySelectorAll(".work-process__decription--right");
        if (leftPs.length === 0 || rightPs.length === 0) {
            console.warn("No left or right p elements found in the section.");
            return;
        }
        leftPs.forEach((leftP, index)=>{
            const rightP = rightPs[index];
            if (rightP) {
                // Animation for left p element
                const leftPAnimationIn = gsap.fromTo(leftP, {
                    opacity: 0,
                    x: -100
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5
                });
                const leftPAnimationOut = gsap.to(leftP, {
                    opacity: 0,
                    x: -100,
                    duration: 0.5
                });
                // Animation for right p element
                const rightPAnimationIn = gsap.fromTo(rightP, {
                    opacity: 0,
                    x: 100
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5
                });
                const rightPAnimationOut = gsap.to(rightP, {
                    opacity: 0,
                    x: 100,
                    duration: 0.5
                });
                // Create ScrollMagic Scene for left p element
                new ScrollMagic.Scene({
                    triggerElement: section,
                    triggerHook: 0.5,
                    duration: section.offsetHeight
                }).setTween(leftPAnimationIn).on("enter", ()=>{
                    rightPAnimationOut.play();
                }).on("leave", ()=>{
                    leftPAnimationOut.play();
                }).addTo(controller);
                // Create ScrollMagic Scene for right p element
                new ScrollMagic.Scene({
                    triggerElement: section,
                    triggerHook: 0.5,
                    duration: section.offsetHeight
                }).setTween(rightPAnimationIn).on("enter", ()=>{
                    leftPAnimationOut.play();
                }).on("leave", ()=>{
                    rightPAnimationOut.play();
                }).addTo(controller);
            }
        });
    }
    // Apply animations to each section
    const sectionsToAnimate = document.querySelectorAll(".st1, .st2, .st3, .st4");
    sectionsToAnimate.forEach(createAnimations);
});

//# sourceMappingURL=index.6d26770c.js.map
