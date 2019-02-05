var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".skills"
})
.setClassToggle(".skills", ".show")
.addTo(controller);
