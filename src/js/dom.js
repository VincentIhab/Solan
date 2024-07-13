document.addEventListener("DOMContentLoaded", function () {
  const spinnerContainer = document.getElementById('spinner-container');
  const videoContainer = document.getElementById('video-container');
  const imageContainer = document.getElementById('image-container');
  const backgroundVideo = document.getElementById('background-video');
  const navbar = document.getElementById("navbar");
  const scrollThreshold = 100; // The scroll level to trigger the background change

  let videoLoaded = false;
  let initialScrollHandled = false;

  // Lazy load video
  const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              backgroundVideo.src = "../Images/istock_video_1720720257217.mp4";
              videoObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  videoObserver.observe(backgroundVideo);

  const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  };

  backgroundVideo.onloadeddata = () => {
    videoLoaded = true;
    spinnerContainer.classList.add('hidden');
    videoContainer.style.display = 'block';
    imageContainer.style.display = 'none';
    initialScrollHandled = true;
    handleScroll();
};

backgroundVideo.onerror = () => {
    spinnerContainer.classList.add('hidden');
    videoContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
    initialScrollHandled = true;
    handleScroll();
};

setTimeout(() => {
    if (!videoLoaded) {
        spinnerContainer.classList.add('hidden');
        videoContainer.style.display = 'none';
        imageContainer.style.display = 'block';
        initialScrollHandled = true;
        handleScroll();
    }
}, 10000); // 10 seconds timeout

  const timeline = gsap.timeline();
  timeline.to(".header", {
      duration: 2.5,
      x: 0,
      opacity: 1,
      ease: "power2.out",
  }, "-=0.4");

  timeline.to(".header__spans", {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.out",
  }, "-=0.4");

  timeline.to(".header__title", {
      duration: 1.1,
      x: 0,
      opacity: 1,
      ease: "power2.out",
  }, "-=0.4");

  timeline.to(".header__buttons", {
      duration: 1.1,
      x: 0,
      opacity: 1,
      ease: "power2.out",
  }, "-=0.4");

  timeline.to(".header__paragraph", {
      duration: 1.2,
      x: 0,
      opacity: 1,
      ease: "power2.out",
  }, "-=0.4");

  // Throttle the scroll event listener
  let isScrolling;
  window.addEventListener("scroll", () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
          if (initialScrollHandled) {
              handleScroll();
          }
      }, 100);
  });

  // Create an IntersectionObserver for animations
  function animateElement(entries, observer) {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target); // Stop observing after adding the class
          }
      });
  }

  const observer = new IntersectionObserver(animateElement, {
      threshold: 0.1, // Adjust as needed
  });

  document.querySelectorAll(".target").forEach((e) => {
      observer.observe(e);
  });
});
