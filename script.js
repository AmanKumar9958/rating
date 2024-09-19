document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
});