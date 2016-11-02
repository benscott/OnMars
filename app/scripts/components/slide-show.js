'use strict';

AFRAME.registerComponent('slide-show', {
  schema: {
    on: { default: 'click' }
  },
  init: function () {
    this.slides = document.getElementsByClassName("slide");
    this.el.addEventListener(this.data.on, this.next.bind(this));
    this.camera = document.querySelector('a-entity[camera]');

    // this.el.addEventListener(this.data.on, function(e){
    //   if(e.srcElement.tagName == 'CANVAS'){
    //     this.next()
    //   }
    // }.bind(this));
    
  },
  next: function (){
    // TODO: Prevent click while loading
    var maxYaw, maxPitch, i = this.getVisibleIndex();
    this.slides[i].setAttribute('visible', false);
    // Index of next slide
    i++;
    // If we iterate past the last slide, reset to zero
    if(i==this.slides.length){
      i=0;
    }
    this.resetCamera();
    this.slides[i].setAttribute('visible', true);
    maxYaw = this.slides[i].getAttribute('data-max-yaw');
    maxPitch = this.slides[i].getAttribute('data-max-pitch');
    if(maxYaw || maxPitch){
      this.cameraSetViewableArea(maxYaw, maxPitch);
    }
  },
  /**
   * Get index of visible slide
   * @return {[int]} slide index
   */
  getVisibleIndex(){
    for (var i=0; i<this.slides.length; i++){
      if(this.slides[i].getAttribute('visible') || this.slides[i].getAttribute('visible') === null){
        return i;
      }
    }
    // Default to first slide - if user clicks when everything is loading
    return 0;     
  },
  /**
   * Reset camera position
   * This is needed so the starting view of a slide isn't changed by previous slide interactions
   */
  resetCamera: function (){
    this.camera.setAttribute('rotation', '0 0 0');
  },
  /**
   * Set viewable area of camera (maximum pitch / yaw)
   */
  cameraSetViewableArea: function (maxYaw, maxPitch){
    console.log(maxYaw);
    console.log(maxPitch);
  },  
});