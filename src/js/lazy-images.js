const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("lazyload")) {
                    loadThenDisplayImage(entry.target);
                }
            }
        })
    },
    {
        root: null,
        rootMargin: "500px",
        threshold: 0.1,
    }
);

const loadThenDisplayImage = (imageElem) => {
    observer.unobserve(imageElem);

    const fullImageSrc = imageElem.getAttribute('data-src');
    const tempImage = document.createElement('img');

    tempImage.onload = () => {
        imageElem.src = fullImageSrc;
        imageElem.classList.remove("lazyload");
        imageElem.classList.add("lazyloaded");
    };

    tempImage.src = fullImageSrc;
};

document.querySelectorAll("img.lazyload").forEach(elem => {
    observer.observe(elem);
});
