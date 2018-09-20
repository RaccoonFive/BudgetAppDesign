$(document).ready(function (event) {
  $('.navbar__sideMenuButton').click(function (event) {
    if ($('.sideBar').hasClass('active')) {
      $('.sideBar').removeClass('active');
    }else {
      $('.sideBar').addClass('active');
    }
    
  });
});


////
// Close sidemenu
$(document).click(function(event) {
  if (!$(event.target).closest('.sideBar').length && !$(event.target).is($('#sideBarBtn'))) {
    $('.sideBar').removeClass('active');
  }
});