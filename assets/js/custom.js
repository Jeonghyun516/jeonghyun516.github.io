// Aurora/glass theme interactions: scroll reveal, typing roles, card spotlight,
// navbar glass on scroll, avatar tilt. Everything degrades gracefully without JS.
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // Typing effect for hero roles
  const typed = document.querySelector(".typed[data-words]");
  if (typed && !reduceMotion) {
    const words = typed.dataset.words.split("|").filter(Boolean);
    let w = 0;
    let i = words[0].length;
    let deleting = true;
    const tick = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      typed.textContent = word.slice(0, i);
      let delay = deleting ? 40 : 75;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 2200;
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      setTimeout(tick, delay);
    };
    if (words.length > 1) setTimeout(tick, 2400);
  }

  // Pointer-follow spotlight on glass surfaces
  const surfaces = document.querySelectorAll(".glass, .card, .publications ol.bibliography > li");
  surfaces.forEach((el) => {
    el.classList.add("spotlight");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // Navbar turns to glass once the page scrolls
  const nav = document.getElementById("navbar");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Subtle 3D tilt on the avatar
  const tilt = document.querySelector(".tilt");
  if (tilt && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    const box = tilt.parentElement;
    box.addEventListener("pointermove", (e) => {
      const r = box.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    });
    box.addEventListener("pointerleave", () => {
      tilt.style.transform = "";
    });
  }
})();
