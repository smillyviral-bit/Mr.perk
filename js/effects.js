const logo = document.querySelector(".brand-mark");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    logo.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});
