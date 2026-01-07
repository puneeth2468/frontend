const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  responseMsg.textContent = "Sending...";
  responseMsg.style.color = "white";

  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://formspree.io/f/abcdwxyz",
      {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      }
    );

    const result = await response.json();

    if (response.ok) {
      responseMsg.textContent = "✅ Message sent successfully!";
      responseMsg.style.color = "lightgreen";
      form.reset();
    } else {
      responseMsg.textContent = "❌ " + result.error;
      responseMsg.style.color = "red";
    }

  } catch (error) {
    responseMsg.textContent = "❌ Failed to send message. Try again.";
    responseMsg.style.color = "red";
  }
});
