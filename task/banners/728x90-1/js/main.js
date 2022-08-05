function startAD(){
   
    setTimeout(function(){
        document.getElementById('plane').style.transform='translate(0px,0px) scale(1)'
        document.getElementById('plane').style.transition='all 1s linear'
    }, 150)
    setTimeout(function(){
        document.getElementById('plane').classList.add('plane-1');
    }, 1400)
    setTimeout(function(){
        document.getElementById('text-1').style.transform='translateX(0px)'
        document.getElementById('text-1').style.opacity='1'
        document.getElementById('text-1').style.transition='all 0.2s linear'
    }, 1300)
    setTimeout(function(){
        document.getElementById('text-2').style.transform='scale(1)'
        document.getElementById('text-2').style.transition='all 0.5s linear'
    }, 1700)
    setTimeout(function(){
        document.getElementById('text-3').style.transform='translateX(0px)'
        document.getElementById('text-3').style.opacity='1'
        document.getElementById('text-3').style.transition='all 0.2s linear'
    }, 2000)
    setTimeout(function(){
        document.getElementById('offer').style.transform='scale(1)'
        document.getElementById('offer').style.transition='all 0.5s linear'
    }, 2200)
    setTimeout(function(){
        document.getElementById('logo').style.transform='translateY(0px)'
        document.getElementById('logo').style.transition='all 0.5s linear'
    }, 2500)
    setTimeout(function(){
        document.getElementById('cta').style.transform='translateY(0px)'
        document.getElementById('cta').style.transition='all 0.5s linear'
    }, 2500)
}
window.load=startAD();
