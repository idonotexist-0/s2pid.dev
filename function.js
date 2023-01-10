// Get the header element
const header = document.querySelector('#header');
const header_a = document.querySelector('#header_a');

// Listen for the scroll event on the window object
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPos = window.scrollY;

  // If the scroll position is greater than 56, set the header's background color to #333 with 80% opacity
  if (scrollPos > 56) {
    header.style.backgroundColor = 'rgba(22, 27, 34, 0.8)';
    header_a.style.backgroundColor = 'rgba(48, 57, 68, 0.4)';
  } else {
    // Otherwise, set the header's background color to transparent
    header.style.backgroundColor = 'rgba(22, 27, 34, 1)';
    header_a.style.backgroundColor = 'rgba(48, 57, 68, 1)';
  }
});