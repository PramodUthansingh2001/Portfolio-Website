const roles = [
    "Electronics & Communication Engineer",
    "Embedded Systems Enthusiast",
    "Arduino & IoT Developer",
    "Government Exam Aspirant"
];

let roleIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typing.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 80);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 40);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 300);
    }
}

typeRole();
