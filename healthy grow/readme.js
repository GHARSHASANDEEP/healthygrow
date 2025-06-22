document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        const fullContent = button.previousElementSibling.nextElementSibling;
        const summary = button.previousElementSibling;

        // Toggle visibility of the full content
        if (fullContent.style.display === 'none' || fullContent.style.display === '') {
            fullContent.style.display = 'block';
            summary.style.display = 'none';  // Hide the summary
            button.textContent = 'Read Less';  // Change text to "Read Less"
        } else {
            fullContent.style.display = 'none';
            summary.style.display = 'block';  // Show the summary again
            button.textContent = 'Read More';  // Change text back to "Read More"
        }
    });
});
