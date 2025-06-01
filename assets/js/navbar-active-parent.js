document.addEventListener('DOMContentLoaded', function() {
  // Add a small delay to ensure Quarto has finished rendering
  setTimeout(function() {
    // Find all active dropdown items (more inclusive selector)
    const activeDropdownItems = document.querySelectorAll('.dropdown-menu a.active, .dropdown-menu .nav-link.active');

    console.log('Found active dropdown items:', activeDropdownItems.length);

    activeDropdownItems.forEach(function(item) {
      // Find the parent dropdown toggle and add an active-parent class
      const parentDropdown = item.closest('.nav-item.dropdown');
      if (parentDropdown) {
        const dropdownToggle = parentDropdown.querySelector('.nav-link.dropdown-toggle');
        if (dropdownToggle) {
          console.log('Adding active-parent class to:', dropdownToggle.textContent.trim());
          dropdownToggle.classList.add('active-parent');
        }
      }
    });
  }, 100); // Small delay of 100ms
});
