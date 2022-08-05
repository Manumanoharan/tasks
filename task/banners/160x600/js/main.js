function startAD(){
    setTimeout(function(){
        document.getElementById("img1").style.opacity=1;
        document.getElementById("img2").style.opacity=1;
        document.getElementById("img1").style.transform='rotate(0)';
        document.getElementById("img2").style.transform='rotate(0)';
        document.getElementById("img1").style.transition='all 1s';
        document.getElementById("img2").style.transition='all 1s';
    },250)
    setTimeout(function(){
        document.getElementById("logo").style.opacity=1;
        document.getElementById("logo").style.transition='all 1.2s ease';
        document.getElementById("logo").style.transform='scale(1.2)';
    },900)
    setTimeout(function(){
        document.getElementById("logo").style.transform='scale(1)';
        document.getElementById("logo").style.transition='all 1s ease';
    },1400)
    setTimeout(function(){
        document.getElementById('copy').style.opacity=1;
        document.getElementById('copy').style.transform='rotate(0)';
        document.getElementById('copy').style.transition='all 1s';
    },1800)
    setTimeout(function(){
        document.getElementById('copy1').style.opacity=1;
        document.getElementById('copy1').style.transition='all 1s ease';
        document.getElementById('copy1').style.transform='translateY(0)'
    },2700)
    setTimeout(function(){
        document.getElementById('copy2').style.opacity=1;
        document.getElementById('copy2').style.transition='all 1s ease';
        document.getElementById('copy2').style.transform='translateY(0)'
    },3500)
    setTimeout(function(){
        document.getElementById('copy3').style.opacity=1;
        document.getElementById('copy3').style.transition='all 0.3s';
        document.getElementById('copy3').style.transform='translateY(0)'
    },4400)
    setTimeout(function(){
        document.getElementById('circle').style.opacity=1;
        document.getElementById('circle').style.transition='all 1s'; 
        document.getElementById("circle").style.transform='rotate(360deg)';

    },4900)
    setTimeout(function(){
        document.getElementById("button").style.transition='all 1.2s';
        document.getElementById("button").style.transform='scale(1.3)';
    },5200)
    setTimeout(function(){
        document.getElementById("button").style.transform='scale(1)';
        document.getElementById("button").style.transition='all 1s';
    },5900)
    setTimeout(function(){
        document.getElementById('site').style.opacity=1;
        document.getElementById('site').style.transition='all 0.5s'; 
        document.getElementById("site").style.bottom='30px';

    },6100)
}
window.load=startAD();
