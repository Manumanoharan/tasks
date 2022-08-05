function startAd(){
    setTimeout (function(){
        document.getElementById('bg-color1').style.transform='translateX(-364px)'
        document.getElementById('bg-color2').style.transform='translateX(364px)'
        document.getElementById('bg-color1').style.transition='all 1s ease'
        document.getElementById('bg-color2').style.transition='all 1s ease'

    },200)
    setTimeout (function(){
        document.getElementById('text-1').style.opacity='1'
        document.getElementById('text-1').style.right='149px'
        document.getElementById('text-1').style.transition='all 1s ease'
    },500)
    setTimeout (function(){
        document.getElementById('text-2').style.opacity='1'
        document.getElementById('text-2').style.right='143px'
        document.getElementById('text-2').style.transition='all 1s ease'
    },700)
    setTimeout (function(){
        document.getElementById('text-3').style.opacity='1'
        document.getElementById('text-3').style.bottom='11px'
        document.getElementById('text-3').style.transition='all 1s ease'
    },1000)
    setTimeout (function(){
        document.getElementById('logo').style.opacity='1'
        document.getElementById('logo').style.top='22px'
        document.getElementById('logo').style.transition='all 0.3s ease'
    },1300)
    setTimeout (function(){
        document.getElementById('icon1').style.transform='scale(1)'
        document.getElementById('icon1').style.transition='all 0.7s ease'
    },1500)
    setTimeout (function(){
        document.getElementById('icon2').style.transform='scale(1)'
        document.getElementById('icon2').style.transition='all 0.7s ease'
    },1700)
    setTimeout (function(){
        document.getElementById('icon3').style.transform='scale(1)'
        document.getElementById('icon3').style.transition='all 0.7s ease'
    },1800)
    setTimeout (function(){
        document.getElementById('icon4').style.transform='scale(1)'
        document.getElementById('icon4').style.transition='all 0.7s ease'
    },1900)
    setTimeout (function(){
        document.getElementById('cta').style.opacity='1'
        document.getElementById('cta').style.transform='scale(1)'
        document.getElementById('cta').style.transition='all 1.5s '
    },2000)
   
}

window.load=startAd();