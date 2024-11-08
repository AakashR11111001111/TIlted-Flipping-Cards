var box = document.querySelector(".box");
const rect = box.getBoundingClientRect();

box.addEventListener("mousemove",(e)=>{

    //isse pta lgega ki hmara mouse box k kitna andr h ((mouse ki position corr to screen) - (box ki left wall))
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    /*isse hm ye dekhre h ki hmara mouse center se kitna durr h agr center m hua to rotate 
    nhi hoga ya you can say ki kamm hoga..jitna durr jaega utna jyada box tilt hoga*/
    const centerX = x - (rect.width/2);
    const centerY = y - (rect.height/2);


    /* height and width se divide krre h taaki koi chota sa angle mile or transition smooth ho agr jyada angle mile
    to wo visually appealing nhi hoga ALWAY CHOOSE A HIGHER ANGLE SO THAT 'BS ACHA LGE DIKHNE M' */
    const tiltX = (centerY / rect.height)*50;
    const tiltY = (centerX / rect.width)*50;

    /*iske bad simple apna bs values ko daldo mast*/
    box.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
})

box.addEventListener("mouseleave", ()=>{
    box.style.transform = `rotateX(0deg) rotateY(0deg)`
})