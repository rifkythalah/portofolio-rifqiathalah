// NAVBAR
const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});

// pop up sertif lsp

document.addEventListener("click", function (e) {
  if (e.target.id === "gallery-sertiflsp") {
    const src = e.target.getAttribute("data-src");
    document.querySelector(".modal-lsp").src = src;
    const myModal = new bootstrap.Modal(document.getElementById("gallery-lsp"));
    myModal.show();
  }
});


// pop up sertif pkl

document.addEventListener("click", function (e) {
    if (e.target.id === "gallery-sertifpkl") {
      const src = e.target.getAttribute("data-src");
      document.querySelector(".modal-pkl").src = src;
      const myModal = new bootstrap.Modal(document.getElementById("gallery-pkl"));
      myModal.show();
    }
  });
  
// pop up sertif psik media

document.addEventListener("click", function (e) {
    if (e.target.id === "gallery-sertifmedia") {
      const src = e.target.getAttribute("data-src");
      document.querySelector(".modal-media").src = src;
      const myModal = new bootstrap.Modal(document.getElementById("gallery-media"));
      myModal.show();
    }
  });
  
// pop up sertif bootcamp

document.addEventListener("click", function (e) {
    if (e.target.id === "gallery-sertifbootcamp") {
      const src = e.target.getAttribute("data-src");
      document.querySelector(".modal-bootcamp").src = src;
      const myModal = new bootstrap.Modal(document.getElementById("gallery-bootcamp"));
      myModal.show();
    }
  });
  
// pop up sertif himpunan

document.addEventListener("click", function (e) {
    if (e.target.id === "gallery-sertifhimpunan") {
      const src = e.target.getAttribute("data-src");
      document.querySelector(".modal-himpunan").src = src;
      const myModal = new bootstrap.Modal(document.getElementById("gallery-himpunan"));
      myModal.show();
    }
  });
  
// pop up sertif Bem
document.addEventListener("click", function (e) {
    if (e.target.id === "gallery-sertifbem") {
      const src = e.target.getAttribute("data-src");
      document.querySelector(".modal-bem").src = src;
      const myModal = new bootstrap.Modal(document.getElementById("gallery-bem"));
      myModal.show();
    }
  });
  


