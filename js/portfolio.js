
$(document).ready(function () {
    // Declare variables
    const background = $(".background");
    const lunar = $(".lunar");
    const moon = $(".moon");
    const earth = $(".earth");
    const myself = $(".myself");
    const myname = $(".name");
    const introduction = $(".introduction");

    const main = $("#main-content");
    const blank = $(".blank");
    const section2 = $("#aboutme");
    const project2 = $("#technical-skills");
    const contact = $(".contact");

    // Display image of techinal skills
    $('.skill-icon').each(function() {
        var skillName = this.id; // Get the ID of the element
        $(this).css('background-image', 'url(/image/' + skillName + '.png)');
    });

    main.on('scroll', function () {
        const screenHeight = $(window).height();
        const screenWidth = $(window).width();
        const numberSections = 5
        const displacement = screenHeight * numberSections * 1.09;
        const widthLunar = screenWidth * 0.85;
        const heightLunar = screenHeight * 0.15 * 0.55;
        const radius_moon = moon.width();
        const widthEarth = radius_moon * 0.88;
        const heightEarth = radius_moon * 0.4;
        const gapOfName = 40 - 10;
        const gapOfNameFont = 6 - 3;

        let y_section2 = section2.offset().top;
        let change_position;

        if (y_section2 >= 0) {
            let change_section2 = y_section2 / (screenHeight * 0.8);
            change_position = 30 - gapOfName * (1 - change_section2);
            let change_font = 6 - gapOfNameFont * (1 - change_section2);
            let location = change_position + "vh";
            let fontSize = change_font + "vw";
            myself.css("top", location);
            myname.css("fontSize", fontSize);
        }
 

       // Event handling for introduction (display or hidden)
        if (y_section2 < (screenHeight * 0.8)) {
            introduction.css({
                animation: "fade-out 1s forwards",
                visibility: "hidden"
            });
        } else {
            introduction.css({
                visibility: "visible",
                animation: "appear 1s forwards"
            });
            myname.css('animation', 'bigger 2s ease-in-out');
          
        }


        let change_blank = Math.abs(blank.offset().top / displacement);
        let x_change_moon = widthLunar * change_blank + screenWidth * 0.015;
        let x_position_moon = x_change_moon + "px";
        moon.css("left", x_position_moon);

        let a = (-4 * heightLunar / widthLunar ** 2);
        let b = (4 * heightLunar / widthLunar);

        let y_change_moon = a * (x_change_moon ** 2) + b * x_change_moon;
        let y_position_moon = y_change_moon + "px";
        moon.css("bottom", y_position_moon);
        
        let x_change_earth = x_change_moon + 8 + widthEarth * change_blank * 1.38;
        let x_position_earth = x_change_earth + "px";
        earth.css("left", x_position_earth);
        
        let y_change_earth = y_change_moon - heightEarth * change_blank * 0.5;
        let y_position_earth = y_change_earth + "px";
        earth.css("bottom", y_position_earth);
     

    });
    
    // Btn click
    $('button').on('click', function () {
        let link = $(this).attr('id');
        window.location.href = link;
    })
    

    $('.expand').on('click', function () {
        let project = $(this).parent();
        
        // Remove the "hidden" class from the specified elements
       
        project.find('.content').removeClass("hidden");
    
        // Apply the transition to the specified elements
        project.find('.content').css('animation', 'expand-left 0.5s linear' );
        project.find('.img').css('animation', 'collapse-left 0.5s linear' );
    
     
        setTimeout(function () {
            project.find('.img').addClass('hidden');
            project.find('.expand').addClass('hidden'); 
            project.find('.collapse').removeClass('hidden');
        }, 500);
    });
    
    $('.collapse').on('click', function () {
        let project = $(this).parent();
       
        project.find('.img').removeClass('hidden');
        
    
        // Apply the transition to the specified elements
        project.find('.content').css('animation', 'collapse-left 0.5s linear' );
        project.find('.img').css('animation', 'expand-left 0.5s linear' );
    
     
        setTimeout(function () {
            project.find('.content').addClass('hidden');
            project.find('.collapse').addClass('hidden'); 
            project.find('.expand').removeClass('hidden');
        }, 500);

    })

    // Display images of project 2
    const image = ["../image/tradeX/1.png", "../image/tradeX/2.png", "../image/tradeX/3.png", "image/tradeX/4.png"];
    let index = 1;
    setInterval(function() {
        const currentIndex = index % image.length;
        $("#img-pj2").addClass('slide-in'); 
        setTimeout(function() {
            $("#img-pj2")
            .css('background-image', `url(${image[currentIndex]})`)
            .removeClass('slide-in'); 
        }, 500); 
        index++;

    }, 2000);

    // View resume btn



}); 



    


