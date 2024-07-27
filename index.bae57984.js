document.addEventListener("DOMContentLoaded", function() {
    class PageHandler {
        constructor(){
            this.loadingBar = document.getElementById("loading-bar");
            this.spinnerContainer = document.getElementById("spinner-container");
            this.videoContainer = document.getElementById("video-container");
            this.backgroundVideo = document.getElementById("background-video");
            this.navVideo = document.getElementById("navVideo");
            this.navigationButton = document.querySelector(".navigation__button");
            this.navbar = document.getElementById("navbar");
            this.navBtn = document.getElementById("btn-desk");
            this.newParent = document.getElementById("header_container");
            this.oldParent = document.getElementById("header");
            this.box2 = document.querySelector(".box2");
            this.scrollThreshold = 100;
            this.mobileVideoSrc = "mobile-Land-video.mp4";
            this.desktopVideoSrc = "video (2).mp4";
            this.navVideoSrc = "nav-cam.mp4";
            this.currentVideo = "";
            this.videoLoaded = false;
            this.scrolling = false;
            this.isFirstTime = true;
            this.init();
        }
        init() {
            this.startLoadingBar();
            this.selectVideo();
            this.navVideo.src = this.navVideoSrc;
            this.navVideo.type = "video/mp4";
            window.addEventListener("resize", this.selectVideo.bind(this));
            window.addEventListener("scroll", this.throttleScroll.bind(this));
            this.createIntersectionObserver();
            this.initIntroAnimation();
            this.initFeatureBoxVideo();
        }
        startLoadingBar() {
            let interval = setInterval(()=>{
                const images = document.images;
                let loadedImages = 0;
                for(let i = 0; i < images.length; i++)if (images[i].complete) loadedImages++;
                let progress = Math.floor(loadedImages / images.length * 100);
                this.loadingBar.style.width = progress + "%";
                this.loadingBar.style.backgroundColor = `rgb(${255 - progress * 2.55}, ${255 - progress * 2.55}, ${255 - progress * 2.55})`;
                if (progress === 100) {
                    clearInterval(interval);
                    this.loadingBar.style.width = "100%";
                    this.loadingBar.style.backgroundColor = "black";
                }
            }, 100);
        }
        selectVideo() {
            const videoElement = this.backgroundVideo;
            videoElement.muted = true;
            videoElement.playsinline = true;
            if (window.innerWidth <= 768 && this.currentVideo !== "mobile") {
                videoElement.src = this.mobileVideoSrc;
                videoElement.type = "video/mp4";
                this.videoContainer.classList.remove("bg-video--desktop");
                videoElement.classList.remove("bg-video--desktop__content_desk");
                this.videoContainer.classList.add("bg-video--mobile");
                videoElement.classList.add("bg-video--mobile__content_mobile");
                videoElement.loop = false;
                this.oldParent.insertBefore(this.videoContainer, this.oldParent.firstChild);
                this.currentVideo = "mobile";
            } else if (window.innerWidth > 768 && this.currentVideo !== "desktop") {
                videoElement.src = this.desktopVideoSrc;
                videoElement.type = "video/mp4";
                this.videoContainer.classList.remove("bg-video--mobile");
                videoElement.classList.remove("bg-video--mobile__content_mobile");
                this.videoContainer.classList.add("bg-video--desktop");
                videoElement.classList.add("bg-video--desktop__content_desk");
                this.newParent.insertBefore(this.videoContainer, this.newParent.firstChild);
                this.currentVideo = "desktop";
            }
            videoElement.onloadeddata = this.videoLoadSuccess.bind(this);
            videoElement.onerror = this.videoLoadError.bind(this);
        }
        videoLoadSuccess() {
            this.videoLoaded = true;
            this.spinnerContainer.classList.add("hidden");
            this.videoContainer.style.display = "block";
        }
        videoLoadError() {
            this.selectVideo();
        }
        throttleScroll() {
            if (!this.scrolling) {
                this.scrolling = true;
                window.requestAnimationFrame(()=>{
                    this.handleScroll();
                    this.scrolling = false;
                });
            }
        }
        handleScroll() {
            if (window.scrollY > this.scrollThreshold) {
                this.navbar.classList.add("scrolled");
                this.navBtn.classList.replace("btn-light", "btn-dark");
            } else {
                this.navbar.classList.remove("scrolled");
                this.navBtn.classList.replace("btn-dark", "btn-light");
            }
        }
        createIntersectionObserver() {
            const observer = new IntersectionObserver(this.animateElement.bind(this), {
                threshold: 0.1
            });
            const elementsToAnimate = document.querySelectorAll(".target");
            elementsToAnimate.forEach((element)=>{
                let delay = 0;
                if (element.classList.contains("box1")) delay = 0;
                else if (element.classList.contains("box2")) delay = 1000;
                else if (element.classList.contains("box3")) delay = 1000;
                else if (element.classList.contains("box4")) delay = 1000;
                element.setAttribute("data-delay", delay);
                observer.observe(element);
            });
        }
        animateElement(entries, observer) {
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute("data-delay")) || 0;
                    setTimeout(()=>{
                        const animationClass = entry.target.getAttribute("data-class");
                        entry.target.classList.add(animationClass);
                        observer.unobserve(entry.target);
                        this.box2.classList.add("box2__fadeImg");
                    }, delay);
                }
            });
        }
        initIntroAnimation() {
            const timeline = gsap.timeline();
            timeline.to(".header", {
                duration: 2.5,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__spans", {
                duration: 1,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__title", {
                duration: 1.1,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__buttons", {
                duration: 1.1,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__paragraph", {
                duration: 1.2,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4");
        }
        initFeatureBoxVideo() {
            const page2Trigger = document.querySelector(".box1");
            this.featureBoxVideoContainer = document.getElementById("feature-box");
            const videoSource = this.featureBoxVideoContainer.querySelector("source");
            let isVideoLoaded = false;
            this.isFirstTime = true;
            const loadVideo = ()=>{
                if (!videoSource.src) {
                    videoSource.src = videoSource.dataset.src;
                    this.featureBoxVideoContainer.load();
                    isVideoLoaded = true;
                }
            };
            const debounce = (func, delay)=>{
                let inDebounce;
                return function() {
                    clearTimeout(inDebounce);
                    inDebounce = setTimeout(()=>func.apply(this, arguments), delay);
                };
            };
            const handleVideoPlayback = (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        loadVideo();
                        if (this.isFirstTime && !this.isMobileDevice()) {
                            this.debouncePlayVideo();
                            this.isFirstTime = false;
                        } else if (this.isMobileDevice()) this.featureBoxVideoContainer.play();
                    } else this.featureBoxVideoContainer.pause();
                });
            };
            const observer = new IntersectionObserver(handleVideoPlayback, {
                threshold: 0.5
            });
            observer.observe(page2Trigger);
            if (!this.isMobileDevice()) {
                page2Trigger.addEventListener("mouseover", debounce(()=>{
                    this.featureBoxVideoContainer.play();
                }, 100));
                page2Trigger.addEventListener("mouseleave", debounce(()=>{
                    this.featureBoxVideoContainer.pause();
                }, 100));
            } else {
                this.featureBoxVideoContainer.loop = true;
                observer.observe(this.featureBoxVideoContainer);
            }
        }
        isMobileDevice() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        debouncePlayVideo() {
            setTimeout(()=>{
                this.featureBoxVideoContainer.play();
                setTimeout(()=>{
                    this.featureBoxVideoContainer.pause();
                }, this.featureBoxVideoContainer.duration / 2 * 1000); // Pause at half the duration
            }, 500);
        }
        debouncePauseVideo() {
            setTimeout(()=>{
                this.featureBoxVideoContainer.pause();
            }, 500);
        }
    }
    new PageHandler();
});

//# sourceMappingURL=index.bae57984.js.map
