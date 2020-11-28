import $, { jQuery } from "jquery";
$(function () {
   // Default
   jQuery.scrollSpeed(1000, 8000);

   // Custom Easing
   jQuery.scrollSpeed(1000, 8000, "easeOutCubic");
});
