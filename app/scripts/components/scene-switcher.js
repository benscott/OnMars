'use strict';

AFRAME.registerComponent('scene-switcher', {
  schema: {
    on: { default: 'click' }
  },
  init: function () {
    this.el.addEventListener(this.data.on, this.switch.bind(this));
    this.scenes = [];
    // Add sky elements to scene
    this.addElementsToScene(document.querySelectorAll('a-sky[data-scene]'));
    this.addElementsToScene(document.querySelectorAll('a-entity[data-scene]'));
    this.camera = document.querySelector('a-entity[camera]');
  },
  addElementsToScene: function (elements){
    var scene;
    for (var i=0; i<elements.length; i++){
      scene = parseInt(elements[i].getAttribute('data-scene'));
      // If we don't already have this scene, create a stub in
      // the scenes list, indexed at value from data-scene
      if(!(scene in this.scenes)){
        this.scenes[scene] = {
          elements: [],
          visible: elements[i].getAttribute('visible')
        };
      }
      this.scenes[scene].elements.push(elements[i]);
    }    
  },
  switch: function (){
  	for (var i=0; i<this.scenes.length; i++){
      // If visible element, hide and show the next one
  		if(this.scenes[i].visible === true){
        // Hide scene
        this.hideScene(i);
		    var nextI = i+1;
        if(nextI >= this.scenes.length){
          nextI = 0;
        }
        this.resetCamera();
        // Show nest slide       
        this.showScene(nextI);        
        // We've found the current visible element so break out of the loop
        break;
  		}
  	}
  },
  hideScene(index){
    this._toggleVisibilty(index, false);    
  },
  showScene(index){
    this._toggleVisibilty(index, true);    
  },
  /**
   * Toggle visibility of scene (sky and entities)
   */
  _toggleVisibilty: function (index, visible){  
    for (var i=0; i<this.scenes[index].elements.length; i++){
      this.scenes[index].elements[i].setAttribute('visible', visible);
      // If element has child info-point component, call hideInfo()
      if(this.scenes[index].elements[i].children[0] && this.scenes[index].elements[i].children[0].components['info-point']){
        this.scenes[index].elements[i].children[0].components['info-point'].hideInfo();
      }
      this.scenes[index].visible = visible;
    }  
  },
  /**
   * Reset camera position
   * This is needed so the starting view of a slide isn't changed by previous slide interactions
   */
  resetCamera: function (){
    this.camera.setAttribute('rotation', '0 0 0');
  }  
});