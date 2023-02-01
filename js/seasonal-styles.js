$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        season = season.toLowerCase();

        switch(season){
            
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src", "images/spring-wear.jpg");
                $("html").css("background-color","#2B7129");
                $("#header").text("It is a rainy spring day!");
            break;

            case "fall":
            $("#logo").attr("src","images/fall.gif");
            $("#wear").attr("src", "images/fall-wear.jpg");
            $("html").css("background-color","#A81124");
            $("#header").text("Fall is here! Time to get spooky!");
            break;

                case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src", "images/summer-wear.jpg");
                $("html").css("background-color","#EBA52B");
                $("#header").text("It's a nice day to hit the beach!");
                break;



            case "winter":
            $("#logo").attr("src","images/winter.gif");
            $("#wear").attr("src", "images/winter-wear.jpg");
            $("html").css("background-color","#005393");
            $("#header").text("Wrap up! It's a chilly day!");
             break;


            default:
                alert("You didn't hit a case!");
                $("#logo").attr("src","images/four-seasons.gif");
                $("#wear").attr("src", "images/300x400.jpg");
                $("html").css("background-color","#ccc");
                $("#header").text("Outfitter for All Seasons");
                

        }
       




    });
});
