/* <script type="text/javascript" src="movingtext.js"></script> */


var thetextPath = document.querySelector('#moving-text'); 
// var path = document.getElementById('#text-curve'); 

// function updateOffset (offset) {
//     thetextPath.setAttribute('startOffset', offset); 
// }
// updateOffset(100); 

// function onScroll() {
//     requestAnimationFrame(function() {
//         updateOffset(window.scrollY); 
//     })
// }
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // how far I've scrolled down
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercent = scrollY / maxScrollHeight; 
    
    var thetextPath = document.querySelector('#moving-text');
    var thetextPathExperience = document.querySelector('#moving-text-experience') ; 


    thetextPath.setAttribute('startOffset', `${scrollPercent * 100}%`); 
    var experienceoffset = (scrollPercent * 100) - 20; 
    
    thetextPathExperience.setAttribute('startOffset', `${experienceoffset }% `); 
})


// var thetextPathExperience = document.querySelector('#moving-text-experience'); 

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY; 
//     const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight; 
//     const scrollPercent = scrollY / maxScrollHeight; 

//     thetextPath.setAttribute('startOffset', `${scrollPercent * 100}%`); 
// })
// })<script type="text/javascript" src="new.js"></script>