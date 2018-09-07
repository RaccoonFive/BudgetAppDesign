$(document).ready(function (event) {
  $('.navbar__sideMenuButton').click(function (event) {
    if ($('.sideBar').hasClass('active')) {
      $('.sideBar').removeClass('active');
    }else {
      $('.sideBar').addClass('active');
    }
    
  });
});