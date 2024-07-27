// form Code
const form = document.getElementById("multiStepForm");
const nextButton = form.querySelector(".next");
const backButton = form.querySelector(".back");
const progressBarSteps = document.querySelectorAll(".progress-bar__step");
const formSteps = document.querySelectorAll(".form-step");
let currentStep = 0;
const showStep = (step)=>{
    formSteps.forEach((formStep, index)=>{
        formStep.classList.remove("form-step--active");
        if (index === step) formStep.classList.add("form-step--active");
        if (currentStep < 1) {
            backButton.style.opacity = "0";
            backButton.style.visibility = "hidden";
        } else if (currentStep >= 1) {
            backButton.style.opacity = "1";
            backButton.style.visibility = "visible";
        }
    });
    progressBarSteps.forEach((progressStep, index)=>{
        progressStep.classList.remove("progress-bar__step--active");
        if (index <= step) progressStep.classList.add("progress-bar__step--active");
    });
};
const validateStep = (step)=>{
    const inputs = formSteps[step].querySelectorAll("input[required]");
    let valid = true;
    inputs.forEach((input)=>{
        if (!input.value) {
            input.classList.add("error");
            valid = false;
        } else input.classList.remove("error");
    });
    return valid;
};
const animateStepTransition = (direction)=>{
    gsap.to(formSteps[currentStep], {
        duration: 0.5,
        x: direction === "next" ? "-100%" : "100%",
        opacity: 0,
        onComplete: ()=>{
            currentStep += direction === "next" ? 1 : -1;
            showStep(currentStep);
            gsap.fromTo(formSteps[currentStep], {
                x: direction === "next" ? "100%" : "-100%",
                opacity: 0
            }, {
                duration: 0.5,
                x: "0%",
                opacity: 1
            });
        }
    });
};
nextButton.addEventListener("click", ()=>{
    if (validateStep(currentStep)) animateStepTransition("next");
    if (currentStep === 2) nextButton.textContent = "Send";
});
backButton.addEventListener("click", ()=>{
    animateStepTransition("back");
    if (currentStep <= 3) nextButton.textContent = "Next";
});
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (validateStep(currentStep)) // Handle form submission
    alert("Form submitted!");
});
showStep(currentStep);
const questions = [
    {
        title: "Get Started",
        content: "Connect with our specialists today for personalized support"
    },
    {
        title: "Product Recommendations",
        content: "Looking for the best security camera for your home or business? Our experts can recommend the perfect solution"
    },
    {
        title: "Installation Assistance",
        content: "Need help installing your new security system? Our team is here to provide step-by-step guidance"
    },
    {
        title: "Technical Support",
        content: "Having trouble with your security system? Our technical support team is ready to assist you with any issues"
    },
    {
        title: "Upgrade Consultation",
        content: "Considering an upgrade to your current security system? We can help you choose the best options available"
    },
    {
        title: "Warranty and Repairs",
        content: "Questions about warranties or need a repair? Our customer service team is here to help you with all your concerns"
    },
    {
        title: "Remote Monitoring Setup",
        content: "Interested in setting up remote monitoring for your security cameras? Let us guide you through the process"
    },
    {
        title: "Custom Security Solutions",
        content: "Need a customized security solution for your business or home? We offer tailored security systems to meet your specific needs"
    },
    {
        title: "System Optimization",
        content: "Want to optimize your current security system for better performance? Our experts can provide tips and adjustments"
    },
    {
        title: "Security Assessment",
        content: "Looking for a comprehensive security assessment for your property? Our team can evaluate and recommend improvements"
    }
];
let currentQuestionIndex = 0;
let typingInterval;
let changeTimeout;
let startTimeout;
const titleElement = document.querySelector(".q-title");
const contentWrapperElement = document.querySelector(".q-content-wrapper");
const contentElement = document.querySelector(".q-content");
const cursorElement = document.querySelector(".cursor");
function showTitle(title) {
    titleElement.textContent = title;
    titleElement.style.animation = "fadeInUp 1s forwards";
    titleElement.style.opacity = 1;
}
function showContent(content) {
    let charIndex = 0;
    contentElement.textContent = "";
    typingInterval = setInterval(()=>{
        if (charIndex < content.length) {
            contentElement.textContent += content[charIndex];
            charIndex++;
            adjustCursorPosition();
        } else {
            clearInterval(typingInterval);
            changeTimeout = setTimeout(()=>{
                changeQuestion();
            }, 2400); // Wait before changing to the next question
        }
    }, 57); // Adjust typing speed 
    contentWrapperElement.style.opacity = 1;
}
function showCursor() {
    cursorElement.style.opacity = 1;
}
function hideCursor() {
    cursorElement.style.opacity = 0;
}
function adjustCursorPosition() {
    const lastChar = contentElement.textContent.slice(-1);
    const span = document.createElement("span");
    span.textContent = lastChar;
    contentElement.appendChild(span);
    const rect = span.getBoundingClientRect();
    const parentRect = contentElement.getBoundingClientRect();
    cursorElement.style.left = `${rect.right - parentRect.left + window.scrollX}px`;
    span.remove();
}
function changeQuestion() {
    titleElement.style.animation = "fadeOutUp 0.5s forwards";
    contentWrapperElement.style.animation = "fadeOutUp 0.5s forwards";
    cursorElement.style.animation = "fadeOutUp 0.5s forwards";
    setTimeout(()=>{
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        // Reset opacity
        titleElement.style.opacity = 0;
        contentWrapperElement.style.opacity = 0;
        cursorElement.style.opacity = 0;
        // Reset animation
        titleElement.style.animation = "";
        contentWrapperElement.style.animation = "";
        cursorElement.style.animation = "";
        // Show new question
        showTitle(questions[currentQuestionIndex].title);
        setTimeout(()=>{
            showContent(questions[currentQuestionIndex].content);
            showCursor();
        }, 1000); // Delay to match the animation
    }, 1000); // Wait for fade out to complete
}
function start() {
    showTitle(questions[currentQuestionIndex].title);
    startTimeout = setTimeout(()=>{
        showContent(questions[currentQuestionIndex].content);
        showCursor();
    }, 1000); // Initial delay to match the title animation
}
function reset() {
    currentQuestionIndex = 0;
    clearInterval(typingInterval);
    clearTimeout(changeTimeout);
    clearTimeout(startTimeout);
    titleElement.style.opacity = 0;
    contentWrapperElement.style.opacity = 0;
    cursorElement.style.opacity = 0;
    titleElement.style.animation = "";
    contentWrapperElement.style.animation = "";
    cursorElement.style.animation = "";
}
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            reset();
            start();
        } else reset();
    });
});
const qElement = document.querySelector(".q");
observer.observe(qElement);
document.addEventListener("DOMContentLoaded", ()=>{
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();
    // Create a scene to change the background color of the body
    const bgColorScene = new ScrollMagic.Scene({
        triggerElement: ".form-page",
        triggerHook: 0.1,
        duration: "100%" // Maintain the background color change throughout the form-page
    }).on("enter", ()=>{
        gsap.to(document.body, {
            backgroundColor: "#1e0000",
            duration: 0.5
        });
    }).on("leave", ()=>{
        gsap.to(document.body, {
            backgroundColor: "#fff",
            duration: 0.5
        });
    }).addTo(controller);
    // Create a scene to animate the form popping up
    const formScene = new ScrollMagic.Scene({
        triggerElement: ".form-page",
        triggerHook: 0.5
    }).setTween(gsap.to(".form-page-container", {
        opacity: 1,
        scale: 1,
        duration: 0.2
    })).addTo(controller);
});
////////////////////////
////////////////////////
////////////////////////
////////////////////////
/////map////
document.addEventListener("DOMContentLoaded", ()=>{
    const location = [
        51.505,
        -0.09
    ]; // Replace with your desired location [latitude, longitude]
    const map = L.map("map").setView(location, 13); // Adjust zoom level as needed
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19 // Adjust max zoom level as needed
    }).addTo(map);
    const popupContent = '<a href="#" onclick="window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, `_blank`); return false;">view on Map &#129106;</a>';
    const marker = L.marker(location).addTo(map).bindPopup(popupContent, {
        className: "custom-popup"
    }).openPopup();
    marker.on("click", function() {
        window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, "_blank");
    });
    map.on("click", function() {
        window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, "_blank");
    });
});

//# sourceMappingURL=index.f85ccfd0.js.map
