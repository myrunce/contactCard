$(document).ready(function(){
    var myvalues = [];

   

    $(document).on("click",".newContact h2",(function(){
        $(".newContact h1, .newContact h2").hide();
        $(".newContact p").show();
        })
    );

    $(document).on("click", ".newContact p", (function(){
         $(".newContact p").hide();
         $(".newContact h1, .newContact h2").show();
     })
     );
    // $('newContact p').click(function(){
    //     ("newContact h1, newContact h2").show();
    // })

    $(document).on('click', ".submit", function(){
           $("form#info :input").each(function(){
             myvalues.push($(this).val()); 
         });
    $(".contacts").append('<div class="newContact"><h1>'+ myvalues[0] + " " + myvalues[1] + '</h1><h2>Click for a description!</h2><p class="aboutme">' + myvalues[2] + "</p></div>");
    $(".newContact p").hide()
    myvalues = [];
     });

});
