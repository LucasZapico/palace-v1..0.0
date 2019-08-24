window.onload = function () {
  const sideNav = document.getElementById("sidenav")
  // collapse all but top level side nav elements 
  // sideNavMvp()
  function sideNavMvp(){
    const sideNav = document.getElementById("sidenav")
    const sideMenu = sideNav.firstElementChild;
    console.log(sideMenu)
    console.log(sideMenu.children)
    console.log(sideMenu.children.length)
    var menuArr = Array.from(sideMenu.children)
    menuArr.forEach(function(el){
      // <ion-icon name="arrow-dropdown"></ion-icon>
      var icon = document.createElement("ion-icon")
      icon.setAttribute('name','arrow-dropdown')
      icon.addEventListener("click", function(e){     
        showDropdown(el)   
      })
      el.insertBefore(icon, el.lastElementChild)
      console.log(el.lastElementChild)
      el.lastElementChild.classList.add('hide')
    })

    function showDropdown(el){
      if( el.lastElementChild.classList.contains('hide')){
        el.lastElementChild.classList.remove('hide')
      }else {
        el.lastElementChild.classList.add('hide')
      }
    }

  } 
  
  // toggle sidenav 
  toggleSideNav()
  function toggleSideNav(){
    const toggle = document.getElementById("toggle")
    toggle.addEventListener("click",function(e){
      if(sideNav.classList.contains('hidden')){
        sideNav.classList.remove('hidden')
      }else {
        sideNav.classList.add('hidden')
      }
    })
  }
  // show a limited number of child elements under each sidenav
  function dynamicSideNav() {
    
    const sideMenu = sideNav.firstElementChild;
    console.log(sideMenu)
    console.log(sideMenu.children)
    console.log(sideMenu.children.length)
    var menuArr = Array.from(sideMenu.children)
    menuArr.forEach(function (el) {
      var nextMenu = el.lastElementChild
      Array.from(nextMenu.children).forEach(function (elm, i) {
        console.log(elm, i)
        if (i > 4) {
          elm.classList.add('hide')
        }

      })
      console.log(el.lastElementChild.childElementCount)
    })
  }

}