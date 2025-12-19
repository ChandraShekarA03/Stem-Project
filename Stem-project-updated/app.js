document.addEventListener('DOMContentLoaded',function(){
  // Simple slideshow: rotate .slide elements
  const slides = Array.from(document.querySelectorAll('.slide'));
  let idx = 0;
  if(slides.length){
    slides[idx].classList.add('active');
    setInterval(()=>{
      slides[idx].classList.remove('active');
      idx = (idx+1) % slides.length;
      slides[idx].classList.add('active');
    },4500);
  }
  // Automatically mark many common content elements as revealable so the whole page animates on scroll
  const autoSelectors = ['.reveal', '.card-fade', '.animate-card', 'main h2', 'main h3', 'main h4', 'main p', '.feature', '.service-card', '.cards-row', '.grid', '.contact', '.site-footer', '.brand'];
  const revealElements = Array.from(new Set([].concat(...autoSelectors.map(s=>Array.from(document.querySelectorAll(s))))));
  const doReveal = (el)=>{
    const d = parseInt(el.getAttribute('data-delay')||0,10);
    // set a small transition delay for staggering
    el.style.transitionDelay = (d/1000) + 's';
    // special-case spin-in to use animation
    if(el.classList.contains('spin-in')){
      // add 'in' class to trigger keyframe
      el.classList.add('in');
    } else {
      el.classList.add('in');
    }
  };

  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          // small stagger: if element already has data-delay use it, otherwise compute based on index
          if(!entry.target.hasAttribute('data-delay')){
            const idx = revealElements.indexOf(entry.target);
            entry.target.setAttribute('data-delay', Math.min(300, idx * 60));
          }
          doReveal(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },{threshold:0.12});
    revealElements.forEach(el=>observer.observe(el));
  } else {
    revealElements.forEach(doReveal);
  }

  // === Cursor ripple + hover enhancements ===
  // Add listeners so ripple originates from cursor and hover adds stronger visual state
  const interactiveCards = document.querySelectorAll('.card, .feature, .service-card');
  interactiveCards.forEach(el=>{
    // ensure CSS vars exist
    el.style.setProperty('--ripple-x','50%');
    el.style.setProperty('--ripple-y','50%');

    const onEnter = (ev)=>{
      el.classList.add('hovered');
      // position ripple at cursor
      const rect = el.getBoundingClientRect();
      const x = (ev.clientX - rect.left) + 'px';
      const y = (ev.clientY - rect.top) + 'px';
      el.style.setProperty('--ripple-x', x);
      el.style.setProperty('--ripple-y', y);
      // trigger ripple animation by toggling .ripple
      el.classList.remove('ripple');
      // force reflow to restart animation
      void el.offsetWidth;
      el.classList.add('ripple');
    };

    const onMove = (ev)=>{
      const rect = el.getBoundingClientRect();
      const x = (ev.clientX - rect.left) + 'px';
      const y = (ev.clientY - rect.top) + 'px';
      el.style.setProperty('--ripple-x', x);
      el.style.setProperty('--ripple-y', y);
    };

    const onLeave = ()=>{
      el.classList.remove('hovered');
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    // touch support: trigger ripple on touchstart
    el.addEventListener('touchstart', (ev)=>{
      const t = ev.touches && ev.touches[0];
      if(t){
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--ripple-x', (t.clientX - rect.left) + 'px');
        el.style.setProperty('--ripple-y', (t.clientY - rect.top) + 'px');
      }
      el.classList.add('hovered');
      el.classList.remove('ripple'); void el.offsetWidth; el.classList.add('ripple');
    },{passive:true});
  });
});
