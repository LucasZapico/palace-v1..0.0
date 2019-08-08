const sideNav = document.querySelector('.sidenav-wrap');
const toggle = document.getElementById('toggle')


toggle.addEventListener("click", e => {
  console.log('click')
  if(sideNav.classList.contains("show")){
    sideNav.classList.remove("show");
    toggle.classList.add("open");
  }else {
    sideNav.classList.add("show");
    toggle.classList.remove("open");
  }
})



