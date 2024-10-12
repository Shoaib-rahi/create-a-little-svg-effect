let path = "M 20 100 Q 600 100 1350 100";
let finalPath = "M 20 100 Q 600 100 1350 100";

let string  = document.querySelector("#string");
string.addEventListener("mousemove",(dets) => {

path = `M 20 100 Q ${dets.x} ${dets.y} 1350 100`

    gsap.to("svg path",{
        attr:{d:path},
       
    })
})

string.addEventListener("mouseleave",(dets) => {
      gsap.to("svg path",{
        attr:{d:finalPath},
        ease: "elastic.out(1,0.1)",
     
      })
})