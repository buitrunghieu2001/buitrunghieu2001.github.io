$(document).ready(function() {
    var B = $("body");
    var audio = $("#music")[0];
    audio.volume = 0.3;

    B.snowfall({
        shadow : true, 
        round : true,  
        minSize: 2, 
        maxSize: 8
    });
    
    B.delegate('.silent i', 'click', function() {
        var play = $(this).data('status');
        $(this).hide()
        if (play == "play") {
            audio.pause();
            $('.pause').show();
        } else {
            audio.play();
            $('.play').show();
        }
    })

    B.delegate('#btnMore', 'click', function() {
        alert("Em chịu khó đợi nhé :)) \nAnh đang cố gắng nghĩ nội dung.")
    })

    audio.play().then(function() {
        $('.pause').hide();
    }).catch(function(error) {
        $('.play').hide();
        console.log("Failed to start music:", error);
    });

    // Ngày, tháng - 1, năm, giờ, phút
    var date = new Date(2023, 7, 31, 10, 0).getTime();
    var x = setInterval(function() {
        let now = new Date().getTime();
        let distance = now - date;

        let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let v = [years, days, hours, minutes, seconds];
        render(v);

        if (distance < 0) {
            clearInterval(x);
            let v = ["00", "00", "00", "00", "00"];
            render(v);
        }
    }, 1000);

    function render (p) {
        //$('#years').html(p[0]);
        $('#days').html(p[1]);
        $('#hours').html(p[2]);
        $('#minutes').html(p[3]);
        $('#seconds').html(p[4]);
    }
}); 