const loginBtn = document.getElementById("login-btn");
const nameInp = document.getElementById("name-input");
const passInp = document.getElementById("password-input");

const navbarSection = document.getElementById("navbar-section");
const faqSection = document.getElementById("faq-section");
//const learnSection = document.getElementById("learn-section");
const bannerSection = document.getElementById("banner-section");

loginBtn.addEventListener("click", () => {
  if (nameInp.value === "" || passInp.value === "") {
    
    Swal.fire({
      title: "Error!",
      text: "Please fill in all fields",
      icon: "error",
      confirmButtonText: "Try again",
    });

    return;
  }

  if (passInp.value != "123456") {
   
    Swal.fire({
      title: "Error!",
      text: "Wrong password",
      icon: "error",
      confirmButtonText: "Try again",
    });
    return;
  }

  Swal.fire({
    title: "Login!",
    text: "Login success",
    icon: "success",
    confirmButtonText: "Start",
  });

  navbarSection.classList.remove("hidden");
  faqSection.classList.remove("hidden");
 //learnSection.classList.remove("hidden");
  bannerSection.classList.add("hidden");
});
document.getElementById("logout-btn").addEventListener("click", () => {
    window.location.reload();
  });
  