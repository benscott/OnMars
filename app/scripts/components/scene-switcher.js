AFRAME.registerComponent('scene-switcher', {
  schema: {
    on: { default: 'click' }
  },
  init: function () {
    this.el.addEventListener(this.data.on, this.switch.bind(this));
  },
  switch: function (){
  	var skyEls = document.getElementsByTagName("a-sky")
    var camera = document.getElementsByTagName("a-camera")[0]
  	for (var i=0; i<skyEls.length; i++){
      // If visible element, hide and show the next one
  		if(skyEls[i].getAttribute('visible') == true){
		  	skyEls[i].setAttribute('visible', false);
		    var next = i+1;
        if(next >= skyEls.length){
          next = 0;
        }
        // Reset the camera rotation
        camera.setAttribute('rotation', '0 0 0');
        skyEls[next].setAttribute('visible', true);
        break;
  		}
  	};
  }
});