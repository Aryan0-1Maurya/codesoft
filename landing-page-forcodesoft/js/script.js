// Helper function to calculate responsive values
const isMobile = window.innerWidth <= 768; // Define mobile breakpoints
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Loader animations
gsap.from('.loader h1', {
    x: screenWidth * 0.8, // Move h1 based on screen width
    duration: isMobile ? 4 : 2,
    opacity: 0,
    ease: 'power4.out'
}, 'start')

gsap.from('.loader h2', {
    x: -screenWidth * 0.8, // Move h2 based on screen width
    duration: isMobile ? 4 : 2,
    opacity: 0,
    ease: 'power4.out'
}, 'start')

gsap.to('.loader', {
    delay: 4,
    opacity: 0,
    display: 'none',
    duration: 1
});

// Logo animation with bounce effect
gsap.from('.logo span', {
    delay: 5,
    scale: 0,
    opacity: 0,
    duration: isMobile ? 1 : 1.5,
    ease: 'bounce.out'
})

// Responsive navigation items
gsap.from('nav ul li', {
    delay: 6,
    y: isMobile ? -150 : -250, // Adjust based on screen size
    opacity: 0,
    ease: 'elastic.out(1, 0.75)',
    stagger: .3,
    duration: isMobile ? 0.8 : 1.2
})

// Responsive title animation
gsap.from('.h1 h1', {
    delay: 7.5,
    y: isMobile ? 150 : 250,
    skewY: 20,
    rotation: isMobile ? 5 : 15,
    opacity: 0,
    ease: 'power4.out',
    stagger: .5,
    duration: isMobile ? 1 : 1.8
})

// Responsive paragraph animation
gsap.from('.content p', {
    delay: 8.2,
    y: isMobile ? -20 : -30,
    opacity: 0,
    ease: 'power2.out',
    stagger: 0.4,
    duration: isMobile ? 0.8 : 1.2
})

// Responsive button animation with rotation and scale
gsap.from('.content > a', {
    ease: 'elastic.out(1, 0.75)',
    delay: 9,
    x: screenWidth * -1,
    opacity: 0,
    rotation: 360,
    scale: 0.5,
    duration: isMobile ? 1 : 1.5
})

// Responsive social media links
gsap.from('.social ul li a', {
    ease: 'back.out(1.7)',
    delay: 9.5,
    y: isMobile ? 150 : 250,
    opacity: 0,
    stagger: 0.4,
    scale: isMobile ? 0.9 : 0.8,
    duration: isMobile ? 1 : 1.5
})

// Responsive image section animations
gsap.from('.one', {
    delay: 11,
    x: screenWidth * 1,
    opacity: 0,
    ease: 'power4.inOut',
    duration: isMobile ? 1 : 1.5
})

gsap.from('.two', {
    delay: 11.3,
    y: isMobile ? -80 : -100,
    opacity: 0,
    ease: 'power4.inOut',
    duration: isMobile ? 1 : 1.5
})

gsap.from('.three', {
    delay: 11.6,
    y: isMobile ? 80 : 100,
    opacity: 0,
    ease: 'power4.inOut',
    duration: isMobile ? 1 : 1.5
})

// Background image animations with responsive timing
gsap.to('.one .bg', {
    ease: 'power4.out',
    delay: 13,
    height: '0%',
    opacity: 0.7,
    duration: isMobile ? 1 : 1.5
})

gsap.from('.one img', {
    delay: 13.2,
    scale: isMobile ? 1.2 : 1.5,
    rotation: 360,
    ease: 'back.out(1.7)',
    duration: isMobile ? 1 : 1.5
})

gsap.to('.two .bg2', {
    ease: 'power4.out',
    delay: 13,
    height: '0%',
    opacity: 0.7,
    duration: isMobile ? 1 : 1.5
})

gsap.from('.two img', {
    delay: 13.2,
    scale: isMobile ? 1.2 : 1.5,
    rotation: -360,
    ease: 'back.out(1.7)',
    duration: isMobile ? 1 : 1.5
})

gsap.to('.three .bg3', {
    ease: 'power4.out',
    delay: 13,
    height: '0%',
    opacity: 0.7,
    duration: isMobile ? 1 : 1.5
})

gsap.from('.three img', {
    delay: 13.2,
    scale: isMobile ? 1.2 : 1.5,
    rotation: 360,
    ease: 'back.out(1.7)',
    duration: isMobile ? 1 : 1.5
})

// Background color transition for responsiveness
gsap.to('body', {
    backgroundColor: isMobile ? '#e0e0e0' : '#f0f0f0',
    duration: 5,
    delay: 12,
    ease: 'none'
});
