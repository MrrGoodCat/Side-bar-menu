var isMenuOpen = false;

(function($) {
  "use strict"; // Start of use strict

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
      if(isMenuOpen)
          {
            $("#menu-toggle-small").removeClass("active");
            isMenuOpen = false;
          }
      else if(!isMenuOpen)
          {
            $("#menu-toggle-small").addClass("active");
            isMenuOpen = true;  
          }
  });

  // Expands the sidebar menu
  $("#sidebar-small").hover(function(e) {     
    e.preventDefault();
      if(!isMenuOpen)
          {
            $(".menu-child").toggleClass("toggle");
          }
  });
    
    $(".menu-child").click(function () {
        $("#menu-toggle-small").removeClass("active");
        isMenuOpen = false;
    });
})(jQuery); // End of use strict