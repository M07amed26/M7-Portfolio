document.addEventListener("DOMContentLoaded", function() {
    const hireBtn = document.getElementById("hireMeBtn");
    const contactSection = document.getElementById("contact");

    if (hireBtn && contactSection) {
        hireBtn.addEventListener("click", function() {
            const offset = 70;
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    }
});

// Form: Opens email client + shows green checkmark (no alert)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contact form");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = form.querySelector("input[name='name']").value.trim();
            const email = form.querySelector("input[name='email']").value.trim();
            const message = form.querySelector("textarea[name='message']").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
            } else if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email.");
            } else {
                // Open email client
                const yourEmail = "mohamedbellabed47@gmail.com";
                const subject = `New message from ${name} (via M7 Portfolio)`;
                const body = `You received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}\n\n---\nThis email was drafted via your portfolio contact form.`;
                
                const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                window.location.href = mailtoLink;
                
                // Green checkmark message (no popup alert)
                const successMessage = document.createElement("div");
                successMessage.innerHTML = "✓ Message prepared! Check your email app to send.";
                successMessage.style.backgroundColor = "#28a745";
                successMessage.style.color = "white";
                successMessage.style.padding = "12px 20px";
                successMessage.style.borderRadius = "10px";
                successMessage.style.marginTop = "20px";
                successMessage.style.textAlign = "center";
                successMessage.style.fontWeight = "500";
                successMessage.style.borderLeft = "5px solid #155724";
                
                const oldMessage = document.querySelector(".success-message");
                if (oldMessage) oldMessage.remove();
                
                successMessage.classList.add("success-message");
                form.appendChild(successMessage);
                
                setTimeout(() => {
                    successMessage.style.opacity = "0";
                    setTimeout(() => {
                        if (successMessage.remove) successMessage.remove();
                    }, 300);
                }, 4000);
                
                form.reset();
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("#home, #about, #projects, #contact");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    function highlightActive() {
        let current = "";
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = "";
            if (link.getAttribute("href") === "#" + current) {
                link.style.color = "#ff3b3b";
            }
        });
    }
    
    window.addEventListener("scroll", highlightActive);
    highlightActive();
});

document.addEventListener("DOMContentLoaded", function() {
    const emailLink = document.querySelector("#contact p a[href^='mailto']");
    
    if (emailLink) {
        emailLink.addEventListener("click", function(e) {
            e.preventDefault();
            const email = this.textContent;
            navigator.clipboard.writeText(email);
            alert("Email copied: " + email);
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    
    if (scrollBtn) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });
        
        scrollBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});