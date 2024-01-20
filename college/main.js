const courseBtn = document.querySelectorAll('.two-course--btn .course-btn');
const Nav = document.querySelector('.nav-section');
const bachelorCourses = document.querySelector('.bachelor-courses');
const masterCourses = document.querySelector('.master-courses');

//Toggle Navbar

const toggleBtn = document.getElementById("menu"),
    navbar = document.querySelector(".navbar");

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle("bx-x");
    navbar.classList.toggle('active');
});

window.onscroll = function () {
    this.scrollY > 50 ? Nav.classList.add('shadow') : Nav.classList.remove('shadow');
};


courseBtn.forEach(Option => {
    Option.addEventListener('click', () => {
        document.querySelector('.two-course--btn .bachelor').classList.remove('bachelor');
        Option.classList.add('bachelor');
    })
});

document.querySelector('.bachelor').addEventListener('click', () => {
    masterCourses.style.display = 'none';
    bachelorCourses.style.display = 'block';
});

document.querySelector('.master').addEventListener('click', () => {
    masterCourses.style.display = 'block';
    bachelorCourses.style.display = 'none';
});

//Typewriter JS
const dynamictext = document.querySelector(".home-content h1 span")
const word = ["Light.", "Liberty.", "Learning."];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = word[wordIndex];
    const curreChar = currentWord.substring(0, charIndex);
    dynamictext.textContent = curreChar;
    dynamictext.classList.add("stop-blink");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200)
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100)
    } else {
        isDeleting = !isDeleting;
        dynamictext.classList.remove("stop-blink")
        wordIndex = !isDeleting ? (wordIndex + 1) % word.length : wordIndex;
        setTimeout(typeEffect, 1200)
    }
}

typeEffect();

//contact javascript

function SendMail() {

    let name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        subject = document.getElementById("subject").value,
        message = document.getElementById("message").value;


    let body = "Name: " + name + "<br> Email: " + email + "<br> Subject: " + subject + "<br> Message: " + message;

    Email.send({
        // 
        SecureToken: "6443f8fb-9432-4e2d-9d90-61d75ee5904c ",
        To: 'unitedk321@gmail.com',
        From: "india62131@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => Swal.fire({
            icon: "success",
            title: "Thanks for the enquiry",
            text: "Message sent successfully....",
            confirmButtonColor: "#b62b2b",
        })
    );
}







