// Get the header element
const header = document.querySelector('#header');

// Listen for the scroll event on the window object
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPos = window.scrollY;

  // If the scroll position is greater than 50, set the header's background color to #333 with 80% opacity
  if (scrollPos > 50) {
    header.style.backgroundColor = 'rgba(22, 27, 34, 0.8)';
  } else {
    // Otherwise, set the header's background color to transparent
    header.style.backgroundColor = 'rgba(22, 27, 34, 1)';
  }
});