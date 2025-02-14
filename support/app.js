document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
   
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.textContent = "Thank you for your feedback!";
    thankYouMessage.style.display = "block";

   
    document.getElementById("feedbackForm").reset();
});