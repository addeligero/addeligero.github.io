const texts = ["Front-end ", "Back-end ", "Full-Stack "];
let index = 0;
let charIndex = 0;
let isTyping = true;

function typeEffect() {
  const currentText = texts[index];
  const targetElement = document.getElementById("change");

  if (isTyping) {
    targetElement.innerText += currentText[charIndex];
    charIndex++;
    if (charIndex === currentText.length) {
      // Typing complete
      isTyping = false;
      setTimeout(typeEffect, 1300);
    } else {
      setTimeout(typeEffect, 50);
    }
  } else {
    const displayedText = targetElement.innerText;
    targetElement.innerText = displayedText.slice(0, -1);
    if (displayedText.length === 0) {
      // Finished deleting
      isTyping = true;
      charIndex = 0;
      index = (index + 1) % texts.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 50);
    }
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

/*for viewing in profile */
function toggleSections(showElementId, hideElementIds) {
  hideElementIds.forEach((id) => {
    document.getElementById(id).classList.add("d-none");
  });
  document.getElementById(showElementId).classList.replace("d-none", "d-block");
}

function updateUnderline(activeElementId, allElementIds) {
  allElementIds.forEach((id) => {
    document.getElementById(id).classList.remove("underline");
  });
  document.getElementById(activeElementId).classList.add("underline");
}

document.getElementById("certs").addEventListener("click", () => {
  toggleSections("certs_info", ["skills_info", "exp_info"]);
  updateUnderline("certs", ["skills", "exp", "certs"]);
});

document.getElementById("skills").addEventListener("click", () => {
  toggleSections("skills_info", ["certs_info", "exp_info"]);
  updateUnderline("skills", ["skills", "exp", "certs"]);
});

document.getElementById("exp").addEventListener("click", () => {
  toggleSections("exp_info", ["skills_info", "certs_info"]);
  updateUnderline("exp", ["skills", "exp", "certs"]);
});

/* endfor viewing in profile */

/*for md animation */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));
/*for md naanimationvs */

/**For links */

function updateUnderline(activeElementId, allElementIds) {
  allElementIds.forEach((id) => {
    document.getElementById(id).classList.remove("noderline");
  });
  document.getElementById(activeElementId).classList.add("noderline");
}

document.getElementById("link2").addEventListener("click", () => {
  updateUnderline("link2", ["link3", "link1", "link2", "link4"]);
});

document.getElementById("link1").addEventListener("click", () => {
  updateUnderline("link1", ["link1", "link2", "link3", "link4"]);
});

document.getElementById("link3").addEventListener("click", () => {
  updateUnderline("link3", ["link3", "link2", "link1", "link4"]);
});
document.getElementById("link4").addEventListener("click", () => {
  updateUnderline("link4", ["link4", "link3", "link2", "link1"]);
});

/** for navs but the same functions*/
function updateUnderline2(activeElementId, allElementIds) {
  allElementIds.forEach((id) => {
    document.getElementById(id).classList.remove("underline3", "tbg");
  });
  document.getElementById(activeElementId).classList.add("underline3", "tbg");
}
document.getElementById("nav0").addEventListener("click", () => {
  updateUnderline2("nav0", ["nav0", "nav1", "nav2", "nav3"]);
});

document.getElementById("nav1").addEventListener("click", () => {
  updateUnderline2("nav1", ["nav0", "nav1", "nav2", "nav3"]);
});

document.getElementById("nav2").addEventListener("click", () => {
  updateUnderline2("nav2", ["nav0", "nav1", "nav2", "nav3"]);
});
document.getElementById("nav3").addEventListener("click", () => {
  updateUnderline2("nav3", ["nav0", "nav1", "nav2", "nav3"]);
});

/**For links */
/**For preload */
$(window).on("load", () => {
  $(".loader-wrapper").fadeOut("slow");
});
/**For preload */
