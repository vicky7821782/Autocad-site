const syllabusData = [
  {
    title: "2D Basics",
    items: [
      "Introduction of AutoCAD. Drafting / Designing / Drawing.",
      "Fundamentals Principal, Application Of AutoCAD.",
      "AutoCAD screen overview, file operations (open/save/close).",
      "Common Commands: Line, Ray, Erase, Units, Zoom, Pan, etc.",
      "Display tools: UCS Icon, Line type, Color, LTscale."
    ]
  },
  {
    title: "Working with Coordinates",
    items: [
      "Different methods of specifying points",
      "WCS vs UCS",
      "Absolute / Relative / Polar coordinates",
      "Point picking with mouse",
      "Practice: Simple exercises"
    ]
  },
  {
    title: "Modify Tools",
    items: [
      "Commands: Copy, Move, Mirror, Rotate, Scale, Stretch",
      "Trim, Extend, Lengthen, Offset, Polyline, Pedit",
      "Practice: Lab Assignments"
    ]
  },
  {
    title: "Drawing Tools",
    items: [
      "Circle, Arc, Rectangle, Polygon, Ellipse",
      "Hatch, Gradient, Region, Solid, Donut",
      "Text (single/multiline), Spell check, Text Style"
    ]
  },
  {
    title: "Advanced 2D",
    items: [
      "Layers, Match Properties, Attedit",
      "Dimensions and Styles, Format Units",
      "Blocks, Wblock, Insert Symbols, Design Center",
      "Multiline, Multiline Styles"
    ]
  },
  {
    title: "Layouts and Output",
    items: [
      "Layouts: A4–A0 Setup, Plotting, Sheet Manager",
      "Model space vs Paper space",
      "Display Preview, Scale Settings",
      "Import/Export, Display Images"
    ]
  },
  {
    title: "3D Modeling",
    items: [
      "Introduction to 3D, Solids vs Surfaces",
      "Creating Primitives: Box, Sphere, Cone, etc.",
      "Solid Editing: Union, Subtract, Intersect",
      "Face Editing: Move, Offset, Taper, Shell"
    ]
  },
  {
    title: "3D Operations & Rendering",
    items: [
      "Slice, Section, Interference, 3D Mirror, Rotate, Align",
      "Render Tools: Materials, Fog, Lighting, Scenes",
      "Surfaces: 3D Face, Mesh, Revolved Surface, Ruled Surface"
    ]
  }
];

const track = document.getElementById("carousel-track");

syllabusData.forEach(section => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = section.title;

  const ul = document.createElement("ul");
  section.items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  card.appendChild(title);
  card.appendChild(ul);
  track.appendChild(card);
});

let currentIndex = 0;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < syllabusData.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Scroll animation for 'Why Join Us' cards
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

featureCards.forEach(card => observer.observe(card));

// Smooth scrolling for navigation links
document.querySelectorAll('header nav .nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        // Ensure targetId is a valid selector (e.g., "#some-id" and not just "#")
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault(); // Prevent default anchor jump
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Aligns the top of the target element to the top of the viewport
                    });
                }
            } catch (error) {
                console.error("Error finding element for scroll or invalid selector:", targetId, error);
            }
        }
    });
});
