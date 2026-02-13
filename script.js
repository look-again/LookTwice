// LookTwice — tiny JS: nav state + marquee duplication + optional newsletter stub

(function () {
  const nav = document.querySelector(".nav");
  const hero = document.querySelector(".hero");

  function onScroll() {
    if (!nav) return;
    const y = window.scrollY || 0;
    nav.classList.toggle("scrolled", y > (hero ? hero.offsetHeight - 80 : 120));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Marquee: duplicate content so animation loops cleanly
  const track = document.querySelector(".marquee-track");
  if (track && !track.dataset.duped) {
    track.dataset.duped = "true";
    track.innerHTML = track.innerHTML + track.innerHTML;
  }

  // Newsletter: placeholder (replace with Buttondown/Mailchimp form action later)
  const form = document.querySelector("[data-newsletter]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Newsletter hookup next—this is a placeholder.");
    });
  }
})();
