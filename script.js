const card = document.querySelectorAll(".card");

card.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    let elRect = element.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardHeight = elRect.height / 2;

    let angleY = -(x - midCardWidth) / 4;
    let angleX = (y - midCardHeight) / 4;

    let highlightX = (x / elRect.width) * 100;
    let highlightY = (y / elRect.height) * 100;

    element.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    element.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    element.children[1].style.background = `radial-gradient(
      circle at ${highlightX}% ${highlightY}%,
      rgb(184, 196, 211),
      transparent)`;
  });

  element.addEventListener("mouseleave", () => {
    element.children[0].style.transform = "rotateX(0) rotateY(0)";
    element.children[1].style.transform = "rotateX(0) rotateY(0)";
  });
});
