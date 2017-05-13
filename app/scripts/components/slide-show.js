(function () {
   'use strict';
    AFRAME.registerComponent('slide-show', {
      schema: {
        on: { default: 'click' }
      },
      init: function () {
        this.slides = document.getElementsByClassName("slide");
        this.camera = document.querySelector('a-entity[camera]');
        this.lookControls = this.camera.components['look-controls'];
        // On mobile, only bind after a user has entered VR
        if(AFRAME.utils.device.isMobile()){
          document.querySelector('a-scene').addEventListener('enter-vr', function () {
             this.bindMethods();
          }.bind(this));      
        }else{
          this.bindMethods();
        }
      },

      bindMethods: function (){
        this.el.addEventListener(this.data.on, this.next.bind(this));
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

        // If we have a slide title, emit show title event
        var slideTitle = this.slides[i].getElementsByClassName('slide-title')[0];
        if(slideTitle){
          slideTitle.emit('showTitle');
        }

        this.resetCameraRotation(); 
        // Have a small flash of black when changing slides
        setTimeout(function(){ 
            this.slides[i].setAttribute('visible', true);
          }.bind(this), 50);

        // maxYaw = this.slides[i].getAttribute('data-max-yaw');
        // maxPitch = this.slides[i].getAttribute('data-max-pitch');
        // if(maxYaw || maxPitch){
        //   this.cameraSetViewableArea(maxYaw, maxPitch);
        // }
      },
      /**
       * Get index of visible slide
       * @return {[int]} slide index
       */
      getVisibleIndex: function(){
        for (var i=0; i<this.slides.length; i++){
          if(this.slides[i].getAttribute('visible') || this.slides[i].getAttribute('visible') === null){
            return i;
          }
        }
        // Just in case, default to 0
        return 0;
      },
      /**
       * Reset camera position
       * When changing slide, set viewer to 0,0,0
       * This only works for desktop - changing rotation for mobile isn't recommended
       */
      resetCameraRotation: function (){
        this.lookControls.pitchObject.rotation.set(0, 0, 0);
        this.lookControls.yawObject.rotation.set(0, 0, 0);    
      },
      /**
       * Set viewable area of camera (maximum pitch / yaw)
       * Not in use as cannot currently force rotation on mobile users
       */
      cameraSetViewableArea: function (maxYaw, maxPitch){

      },  
    });
}());

