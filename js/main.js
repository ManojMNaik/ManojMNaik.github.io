// SpaceX Nano Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initPage();
    
    // Add event listeners
    addEventListeners();
    
    // Create particle effects
    createParticles();
    
    // Initialize About section effects
    initAboutSection();
    
    // Initialize Projects section
    initProjectsSection();
    
    // Initialize skills section
    initSkillsSection();
    initSkillProgressBars();
    
    // Initialize Contact section
    initContactSection();
});

// Initialize the page with animations and effects
function initPage() {
    // Add fade-in animation to main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = 0;
        setTimeout(() => {
            mainContent.style.transition = 'opacity 1s ease';
            mainContent.style.opacity = 1;
        }, 300);
    }
    
    // Initialize active navigation link
    updateActiveNavLink();
    
    // Create stars dynamically
    createStars();
}

// Add event listeners for various interactions
function addEventListeners() {
    // Navigation link click handler
    const navLinks = document.querySelectorAll('#sidebar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for hash links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Update active navigation
                    updateActiveNavLink(targetId);
                    
                    // Update URL without reload
                    history.pushState(null, null, `#${targetId}`);
                }
            }
        });
    });
    
    // Scroll event for updating active navigation
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
    });
    
    // Create hover effect for buttons
    const buttons = document.querySelectorAll('a.px-6');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('scale-105');
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('scale-105');
        });
    });
}

// Update the active navigation link based on scroll position
function updateActiveNavLink(forcedActiveId = null) {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    if (forcedActiveId) {
        // If an ID is forced (clicked navigation)
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const linkTargetId = link.getAttribute('href').substring(1);
            
            if (linkTargetId === forcedActiveId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        return;
    }
    
    // Determine based on scroll position
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 100; // Offset for better UX
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        const linkTargetId = link.getAttribute('href').substring(1);
        
        if (linkTargetId === currentSectionId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Create dynamic star background
function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 50;
    
    // Create shooting stars occasionally
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar(starsContainer);
        }
    }, 2000);
}

// Create a shooting star animation
function createShootingStar(container) {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    
    // Random position and angle
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 400;
    const angle = Math.random() * 45;
    
    shootingStar.style.left = `${startX}px`;
    shootingStar.style.top = `${startY}px`;
    shootingStar.style.transform = `rotate(${angle}deg)`;
    
    container.appendChild(shootingStar);
    
    // Remove after animation
    setTimeout(() => {
        container.removeChild(shootingStar);
    }, 1000);
}

// Create floating tech particles
function createParticles() {
    const techParticlesContainer = document.querySelector('.tech-particles');
    if (!techParticlesContainer) return;
    
    const particleCount = 5;
    const technologies = [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 
        'Tailwind', 'Git', 'Python', 'TypeScript', 'GraphQL'
    ];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('tech-particle');
        
        // Select random technology
        const techIndex = Math.floor(Math.random() * technologies.length);
        particle.textContent = technologies[techIndex];
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        techParticlesContainer.appendChild(particle);
    }
}

// Initialize the About section with special effects
function initAboutSection() {
    // Add hover effect to tech badges
    const techBadges = document.querySelectorAll('.tech-badges span');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add interactive effects to data panel
    const dataPanel = document.querySelector('.data-panel');
    if (dataPanel) {
        // Add hovering effect to data items
        const dataItems = dataPanel.querySelectorAll('div');
        dataItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.text-gray-300').style.color = '#0ea5e9';
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('.text-gray-300').style.color = '';
                this.style.transform = 'translateX(0)';
            });
        });
    }
    
    // Add subtle movement to hexagons on mouse move
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.addEventListener('mousemove', function(e) {
            const hexagons = document.querySelectorAll('.hex');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            hexagons.forEach((hex, index) => {
                const offsetX = (mouseX - 0.5) * (index % 3 + 1) * 10;
                const offsetY = (mouseY - 0.5) * (index % 2 + 1) * 10;
                hex.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${hex.style.transform ? parseFloat(hex.style.transform.split('scale(')[1]) : 1})`;
            });
        });
    }
}

// Initialize the Projects section with carousel and rocket navigation
function initProjectsSection() {
    // Get elements
    const projectsSlider = document.querySelector('.projects-slider');
    const navPoints = document.querySelectorAll('.nav-point');
    const prevButton = document.getElementById('prevProject');
    const nextButton = document.getElementById('nextProject');
    const rocket = document.getElementById('rocketNav');
    
    // Current slide index
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.project-slide').length;
    
    // Initialize the active navigation point
    updateNavPoints();
    
    // Function to update active navigation points
    function updateNavPoints() {
        navPoints.forEach((point, index) => {
            if (index === currentSlide) {
                point.classList.add('active');
            } else {
                point.classList.remove('active');
            }
        });
    }
    
    // Function to update rocket position
    function updateRocketPosition() {
        // Calculate position based on the track width
        const rocketTrack = document.querySelector('.rocket-track');
        const trackWidth = rocketTrack.offsetWidth - 30; // Adjust for rocket width
        const position = (currentSlide / (totalSlides - 1)) * trackWidth;
        
        rocket.style.transform = `translateX(${position}px)`;
        
        // Extra animation for the rocket
        rocket.querySelector('i').style.transform = 'rotate(90deg) scale(1.2)';
        setTimeout(() => {
            rocket.querySelector('i').style.transform = 'rotate(90deg) scale(1)';
        }, 300);
    }
    
    // Function to go to a specific slide
    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        
        currentSlide = index;
        const offset = -(currentSlide * 100);
        projectsSlider.style.transform = `translateX(${offset}%)`;
        
        updateNavPoints();
        updateRocketPosition();
    }
    
    // Event listeners for navigation points
    navPoints.forEach((point, index) => {
        point.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Event listeners for prev/next buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });
    }
    
    // Initialize the rocket position
    updateRocketPosition();
    
    // Add hover effect to project images
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 30px rgba(14, 165, 233, 0.2)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Keyboard navigation for projects
    document.addEventListener('keydown', (e) => {
        if (isElementInViewport(document.querySelector('#projects'))) {
            if (e.key === 'ArrowLeft') {
                goToSlide(currentSlide - 1);
            } else if (e.key === 'ArrowRight') {
                goToSlide(currentSlide + 1);
            }
        }
    });
}

// Utility function to check if an element is in the viewport
function isElementInViewport(el) {
    if (!el) return false;
    
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Detect intersection to trigger animations
window.addEventListener('load', function() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.classList.add('animate-in');
        });
    }
});

// Add some futuristic console branding
console.log('%c 🚀 SpaceX Nano Portfolio', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%c Exploring the digital universe', 'color: #8b5cf6; font-size: 14px;');

// Skills Section - Floating Tech Icons
function initSkillsSection() {
    const techIconsContainer = document.querySelector('.tech-icons-container');
    if (!techIconsContainer) return;
    
    // Array of tech icons with their names and colors
    const technologies = [
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'Sass', icon: 'fab fa-sass', color: '#CC6699' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
        { name: 'R', icon: 'fab fa-r-project', color: '#276DC3' },
        { name: 'Database', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'TensorFlow', icon: 'fas fa-brain', color: '#FF6F00' },
        { name: 'Analytics', icon: 'fas fa-chart-bar', color: '#4285F4' }
    ];
    
    // Create and append tech icons
    technologies.forEach((tech, index) => {
        createTechIcon(tech, index, techIconsContainer);
    });
    
    // Add animation delay for staggered start
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
        const delay = Math.random() * 5; // Random delay between 0-5 seconds
        icon.style.animationDelay = `${delay}s`;
    });
}

function createTechIcon(tech, index, container) {
    const techIcon = document.createElement('div');
    techIcon.className = 'tech-icon';
    
    // Set size (different sizes for variety)
    const size = 40 + Math.random() * 20; // Random size between 40-60px
    techIcon.style.width = `${size}px`;
    techIcon.style.height = `${size}px`;
    
    // Set icon and name
    techIcon.innerHTML = `
        <i class="${tech.icon}" style="color: ${tech.color}"></i>
        <span class="tech-icon-name">${tech.name}</span>
    `;
    
    // Set initial position (randomly distributed)
    const angle = Math.random() * Math.PI * 2; // Random angle
    const distance = 80 + Math.random() * 120; // Random distance from center (80-200px)
    
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    
    techIcon.style.left = `calc(50% + ${offsetX}px)`;
    techIcon.style.top = `calc(50% + ${offsetY}px)`;
    
    // Set random movement pattern
    const xRange = 150 + Math.random() * 100;
    const yRange = 100 + Math.random() * 80;
    
    techIcon.style.setProperty('--random-x-1', `${Math.random() * xRange - xRange/2}px`);
    techIcon.style.setProperty('--random-y-1', `${Math.random() * yRange - yRange/2}px`);
    techIcon.style.setProperty('--random-x-2', `${Math.random() * xRange - xRange/2}px`);
    techIcon.style.setProperty('--random-y-2', `${Math.random() * yRange - yRange/2}px`);
    techIcon.style.setProperty('--random-x-3', `${Math.random() * xRange - xRange/2}px`);
    techIcon.style.setProperty('--random-y-3', `${Math.random() * yRange - yRange/2}px`);
    
    // Set animation duration (different durations for variety)
    const duration = 15 + Math.random() * 20; // Random duration between 15-35s
    techIcon.style.animationDuration = `${duration}s`;
    
    container.appendChild(techIcon);
}

// Initialize skill progress bars with animation
function initSkillProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'progress-fill 1.5s ease-in-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize Contact Section
function initContactSection() {
    // Form focus effects
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(control => {
        const input = control.querySelector('input, textarea');
        const highlight = control.querySelector('.form-highlight');
        
        if (input && highlight) {
            // Initial check for pre-filled inputs
            if (input.value.trim() !== '') {
                highlight.style.width = '100%';
            }
            
            // Input events
            input.addEventListener('focus', function() {
                highlight.style.width = '100%';
            });
            
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    highlight.style.width = '0';
                }
            });
            
            // Keep highlight if input has value
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    highlight.style.width = '100%';
                } else {
                    highlight.style.width = '0';
                }
            });
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const successMessage = formStatus?.querySelector('.success-message');
    const errorMessage = formStatus?.querySelector('.error-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Simple validation
            if (name.value.trim() === '') {
                highlightError(name);
                isValid = false;
            }
            
            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                highlightError(email);
                isValid = false;
            }
            
            if (message.value.trim() === '') {
                highlightError(message);
                isValid = false;
            }
            
            if (!isValid) {
                showErrorMessage('Please fill in all required fields correctly.');
                return;
            }
            
            // Simulate form submission (replace with actual AJAX call)
            const formButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = formButton.innerHTML;
            
            formButton.disabled = true;
            formButton.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Transmitting...</span>
            `;
            
            // Simulate delay for transmission effect
            setTimeout(() => {
                // 90% chance of success (for demo purposes)
                const isSuccess = Math.random() < 0.9;
                
                if (isSuccess) {
                    showSuccessMessage('Message transmitted successfully! We\'ll respond within 24-48 hours.');
                    contactForm.reset();
                    
                    // Reset all highlights
                    document.querySelectorAll('.form-highlight').forEach(highlight => {
                        highlight.style.width = '0';
                    });
                } else {
                    showErrorMessage('Transmission failed. Please try again or contact through alternative channels.');
                }
                
                formButton.disabled = false;
                formButton.innerHTML = originalButtonText;
            }, 2000);
        });
    }
    
    // Contact section decorations
    initContactDecorations();
}

// Helper functions for contact form
function highlightError(inputElement) {
    const controlElement = inputElement.closest('.form-control');
    
    if (controlElement) {
        inputElement.classList.add('border-red-500');
        controlElement.classList.add('shake-animation');
        
        // Remove animation class after it completes
        setTimeout(() => {
            controlElement.classList.remove('shake-animation');
        }, 500);
        
        // Remove error highlight on input
        inputElement.addEventListener('input', function onInput() {
            inputElement.classList.remove('border-red-500');
            inputElement.removeEventListener('input', onInput);
        });
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showSuccessMessage(message) {
    const formStatus = document.getElementById('formStatus');
    const successMessage = formStatus?.querySelector('.success-message');
    const errorMessage = formStatus?.querySelector('.error-message');
    
    if (formStatus && successMessage && errorMessage) {
        formStatus.classList.remove('hidden');
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        
        const messageSpan = successMessage.querySelector('span');
        if (messageSpan) {
            messageSpan.textContent = message;
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    }
}

function showErrorMessage(message) {
    const formStatus = document.getElementById('formStatus');
    const successMessage = formStatus?.querySelector('.success-message');
    const errorMessage = formStatus?.querySelector('.error-message');
    
    if (formStatus && successMessage && errorMessage) {
        formStatus.classList.remove('hidden');
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        const messageSpan = errorMessage.querySelector('span');
        if (messageSpan) {
            messageSpan.textContent = message;
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    }
}

// Initialize contact section decorations
function initContactDecorations() {
    // Orbital decoration dot
    const orbitDot = document.querySelector('.orbit-dot');
    
    if (orbitDot) {
        // Set initial position
        updateOrbitDotPosition();
        
        // Update position periodically
        setInterval(updateOrbitDotPosition, 100);
    }
    
    // Add scan line animation
    const contactScanLine = document.querySelector('.contact-scan-line');
    if (contactScanLine) {
        // Start scan animation immediately
        startScanAnimation(contactScanLine);
        
        // Repeat periodically
        setInterval(() => {
            startScanAnimation(contactScanLine);
        }, 4000);
    }
}

function updateOrbitDotPosition() {
    const orbitDot = document.querySelector('.orbit-dot');
    if (!orbitDot) return;
    
    // Orbit radius in pixels
    const radius = 35;
    
    // Current angle based on animation
    const now = Date.now();
    const angle = (now / 1000) % (Math.PI * 2);
    
    // Calculate position
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    orbitDot.style.transform = `translate(${x}px, ${y}px)`;
}

function startScanAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = 'contact-scan 3s ease-in-out';
} 