let open = [];

document.querySelectorAll("#gifts .card").forEach(card => {
  card.addEventListener("click", () => {
    if (open.length === 2 || card.classList.contains("open") || open.includes(card)) return;

    card.classList.add("open");
    open.push(card);

    if (open.length === 2) {
      const img1 = open[0].querySelector("img").src;
      const img2 = open[1].querySelector("img").src;

      if (img1 !== img2) {
        setTimeout(() => {
          open[0].classList.remove("open");
          open[1].classList.remove("open");
          open = [];
        }, 1000);
      } else {
        open = [];
      }
    }
  });
});
