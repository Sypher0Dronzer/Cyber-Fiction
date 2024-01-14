// Get the top of the document as the starting point
const startingPoint = 0;

// Get the maximum scroll value by subtracting window height from document scroll height
const maxScrollValue = document.documentElement.scrollHeight - window.innerHeight;

// Get the user's scroll progress as a percentage
function getScrollProgress() {
  const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  return (scrollTop - startingPoint) / maxScrollValue;
}

// Display the image corresponding to the user's scroll progress
function updateImage() {
  const numberOfImages = 3; // Change this to the actual number of images
  const scrollProgress = getScrollProgress();
  const imageIndex = Math.min(numberOfImages - 1, Math.floor(scrollProgress * numberOfImages));
  
  // Hide all images
  document.querySelectorAll('img').forEach(img => img.style.display = 'none');
  
  // Display the image corresponding to the calculated index
  const selectedImage = document.querySelectorAll('img')[imageIndex];
  if (selectedImage) {
    selectedImage.style.display = 'block';
  }
}

// Update the image when the user scrolls
window.addEventListener('scroll', updateImage);

// Initial image update
updateImage();