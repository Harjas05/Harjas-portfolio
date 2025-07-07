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
    const scrollY = window.scrollY; 
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercent = scrollY / maxScrollHeight; 

    thetextPath.setAttribute('startOffset', `${scrollPercent * 100}%`); 
})
// })<script type="text/javascript" src="new.js"></script>