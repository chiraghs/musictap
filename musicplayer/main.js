window.addEventListener('load',()=>{
    const sound=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const circles=document.querySelector(".circles");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];

    pads.forEach((pad,index)=>{
        pad.addEventListener('click',()=>{
            sound[index].currentTime=0;
            sound[index].play();
            createcircle(index);
        });
    });
    const createcircle = index => {
    const circ=document.createElement('div');
    const circ1=document.createElement('div');
    const circ2=document.createElement('div');
    const circ3=document.createElement('div');
    circles.appendChild(circ);
    circles.appendChild(circ1);
    circles.appendChild(circ2);
    circles.appendChild(circ3);
    if(index => 3){
        index=0;
    }
    circ.style.backgroundColor=colors[index];
    circ1.style.backgroundColor=colors[index+1];
    circ2.style.backgroundColor=colors[index+2];
    circ3.style.backgroundColor=colors[index+3];
    circ.style.animation=`jump 1s ease`;
    circ1.style.animation=`jumpa 1s ease`;
    circ2.style.animation=`jumpaa 1s ease`;
    circ3.style.animation=`jumpaaa 1s ease`;
    circ.addEventListener('animationend',function() {
        circles.removeChild(this);});
    circ1.addEventListener('animationend',function() {
        circles.removeChild(this);});
    circ2.addEventListener('animationend',function() {
       circles.removeChild(this);});
     circ3.addEventListener('animationend',function() {
        circles.removeChild(this);});
};
});