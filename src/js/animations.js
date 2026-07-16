import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  initDomeReveal();
}

function initDomeReveal() {
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero__bg img');
  const heroContent = document.querySelector('.hero__content');
  const domeWrapper = document.querySelector('.dome-content-wrapper');

  if (!hero || !domeWrapper) return;

  // 1. Pin the hero section
  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top", // keeps hero pinned while scrolling past it
    pin: true,
    pinSpacing: false, // allows domeWrapper to scroll up and overlap it
  });

  // 2. Parallax and Fade for Hero Text
  // The user requested: moves up with 30-50% scroll speed (parallax) 
  // and fades out completely before being intersected by the dome.
  if (heroContent) {
    gsap.to(heroContent, {
      y: -250, // parallax speed approx 30% of scroll height
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: domeWrapper,
        start: "top bottom", // when dome starts entering from bottom
        end: "top 20%",      // completes fade out before the dome physically hits the text
        scrub: true,
      }
    });
  }

  // 3. Parallax for Hero Background
  if (heroBg) {
    gsap.to(heroBg, {
      y: 150, // subtle move down for parallax
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: domeWrapper,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    });
  }

  // 4. Venetian Dome Reveal (Clip Path Animation)
  // Optimized for mobile with vw units.
  // Start: curved dome
  // End: flat top
  gsap.fromTo(domeWrapper, 
    {
      clipPath: "inset(0% 0% 0% 0% round 50vw 50vw 0px 0px / 15vw 15vw 0px 0px)"
    },
    {
      clipPath: "inset(0% 0% 0% 0% round 0vw 0vw 0px 0px / 0vw 0vw 0px 0px)",
      ease: "none",
      scrollTrigger: {
        trigger: domeWrapper,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    }
  );
}
