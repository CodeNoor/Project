let i =0;
while(i<30){
    var svg = document.getElementsByTagName('svg')[i]
    console.log('className of svg: ', svg);
    svg.style.display='none'
    console.log(i);
    
    
    i++;
}
