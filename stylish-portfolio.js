var isMenuOpen = false;

(function($) {
  "use strict"; // Start of use strict

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
      if(isMenuOpen)
          {
            $("#menu-toggle-small").removeClass("active", 50);
            isMenuOpen = false;
          }
      else if(!isMenuOpen)
          {
            $("#menu-toggle-small").addClass("active", 50);
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
    
    $(".menu-child").click(function (e) {
        e.preventDefault();
        $("#menu-toggle-small").removeClass("active", 50);
        isMenuOpen = false;
    });
})(jQuery); // End of use strict