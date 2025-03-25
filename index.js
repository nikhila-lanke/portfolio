document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent! I’ll get back to you soon.");
    this.reset();
});
