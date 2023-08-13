// navbar
const navmenu = document.getElementById("nav-menu"),
  navtoggle = document.getElementById("nav-toggle"),
  navclose = document.getElementById("nav-close");

if (navtoggle) {
  navtoggle.addEventListener("click", () => {
    navmenu.classList.add("show-menu");
  });
}
if (navclose) {
  navclose.addEventListener("click", () => {
    navmenu.classList.remove("show-menu");
  });
}

const navlink = document.querySelectorAll(".nav__link");

const linkaction = () => {
  const navmenu = document.getElementById("nav-menu");
  navmenu.classList.remove("show-menu");
};
navlink.forEach((n) => n.addEventListener("click", linkaction));

// swiper
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

// Email
const contactForm = document.getElementById("contact-form");
contactName = document.getElementById("contact-name");
contactEmail = document.getElementById("contact-email");
contactProject = document.getElementById("contact-project");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    // Add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    // show message
    contactMessage.textContent = "Write all the inputs fields ";
  } else {
    // servicesID, templateID, #form , publicKey
    emailjs
      .sendForm(
        "service_czqm6ag",
        "template_pbdur8y",
        "#contact-form",
        "O4FcsEy79C4Sp6pO8"
      )
      .then(
        () => {
          // show msg and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent";
          //  remove msg after five seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! Something went wrong..", error);
        }
      );
  }
};
contactForm.addEventListener("submit", sendEmail);

// scroll sections active link
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    sectionTop = current.offsetTop - 58;
    sectionId = current.getAttribute("id");
    sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// dark-light theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// activate/detactivate theme
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// change background header
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".home__data, .projects__container, .footer__container ");
sr.reveal(".home__info div", { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(".skills__content:nth-child(1), .contact__content:nth-child(1)", {
  origin: "left",
});
sr.reveal(".skills__content:nth-child(2), .contact__content:nth-child(2)", {
  origin: "right",
});
sr.reveal(".qualification__container", {
  delay: 600,
  origin: "top",
  distance: "200px",
  interval: 100,
});
sr.reveal(".services__card", { origin: "top", interval: 100 });
