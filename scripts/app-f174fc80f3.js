/**
 * @ngdoc overview
 * @name Space3D
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */
(function () {
   'use strict';
    angular.module('Space3D', ['ionic', 'ngCordova', 'ngResource'])
      .run(["$ionicPlatform", function($ionicPlatform) {
        $ionicPlatform.ready(function() {
        });
      }]);
}());
(function () {
   'use strict';
    AFRAME.registerComponent('info-point', {
      schema: {
        on: { default: 'mouseenter'},
        off: { default: 'mouseleave'},
        visible: { default: false},
        hideTimeoutMS: { default: 600}
      },
      init: function () {
        this.textEl = this.el.getElementsByClassName('info-point-text')[0];
        // Timeout for hiding 
        this.hideTimeout = null;
        // Attach event listener for when user's gaze lands on info point
        // We need to wait until child-attached event fires rather than on init() 
        // As we're using templates that only get rendered on scene view 
        this.el.getElementsByClassName('info-point-trigger')[0].addEventListener(this.data.on, this.showInfo.bind(this));
        // Mouse leave only works on cursor element - not trigger
        document.getElementById('cursor').addEventListener(this.data.off, function(){
          // Have a little delay on hiding the text, so it doesn't stutter when quickly moving in/out
          clearTimeout(this.hideTimeout);
          this.hideTimeout = setTimeout(function(){ 
            this.hideInfo(); 
          }.bind(this), this.data.hideTimeoutMS);
        }.bind(this));
      },
      /**
       * Show info text
       */
      showInfo: function (){
        clearTimeout(this.hideTimeout);
        if(!this.isVisible()){
          this.hideAll(); 
          this.textEl.emit('showInfo');   
        }
      },
      /**
       * Hide info text
       */
      hideInfo: function (){
        if(this.isVisible()){
          this.textEl.emit('hideInfo');      
        }
      },  
      /**
       * Helper function - is text visible
       */
      isVisible: function(){
        return this.textEl.components['bmfont-text'].data.opacity !== 0;
      },
      /**
       * Hide all info text - called before displaying new text
       */
      hideAll: function (){
        var infoPoints = document.querySelectorAll('a-entity[info-point]');
        for (var i=0; i<infoPoints.length; i++){
          if(infoPoints[i].components['info-point']){
            infoPoints[i].components['info-point'].hideInfo();
          }
        }
      },    
    });
}());
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
        if(AFRAME.utils.isMobile()){
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


/**
 * @ngdoc function
 * @name Space3D.util:lodash
 * @description
 * # Lo-Dash
 * Expose Lo-Dash through injectable factory, so we don't pollute / rely on global namespace
 * just inject lodash as _
 */
(function () {
   'use strict';
	angular.module('Space3D')
	  .factory('_', ["$window", function($window) {
	    return $window._;
	  }]);
}());