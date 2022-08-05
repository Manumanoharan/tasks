function startAD() {
    setTimeout(function () {
        document.getElementById('bg-img').style.left = '-222px';
        document.getElementById('bg-img').style.transition = 'all 15s';
    }, 800)
    setTimeout(function () {
        document.getElementById('blue-1').style.top = '-40px';
        document.getElementById('blue-1').style.transition = 'all 0.5s';
    }, 200)
    setTimeout(function () {
        document.getElementById('blue-2').style.bottom = '-43px';
        document.getElementById('blue-2').style.transition = 'all 0.5s';
    }, 200)
    setTimeout(function () {
        document.getElementById("text-1").classList.add("text");
    }, 500)
    setTimeout(function () {
        document.getElementById("text-2").classList.add("text");
    }, 700)
    setTimeout(function () {
        document.getElementById('text-3').style.opacity = "1";
        document.getElementById('text-3').style.transition = 'all 1s';
    }, 1400)
    setTimeout(function () {
        document.getElementById('btn').style.width = "111px";
        document.getElementById('cta').style.transform = "scale(1.1)";
        // document.getElementById('id').style.transform="scale(1.1)";
        document.getElementById('btn').style.transition = 'all 0.3s';
        document.getElementById('cta').style.transition = 'all 0.3s';
        // document.getElementById('id').style.transition='all 0.3s';
    }, 2000)

    setTimeout(function () {
        document.getElementById('site').style.transform = 'translateY(0)';
        document.getElementById('site').style.transition = 'all 0.6s';
    }, 2200)
    setTimeout(function () {
        document.getElementById('logo').style.transform = 'translateY(0)';
        document.getElementById('logo').style.transition = 'all 0.3s';
    }, 2700)


}
window.load = startAD();