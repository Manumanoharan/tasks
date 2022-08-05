function startAD() {
    setTimeout(function () {
        document.getElementById('road').style.top = '0';
        document.getElementById('road').style.transition = 'all 6s linear';
        document.getElementById('car').style.transform = 'translate(60px, 70px)'
        document.getElementById('car').style.transition = 'all 0.8s linear';
    }, 250)
    setTimeout(function () {
        document.getElementById('sprit-1').style.transform = 'translate(0px, 0px) scale(1)'
        document.getElementById('sprit-1').style.transition = 'all 0.5s linear';
        document.getElementById('sprit-2').style.transform = 'translate(0px, 0px) scale(1)'
        document.getElementById('sprit-2').style.transition = 'all 0.5s linear';

        document.getElementById('arrow-1').style.transform = 'rotate(331deg) scale(1)'
        document.getElementById('arrow-1').style.transition = 'all 0.5s linear';
        document.getElementById('arrow-2').style.transform = 'rotate(14deg) scale(1)'
        document.getElementById('arrow-2').style.transition = 'all 0.5s linear';
    }, 1200)
    setTimeout(function () {
        document.getElementById('logospt-1').style.opacity = '1'
        document.getElementById('tracker-1').style.transform = 'scale(1)'
        document.getElementById('tracker-1').style.transition = 'all 0.1s linear';

    }, 2000)
    setTimeout(function () {
        document.getElementById('logospt-1').style.opacity = '0'
        document.getElementById('tracker-1').style.transform = 'scale(0)'
        document.getElementById('logospt-2').style.opacity = '1'

        document.getElementById('tracker-2').style.transform = 'scale(1)'

        document.getElementById('tracker-2').style.transition = 'all 0.1s linear';

    }, 2600)
    setTimeout(function () {
        document.getElementById('line-1').style.top = '0'
        document.getElementById('line-1').style.transition = 'all 4s linear';

    }, 1600)
    setTimeout(function () {
        document.getElementById('deer').style.transform = 'translate(-75px,35px) scale(1)'
        document.getElementById('deer').style.transition = 'all 2s linear';

    }, 1800)
    setTimeout(function () {
        document.getElementById('deer-border').style.opacity = '1';
        document.getElementById('run').style.transform = 'translate(85px,35px) scale(1)'
        document.getElementById('run').style.transition = 'all 2s linear';
    }, 2000)
    setTimeout(function () {
        document.getElementById('sprit-1').style.transform = 'translate(138px, 201px) scale(0)'
        document.getElementById('sprit-1').style.transition = 'all 0.5s linear';
        document.getElementById('sprit-2').style.transform = 'translate(-1px, 223px) scale(0)'
        document.getElementById('sprit-2').style.transition = 'all 0.5s linear';

        document.getElementById('arrow-1').style.transform = 'rotate(331deg) scale(0)'
        document.getElementById('arrow-1').style.transition = 'all 0.5s linear';
        document.getElementById('arrow-2').style.transform = 'rotate(14deg) scale(0)'
        document.getElementById('arrow-2').style.transition = 'all 0.5s linear';
    }, 4000)
    setTimeout(function () {
        document.getElementById('intel-1').style.opacity = '1';
    }, 6500)
    setTimeout(function () {
        document.getElementById('text-1').style.opacity = '1';
        document.getElementById('text-1').style.transition = 'all 0.7s linear';
    }, 6600)
    setTimeout(function () {
        document.getElementById('text-2').style.opacity = '1';
        document.getElementById('text-2').style.transition = 'all 0.7s linear';
    }, 6700)
    setTimeout(function () {
        document.getElementById('text-3').style.opacity = '1';
        document.getElementById('text-3').style.transition = 'all 0.7s linear';
    }, 6800)
    setTimeout(function () {
        document.getElementById('text-4').style.opacity = '1';
        document.getElementById('text-4').style.transition = 'all 0.7s linear';
    }, 6900)
    setTimeout(function () {
        document.getElementById('text-5').style.opacity = '1';
        document.getElementById('text-5').style.transition = 'all 0.7s linear';
    }, 7000)
    setTimeout(function () {
        document.getElementById('text-6').style.opacity = '1';
        document.getElementById('text-6').style.transition = 'all 0.7s linear';
    }, 7100)

    setTimeout(function () {
        document.getElementById('bg').style.top = '0px'
        document.getElementById('bg').style.transition = 'all 1s linear';
    }, 8300)
    setTimeout(function () {
        document.getElementById('text-7').style.opacity = '1';
        document.getElementById('text-7').style.transition = 'all 0.7s linear';
    }, 9400)
    setTimeout(function () {
        document.getElementById('text-8').style.opacity = '1';
        document.getElementById('text-8').style.transition = 'all 0.7s linear';
    }, 9500)
    setTimeout(function () {
        document.getElementById('text-9').style.opacity = '1';
        document.getElementById('text-9').style.transition = 'all 0.7s linear';
    }, 9600)
    setTimeout(function () {
        document.getElementById('text-10').style.opacity = '1';
        document.getElementById('text-10').style.transition = 'all 0.7s linear';
    }, 9700)
    setTimeout(function () {
        document.getElementById('last').style.opacity = '1';
        document.getElementById('last').style.transition = 'all 0.7s linear';
    }, 10500)

}
window.load = startAD();