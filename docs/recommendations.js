(() => {
  const section = document.querySelector(".recommendations");
  if (!section) return;

  const reviews = [...section.querySelectorAll("[data-recommendation]")];
  const dots = [...section.querySelectorAll("[data-review-dot]")];
  const count = section.querySelector(".review-count");
  const previous = section.querySelector("[data-review-prev]");
  const next = section.querySelector("[data-review-next]");
  let active = 0;
  let timer;

  const show = (index) => {
    active = (index + reviews.length) % reviews.length;
    reviews.forEach((review, reviewIndex) => {
      const isActive = reviewIndex === active;
      review.hidden = !isActive;
      review.classList.toggle("is-active", isActive);
      review.setAttribute("aria-hidden", String(!isActive));
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === active;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
    count.textContent = `(${String(active + 1).padStart(2, "0")} / ${String(reviews.length).padStart(2, "0")})`;
  };

  const stop = () => window.clearInterval(timer);
  const start = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    timer = window.setInterval(() => show(active + 1), 8500);
  };

  previous.addEventListener("click", () => { show(active - 1); start(); });
  next.addEventListener("click", () => { show(active + 1); start(); });
  dots.forEach((dot, index) => dot.addEventListener("click", () => { show(index); start(); }));
  section.addEventListener("mouseenter", stop);
  section.addEventListener("mouseleave", start);
  section.addEventListener("focusin", stop);
  section.addEventListener("focusout", start);
  start();
})();
