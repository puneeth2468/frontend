document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to send message");
    });
});
document.querySelectorAll(".skill-item").forEach(skill => {
    skill.addEventListener("click", () => {
        skill.classList.toggle("active");
    });
});
