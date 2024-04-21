function loader(){
  
  var tl = gsap.timeline()

tl.from(".loader span",{
  x:100,
  duration:1.2,
  stagger:.03,
  delay:.1
})
tl.to(".loader span",{
  x:-100,
  duration:.6,
  opacity:0,
  stagger:.03
})
tl.to('.loader',{
  duration:.5,
  opacity:0,
  display:"none"
})

}
loader()

afterloader()

//time
function time() {
    function updateLiveTime() {
    
        const currentDate = new Date();
      
        // Format the time as per your requirement
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const formattedTime = `${hours}:${minutes}`;
        const liveTimeElement = document.getElementById("live-time");
        if (liveTimeElement) {
          liveTimeElement.textContent = `MY LOCAL TIME ${formattedTime}`;
        }
      }
      
      updateLiveTime();
      setInterval(updateLiveTime, 1000);
    }
function afterloader(){
    gsap.from(".reveal", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.4, 
      ease: "power2.out",
      delay: 3.3, 
  });


 // GSAP animation with pop-up effect
 gsap.from(".logo a", { opacity: 0, y: -50, scale: 0.5, duration: 1, delay: 4.0, ease: "back.out(1.7)" });
 gsap.from(".non-vis a", { opacity: 0, y: -50, scale: 0.5, duration: 1, delay: 5, ease: "back.out(1.7)" });

 
}


 



//loader();
time();
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// // Disable right-click on the page
// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });

// // Disable text selection (works in most browsers)
// document.addEventListener('selectstart', function (e) {
//   e.preventDefault();
// });


function Music(){

// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}



}

Music();

///Menu


document.addEventListener("DOMContentLoaded", () => {
  const revealerNav = window.revealer({
    revealElementSelector: ".nav-js",
    options: {
      anchorSelector: ".nav-btn-js",
    },
  });

  const actionBtn = document.querySelector(".nav-btn-js");
  actionBtn.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      actionBtn.setAttribute("data-open", true);
    } else {
      revealerNav.hide();
      actionBtn.setAttribute("data-open", false);
    }
  });
});




// const hoverSound = document.getElementById('hoverSound');
// const menuItem = document.querySelector('.header__menu-item a');

// menuItem.addEventListener('mouseenter', () => {
//   hoverSound.play();
// });

// // Optional: Pause the sound when the mouse leaves the menu item
// menuItem.addEventListener('mouseleave', () => {
//   hoverSound.pause();
//   hoverSound.currentTime = 0; // Reset the audio to the beginning
// });


 // Get the current date
 let currentDate = new Date();

 // Update the day, month, and year
 let day = currentDate.toLocaleString('en-us', { weekday: 'short' });
 let month = currentDate.toLocaleString('en-us', { month: 'short' });
 let year = currentDate.getFullYear();

 // Update the HTML content
 document.getElementById('myDate').innerHTML = `${day} , ${currentDate.getDate()} ${month} | ${year}`;



  // GSAP ScrollTrigger effect
  gsap.to('.left-heading, .date', {
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: '.left-heading, .date',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
    }
});












// function blinkFavicon() {
//   var favicon = document.querySelector('link[rel="shortcut icon"]');
//   var isBlinking = false;
//   setInterval(function() {
//       if (isBlinking) {
//           favicon.href = 'assets/img/me.png';
//       } else {
//           favicon.href = 'assets/img/me.png';
//       }
//       isBlinking = !isBlinking;
//   }, 250); // Adjust the blinking speed as needed
// }
// // Call the blinkFavicon function to start the blinking
// blinkFavicon();

