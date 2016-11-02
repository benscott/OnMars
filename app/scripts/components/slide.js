'use strict';

AFRAME.registerComponent('slide', {
  schema: {
    maxYaw: { default: false},
    maxPitch: { default: false},
  },
  init: function () {
    console.log('INIT');
    this.camera = document.querySelector('a-entity[camera]');
  },
  /**
   * Hide
   */
  hide: function (){
    this.el.setAttribute('visible', false);
  },  
  /**
   * Hide
   */
  show: function (){
    this.el.setAttribute('visible', true);
    if(this.data.maxYaw){
      console.log(this.camera);
    }
    if(this.data.maxPitch){
      console.log(this.camera);
    }    
  },  
});