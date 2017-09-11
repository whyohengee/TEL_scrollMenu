$(document).ready(function () {
  var _window            = $(window);
  var telHome           = $(".telMenu--home");
  var telOpportunities  = $(".telMenu--tel_opportunities")
  var telTopics         = $(".telMenu--tel_topics");
  var telFacultystories = $(".telMenu--faculty_stories");
  var telTools          = $(".telMenu--tools_services");
  var telProjects       = $(".telMenu--related_projects");
  var scrollDown        = $(".scrollDownItem");
  var telMenu           = $(".telMenu");
  var telMenuList       = $(".telMenu__list"); //entire list
  var expandMenu        = $(".expandMenu");
  var telMenuItems = $(".telMenu__item")

// If the window scrolls, then var collapse is set to true.
// If true, then toggle the shiftUp class.

  function collapseMenu() {
    telOpportunities.addClass("shiftUp");
    telTopics.addClass("shiftUp");
    telFacultystories.addClass("shiftUp");
    telTools.addClass("shiftUp");
    telProjects.addClass("shiftUp");
    scrollDown.addClass("shiftUp");

    //make the menu invisible, the expand
    //elem visible
    telHome.addClass("isHidden");
    expandMenu.addClass("isVisible");
    telMenu.addClass("noBoxShadow");
  }

  _window.on("scroll", function () {
    if (_window.scrollTop() > 0) {
      collapseMenu();
    }
  });

  expandMenu.click(function () {
    //first, make expandMenu invisible and
    //telMenuList visible...
    expandMenu.removeClass("isVisible");
    telHome.removeClass("isHidden");
    //...then, expand the other menu items
    telOpportunities.removeClass("shiftUp").delay(700);
    telTopics.removeClass("shiftUp").delay(700);
    telFacultystories.removeClass("shiftUp").delay(700);
    telTools.removeClass("shiftUp").delay(700);
    telProjects.removeClass("shiftUp").delay(700);
    scrollDown.removeClass("shiftUp").delay(700);

    // Need a delay so white bg of box shadow doesn't show
    // before other menu elements slide down
    setTimeout(function () {
      telMenu.removeClass("noBoxShadow");
    }, 250);
  })

  setTimeout(collapseMenu, 2000);

});