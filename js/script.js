// gestion des boutons du header
$(document).on("mouseenter",".onglet a", function () {
    $(this).addClass("active-header").siblings().removeClass("active-header");
    $(this).removeClass("inactive-header").siblings().addClass("inactive-header");
});

$(document).on("mouseleave",".onglet a", function () {
    $(this).removeClass("active-header").addClass("inactive-header")
});


// gestion des onglets sur le côté

var listenScroll = true;

$(document).on("click",".onglet-side a", function () {
    listenScroll = false;
    function enableScrollListener() {
        listenSCroll = true;
    }
    setTimeout(enableScrollListener, 2000);
    $(this).addClass("active").siblings().removeClass("active");
});

// allumer le bon onglet quand on scroll
$(window).scroll(function () { 
    if (listenScroll == true) {
        // position de la barre de scoll 
        var docViewTop = $(window).scrollTop();
        
        // calcul de la hauteur scrollable
        var sec4Top = $(".sec4").offset().top;
        var sec4Height = $(".sec4")[0].scrollHeight;
        var hauteurTotale = sec4Top + sec4Height;

        // Calculer la section la plus proche
        var ratio = docViewTop / hauteurTotale;
        console.log("Ratio = " + ratio);
        var onglets = $(".onglet-side a");
        if(ratio < 0.15) {
            // selection 1
            onglets[0].className = "active";
            onglets[1].className = "";
            onglets[2].className = "";
            onglets[3].className = "";
            
        } else if (ratio < 0.25) {
            // selection 2
            onglets[0].className = "";
            onglets[1].className = "active";
            onglets[2].className = "";
            onglets[3].className = "";
        } else if (ratio < 0.75) {
            // selection 3
            onglets[0].className = "";
            onglets[1].className = "";
            onglets[2].className = "active";
            onglets[3].className = "";
        } else  {
            // selection 4
            onglets[0].className = "";
            onglets[1].className = "";
            onglets[2].className = "";
            onglets[3].className = "active";
        } 
    }
});