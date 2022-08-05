function startAd() {
    setTimeout(function () {
        document.getElementById("place1").style.transform = 'translateY(0px) scale(1)';
        document.getElementById("place1").style.transition = 'all 1s';
        document.getElementById("place1").style.opacity = '1';
        document.getElementById("place1").style.left = '0';
        document.getElementById("place1").style.top = '0';

    }, 250
    )
}
setTimeout(function () {
    document.getElementById("img2").style.opacity = '1';
    document.getElementById("from").style.opacity = '0';
    document.getElementById("to").style.opacity = '1';
    document.getElementById("place1").style.opacity = '0';
    document.getElementById("place2").style.opacity = '1';
    document.getElementById("place2").style.left = '0';
    document.getElementById("place2").style.top = '0';
    document.getElementById("place2").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place2").style.transition = 'all 1s';
    document.getElementById("from").style.transition = 'all 0.2s ease';
    document.getElementById("to").style.transition = 'all 0.2s ease';
}, 1000)


setTimeout(function () {
    document.getElementById("img3").style.opacity = '1';
    document.getElementById("place2").style.opacity = '0';
    document.getElementById("place3").style.opacity = '1';
    document.getElementById("place3").style.left = '0';
    document.getElementById("place3").style.top = '0';
    document.getElementById("place3").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place3").style.transition = 'all 1s';
}, 2000)


setTimeout(function () {
    document.getElementById("img4").style.opacity = '1';
    document.getElementById("place3").style.opacity = '0';
    document.getElementById("place4").style.opacity = '1';
    document.getElementById("place4").style.left = '0';
    document.getElementById("place4").style.top = '0';
    document.getElementById("place4").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place4").style.transition = 'all 1s';
}, 3000)
setTimeout(function () {
    document.getElementById("img5").style.opacity = '1';
    document.getElementById("place4").style.opacity = '0';
    document.getElementById("place5").style.opacity = '1';
    document.getElementById("place5").style.left = '0';
    document.getElementById("place5").style.top = '0';
    document.getElementById("place5").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place5").style.transition = 'all 1s';
}, 4000)
setTimeout(function () {
    document.getElementById("img6").style.opacity = '1';
    document.getElementById("place5").style.opacity = '0';
    document.getElementById("place6").style.opacity = '1';
    document.getElementById("place6").style.left = '0';
    document.getElementById("place6").style.top = '0';
    document.getElementById("place6").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place6").style.transition = 'all 1s';
}, 5000)
setTimeout(function () {
    document.getElementById("img7").style.opacity = '1';
    document.getElementById("place6").style.opacity = '0';
    document.getElementById("place7").style.opacity = '1';
    document.getElementById("place7").style.left = '0';
    document.getElementById("place7").style.top = '0';
    document.getElementById("place7").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place7").style.transition = 'all 1s';
}, 6000)
setTimeout(function () {
    document.getElementById("img8").style.opacity = '1';
    document.getElementById("place7").style.opacity = '0';
    document.getElementById("place8").style.opacity = '1';
    document.getElementById("place8").style.left = '0';
    document.getElementById("place8").style.top = '0';
    document.getElementById("place8").style.transform = 'translateY(0px) scale(1)';
    document.getElementById("place8").style.transition = 'all 1s';
}, 7000)
setTimeout(function () {
    document.getElementById("img8").style.opacity = '0';
    document.getElementById("place8").style.opacity = '0';
    document.getElementById("finalFrame").style.opacity = '1';
}, 8000)

window.load = startAd()