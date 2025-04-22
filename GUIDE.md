# SpaceX Nano Portfolio Guide

This guide will help you run, customize, and extend your SpaceX Nano sci-fi themed portfolio.

## Getting Started

1. Open the `index.html` file in your web browser to view the portfolio locally
2. No server is required to run this portfolio as it uses plain HTML, CSS and JavaScript

## Customization Guide

### Change Personal Information

Edit the `index.html` file to update:

- Your name and job title in the hero section
- The description text in the hero section
- Update social media links in the sidebar

### Update Colors and Theme

The color scheme is based on a SpaceX nano sci-fi theme. To modify:

1. Open `css/style.css`
2. Look for the `:root` section at the top
3. Change the color variables to customize the entire theme:
   ```css
   :root {
       --primary: #0ea5e9;      /* Main blue color */
       --primary-dark: #0284c7; /* Darker blue */
       --secondary: #8b5cf6;    /* Purple accent */
       --dark: #0f172a;         /* Dark background */
       --darker: #020617;       /* Darker background */
       --light: #e2e8f0;        /* Light text */
       --accent: #06b6d4;       /* Cyan accent */
   }
   ```

### Add or Modify Sections

The current version includes the home page with a hero section. To add more sections:

1. Add new section HTML to the `index.html` file inside the `<main>` element
2. Use the same structure as the existing home section:
   ```html
   <section id="your-section-name" class="min-h-screen flex items-center py-20">
       <div class="container mx-auto px-6 relative z-10">
           <!-- Your section content -->
       </div>
   </section>
   ```
3. Update the sidebar navigation to include your new section

### Customize the Astronaut

The astronaut developer image is an SVG that can be customized:

1. Open `img/astronaut-dev.svg` in a code editor or SVG editor
2. Modify colors, sizes or animations as needed
3. Alternatively, replace with your own image in the `index.html` file

### Add More Animations

To add more animations:

1. Define new animation keyframes in the `css/style.css` file
2. Apply animations to elements using the `animation` property
3. For scroll-based animations, use the `animate-on-scroll` class and the JavaScript will handle the rest

## Technical Overview

- **HTML Structure**: Clean, semantic HTML with Tailwind utility classes
- **CSS**: Custom styling with animations and effects
- **JavaScript**: Vanilla JS for interactive elements and animations
- **Responsiveness**: Mobile-first approach using Tailwind's responsive utilities

## Adding Projects

To showcase your projects, add a projects section with cards for each project:

```html
<section id="projects" class="min-h-screen flex items-center py-20">
    <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-12">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project Card -->
            <div class="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg overflow-hidden border border-blue-500/30 transform transition-all hover:scale-105 hover:shadow-neon-blue">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-blue-400">Project Name</h3>
                    <p class="text-gray-300 mt-2">Project description goes here. Explain what the project does and technologies used.</p>
                    <div class="flex mt-4 space-x-2">
                        <span class="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-md">HTML</span>
                        <span class="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-md">CSS</span>
                        <span class="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-md">JavaScript</span>
                    </div>
                    <div class="mt-6 flex space-x-4">
                        <a href="#" class="text-blue-400 hover:text-blue-300 transition-all">
                            <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                        </a>
                        <a href="#" class="text-blue-400 hover:text-blue-300 transition-all">
                            <i class="fab fa-github mr-1"></i> Source Code
                        </a>
                    </div>
                </div>
            </div>
            <!-- Repeat for more projects -->
        </div>
    </div>
</section>
```

## Questions and Support

For any questions or support:

1. Refer to the documentation of the technologies used (HTML, CSS, JavaScript, Tailwind CSS)
2. Check online resources for web development guidance
3. Experiment and have fun customizing your portfolio!

## License

This portfolio template is free to use and modify for your personal portfolio. 