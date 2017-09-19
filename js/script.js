jQuery(document).ready(function() {
  jQuery(".ui-close").click(function() {
    jQuery(this).parents(".ui-message").fadeOut();
  });
});
