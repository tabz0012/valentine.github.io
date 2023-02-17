import { Component,HostListener } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent{
  isShow: boolean;
topPosToStartShowing = 100;
  
@HostListener('window:scroll')
checkScroll() {
    
  // window의 scroll top
  // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  console.log('[scroll]', scrollPosition);
  
  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }
}

// TODO: Cross browsing
gotoTop() {
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
}
  ngOnInit(){



    
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
  
    function load() {
      var reveals = document.querySelectorAll(".load");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.onload = function() {
      load();
    };
}
}
