window.onload = function () {
  // Responsive navigation
  const toggleNavigation = document.getElementById("toggleNav");

  if (toggleNavigation) {
    toggleNavigation.addEventListener("click", () => {
      const navElements = document.querySelector(".navigation");
      navElements.classList.toggle("display");
    });
  }

  // Form Validation

  function validateForm(e) {
    e.preventDefault();
    const name = document.forms.valForm.Name.value;
    const email = document.forms.valForm.Email.value;
    const password = document.forms.valForm.Password.value;

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const regName = /\d+$/g;

    if (name == "" || regName.test(name)) {
      window.alert("Воведете соодветно име");
      return false;
    }

    if (email == "" || !regEmail.test(email)) {
      window.alert("Воведете валидна емаил адреса.");
      return false;
    }

    if (password == "") {
      alert("Воведете лозинка");
      return false;
    }

    if (password.length < 6) {
      alert("Лозинката треба да има најмалку 6 карактери");
      return false;
    }
    return true;
  }
  const submit = document.querySelector(".submitBtn");
  submit.addEventListener("click", validateForm);

  // Tab Changer

  var tabElements = document.querySelectorAll(".tab");

  for (let tab of tabElements) {
    tab.addEventListener("click", function () {
      //  Remove Class
      for (let tab of tabElements) {
        tab.classList.remove("current");
      }
      // Add Class
      this.classList.add("current");
    });
  }

  const tab1 = document.querySelector(".tab-1");
  const tab2 = document.querySelector(".tab-2");
  const tab3 = document.querySelector(".tab-3");

  const descr1 = document.querySelector(".description1");
  const descr2 = document.querySelector(".description2");
  const descr3 = document.querySelector(".description3");

  // Change Content
  function changeContent() {
    
    if (tab1.classList.contains("current")) {
      descr1.style.display = "block";
      descr2.style.display = "none";
      descr3.style.display = "none";
    } else if (tab2.classList.contains("current")) {
      descr1.style.display = "none";
      descr2.style.display = "block";
      descr3.style.display = "none";
    } else if (tab3.classList.contains("current")) {
      descr1.style.display = "none";
      descr2.style.display = "none";
      descr3.style.display = "block";
    }
  }


// Animation on scroll
function show() {
  var whySection = document.querySelectorAll(".why-section");

  for (var i = 0; i < whySection.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = whySection[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      whySection[i].classList.add("active");
    } else {
      whySection[i].classList.remove("active");
    }
  }
}

// Functions call
  tab1.addEventListener("click", changeContent);
  tab2.addEventListener("click", changeContent);
  tab3.addEventListener("click", changeContent);
  window.addEventListener("scroll", show);
};
