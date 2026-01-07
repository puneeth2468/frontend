const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    responseMsg.textContent = "Sending...";
    responseMsg.style.color = "black";

    const formData = new FormData(form);

    try {
        const response = await fetch(
            "https://formspree.io/f/YOUR_FORM_ID",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (response.ok) {
            responseMsg.textContent = "✅ Message sent successfully!";
            responseMsg.style.color = "green";
            form.reset();
        } else {
            responseMsg.textContent = "❌ Failed to send message. Try again.";
            responseMsg.style.color = "red";
        }

    } catch (error) {
        responseMsg.textContent = "❌ Network error. Please try later.";
        responseMsg.style.color = "red";
    }
});
