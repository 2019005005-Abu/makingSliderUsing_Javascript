let n=0;
let imageElement=document.getElementById('sliderImage');
const image=[
'./img/img-1.jpg',
'./img/img-2.jpg',
'./img/img-3.jpg',
'./img/img-4.jpg'
]
setInterval(()=>{
 if(n===image.length)n=0
 const imgageLink=image[n];
 console.log(imgageLink);
 n++;
 imageElement.setAttribute('src',imgageLink)
},1000)