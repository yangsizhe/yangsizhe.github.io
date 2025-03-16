document.addEventListener('DOMContentLoaded', function() {
  // Button to show/hide additional demos
  const showMoreButton = document.getElementById('show-more-demos');
  const additionalDemos = document.getElementById('additional-demos');
  
  if (showMoreButton && additionalDemos) {
    showMoreButton.addEventListener('click', function() {
      const isHidden = additionalDemos.style.display === 'none';
      
      // Toggle visibility
      additionalDemos.style.display = isHidden ? 'flex' : 'none';
      
      // Update button text and icon
      const buttonText = showMoreButton.querySelector('span:first-child');
      const buttonIcon = showMoreButton.querySelector('.fas');
      
      if (isHidden) {
        buttonText.innerHTML = '<strong>Hide Demos</strong>';
        buttonIcon.classList.remove('fa-chevron-down');
        buttonIcon.classList.add('fa-chevron-up');
      } else {
        buttonText.innerHTML = '<strong>Show More Demos</strong>';
        buttonIcon.classList.remove('fa-chevron-up');
        buttonIcon.classList.add('fa-chevron-down');
      }
    });
  }
});
