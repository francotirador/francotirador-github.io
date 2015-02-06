$(document).ready(function(){
   $("a.external").click(function() {
      url = $(this).attr("href");
      window.open(url, '_blank');
      return false;
   });
});