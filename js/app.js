let navList = document.querySelector("nav .nav_list");
let navToggles = document.querySelectorAll("nav .nav_toggle");
let navLinks = document.querySelectorAll("nav .nav_list a");
let skillHeaders = document.querySelectorAll(".skills .skill_header");
let servicesModalTriggers=document.querySelectorAll('.services .service_container button.service_modal-trigger')
let servicesModalDismisses=document.querySelectorAll('.services .service_modal .service_modal-dismiss')

navToggles.forEach((navToggle) => {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});

skillHeaders.forEach((skillHeader) => {
  skillHeader.addEventListener("click", () => {
    skillHeader.parentElement.classList.toggle("open");
  });
});
servicesModalTriggers.forEach((servicesModalTrigger)=>{
    servicesModalTrigger.addEventListener('click',(e)=>{
        document.body.style.overflow="hidden"
        e.target.parentElement.nextElementSibling.classList.add('visible')
    })
})
servicesModalDismisses.forEach((servicesModalDismiss)=>{
    servicesModalDismiss.addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.classList.remove('visible')
        document.body.style.overflow="initial"
    })
})
