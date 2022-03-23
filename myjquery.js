$(document).ready(function(){
    $("#login").click(function(){
        $(".login").show(2000);
        $(".signup").hide(2000);
        $(".purpose").hide(1000);
        $(".projects").hide(1000);
        $(".picture").hide(1000);
        $(".purpose").hide(1000);
        $(".contact").hide(1000);
    });
    $("#signup").click(function(){
        $(".signup").show(2000);
        $(".login").hide(1000);
        $(".projects").hide(1000);
        $(".picture").hide(1000);
        $(".purpose").hide(1000);
        $(".contact").hide(1000);
    });
    $("#projects").click(function(){
        $(".signup").hide(1000);
        $(".login").hide(1000);
        $(".projects").show(2000);
        $(".picture").hide(1000);
        $(".purpose").hide(1000);
        $(".contact").hide(1000);
    });
    $("#picture").click(function(){
        $(".signup").hide(1000);
        $(".login").hide(1000);
        $(".projects").hide(1000);
        $(".picture").show(2000);
        $(".purpose").hide(1000);
        $(".contact").hide(1000);
    });
    $("#about").ready(function(){
        $(".signup").hide(1000);
        $(".login").hide(1000);
        $(".projects").hide(1000);
        $(".picture").hide(1000);
        $(".purpose").show(2000);
        $(".contact").hide(1000);
    });
    $("#about").click(function(){
        $(".signup").hide(1000);
        $(".login").hide(1000);
        $(".projects").hide(1000);
        $(".picture").hide(1000);
        $(".purpose").show(2000);
        $(".contact").hide(1000);
    });
    $("#contact").click(function(){
        $(".signup").hide(1000);
        $(".login").hide(1000);
        $(".projects").hide(1000);
        $(".picture").hide(1000);
        $(".purpose").hide(1000);
        $(".contact").show(2000);
    });
});








// $("#hide").click(function(){
            //     $("p").hide(1000);
            // });
            // $("#show").click(function(){
            //     $("p").show(2000);
            // });
            // $(document).ready(function(){
            //     
            // });

            
            // $("#show").click(function(){
            //     $("#div1").fadeTo("slow", 0.15);
            //     $("#div2").fadeTo("slow", 0.4);
            //     $("#div3").fadeTo("slow", 0.7);
            // });

            //$("#hide").click(function(){
                //         $("#div1").fadeIn();
                //         $("#div2").fadeIn("slow");
                //         $("#div3").fadeIn(3000);
                //     });
                //     $("#show").click(function(){
                //         $("#div1").fadeOut(3000);
                //         $("#div2").fadeOut("slow");
                //         $("#div3").fadeOut();
                //     });


