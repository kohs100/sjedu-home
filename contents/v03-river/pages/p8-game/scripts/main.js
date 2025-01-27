
window.onload = function() {
    narr = document.getElementById('narr');

    narr2 = new Audio('assets/audio/thankyou.mp3');

    eff = new Audio('assets/audio/move.mp3');

    lott_obj = document.getElementById('lott');

    var played = false;

    lott = bodymovin.loadAnimation({
        container: lott,
        path: 'assets/json/data.json',
        renderer: 'svg/canvas/html',
        loop: false,
        autoplay: false
    });

    lott_obj.onclick = function() {
        if (!played) {
            played = true;
            lott_obj.classList.remove('notclicked');
            lott.play();
            narr.pause();
            narr2.play();
            eff.play();
            setTimeout(() => {
                eff.currentTime=0;
                eff.play();
                
                setTimeout(() => {
                    
                    narr2.onended = parent.startGame;
                }, 2000);

            }, 2000);
        }
    }
    
    /*narr.onended = function() {
        setTimeout(parent.startGame, 5000);
    }*/
}