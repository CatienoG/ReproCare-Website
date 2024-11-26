// main.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#appointment-form");
    const messageBox = document.querySelector("#message-box");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch("http://localhost:3000/api/appointments", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                if (result.success) {
                    messageBox.textContent = "Appointment booked successfully!";
                    messageBox.style.color = "green";
                } else {
                    messageBox.textContent = "Error booking appointment.";
                    messageBox.style.color = "red";
                }
            } catch (error) {
                console.error("Error:", error);
                messageBox.textContent = "Failed to connect to the server.";
                messageBox.style.color = "red";
            }
        });
    }
});
