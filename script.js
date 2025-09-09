document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all good, simulate form submission success
  alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');

  // Clear the form
  this.reset();
});
