$(document).ready(function(){
    var melodrama_open = false;
    $(.drop-panel1).click(function(){
        if (melodrama_open == false) {
            $(".ranking").slideDown("slow");
            melodrama_open == true;
        }else{
            $(".ranking").slideUp("fast");
            melodrama_open == false;
        }
    });
});

$(document).ready(function(){
    var ph_open = false;
    $(.drop-panel2).click(function(){
        if (ph_open == false) {
            $(".ranking").slideDown("slow");
            ph_open == true;
        }else{
            ph_open == false;
        }
    });
});
