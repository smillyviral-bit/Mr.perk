document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        ".section-title, section h2, .value-card, .brand-card, .project-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

});
