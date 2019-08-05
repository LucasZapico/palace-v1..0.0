const sideNav = document.getElementById('sidenav');
console.log(sideNav)
const hamMenu = sideNav.firstElementChild;
console.log(hamMenu)
hamMenu.addEventListener("click", e => {
  console.log('click')
  if(sideNav.classList.contains("hide")){
    sideNav.classList.remove("hide");
    sideNav.classList.add("show");
  }else {
    sideNav.classList.add("hide");
    sideNav.classList.remove("show");
  }
})



