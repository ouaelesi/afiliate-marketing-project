var blue_color ="#2aa9df", light_color ="#f7f7f7";
window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // document.getElementById('mynav').style.backgroundColor="rgba(0,0,100,0.7)"
      document.getElementById("mynav").style.boxShadow = "1px 0px 5px 0px rgba(0,0,0,0.3)";
      document.getElementById("mynav").style.height = "70px";
     
    } else {
      document.getElementById("mynav").style.boxShadow = "0px 0px 0px 0px black";
      document.getElementById("mynav").style.height = "80px";
      document.getElementById("mynav").style.backgroundColor = "white";
  
    }
  }
  function animniches(x) {
    if (window.screen.width > 700) {
      x.children[0].style.opacity = "1";
      x.children[1].style.opacity = "1";
      x.children[0].style.transform = "translate(0%,-50%)";
      x.children[1].style.transform = "translate(-100%,-50%)";
    }
  }
  
  function scrollFunction2(){
    if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230){
      document.getElementById("tab-content").classList.add('sticky-tabcontent')
    }
    else{
      document.getElementById("tab-content").classList.remove('sticky-tabcontent');
    }
  }

  function display_terminaluse(x){
    x.style.backgroundColor=blue_color; 
    document.getElementById("desk-btn").style.backgroundColor=light_color;
    document.getElementById("terminal-use").classList.remove("d-none");
    document.getElementById("desktop-use").classList.add('d-none');
  }
  function display_desktopuse(x){
    x.style.backgroundColor=blue_color; 
    document.getElementById("terminal-btn").style.backgroundColor=light_color;
    document.getElementById("terminal-use").classList.add("d-none");
    document.getElementById("desktop-use").classList.remove('d-none');
  }