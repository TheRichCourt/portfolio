const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("lazyloading")) {
                    loadThenDisplayImage(entry.target);
                }
            }
        })
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    }
);

const loadThenDisplayImage = (imageElem) => {
    const fullImageSrc = imageElem.getAttribute('data-src');
    const tempImage = document.createElement('img');

    tempImage.onload = () => {
        imageElem.src = fullImageSrc;
        imageElem.classList.remove("lazyloading");
        imageElem.classList.add("lazyloaded");
    };

    tempImage.src = fullImageSrc;
};

document.querySelectorAll("img.lazyloading").forEach(elem => {
    observer.observe(elem);
});
