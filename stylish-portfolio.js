var isMenuOpen = false;

(function($) {
  "use strict"; // Start of use strict

  // Opens the sidebar menu
  $("#menu-container-toggle").click(function(e) {
    e.preventDefault();
      if(isMenuOpen)
          {
            $("#menu-container").removeClass("active", 50);
            isMenuOpen = false;
          }
      else if(!isMenuOpen)
          {
            $("#menu-container").addClass("active", 50);
            isMenuOpen = true;  
          }
  });

  // Expands the sidebar menu
  $("#sidebar-menu").hover(function(e) {     
    e.preventDefault();
      if(!isMenuOpen)
          {
            $(".menu-child").toggleClass("hover-efect");
          }
  });
    
    $(".menu-child").click(function (e) {
        e.preventDefault();
        $("#menu-container").removeClass("active", 50);
        isMenuOpen = false;
    });
})(jQuery); // End of use strict