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
    
    // console.log(this.camera.components['look-controls-dev'].pitchObject);

    

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

    var lookControls = this.camera.components['look-controls-dev'];

    lookControls.reset = true;
    // lookControls.el.setAttribute('rotation', '0 0 0');
    lookControls.pause();
    lookControls.dolly.rotation.set(0.1, 0.1, 0.1); 
    lookControls.calculateHMDQuaternion();
    lookControls.pitchObject.rotation.set(0, 0, 0);
    lookControls.yawObject.rotation.set(0, 0, 0);     
    lookControls.play();

    // this.cameraEl.setAttribute('rotation', '0 0 0')
    // this.camera.components['camera'].camera.position.set('0 0 0')

    // console.log(lookControls.dolly);


    // lookControls.dolly.rotationAutoUpdate = false;
    // lookControls.dolly.rotation.set(0.1, 0.1, 0.1); 
    // lookControls.updateOrientation();
    // console.log( lookControls.dolly.rotation);
    // console.log(lookControls.controls);

    // 

    // lookControls.dolly.rotationAutoUpdate = false;
    // // lookControls.dolly.quaternion = new THREE.Quaternion();

    // lookControls.dolly.rotation.set(1, 1, 1);
    // lookControls.dolly.updateMatrix();

    // lookControls.previousHMDPosition = new THREE.Vector3();


    // lookControls.calculateHMDPosition(); 

    console.log();

    console.log('--------- CLICK -----------')

    // lookControls.dolly.quaternion = new THREE.Quaternion();
    // this.camera.setAttribute('rotation', '0 0 0');
    // this.camera.setAttribute('position', '0 0 2');

    // lookControls.previousHMDPosition = new THREE.Vector3();
    // // lookControls.setupMouseControls();
    // this.camera.setAttribute('rotation', '0 0 0');
    // this.camera.setAttribute('position', '0 0 2');
    // lookControls.controls.update();
    // lookControls.updateOrientation();
    // lookControls.updatePosition();
            
    // lookControls.previousHMDPosition = new THREE.Vector3();
    // lookControls.pitchObject.rotation.set(5, 0, 0);
    // lookControls.yawObject.rotation.set(0, 0, 0);  

    // console.log(lookControls.pitchObject);

  
    // lookControls.controls.resetCamera();
    // lookControls.controls.resetPose();
    // lookControls.controls.dispose()
    // lookControls.controls.zeroSensor()

    // console.log(lookControls);

      // this.camera.object3D.matrixAutoUpdate=false; 
      // this.camera.object3D.rotation.x= 0;
      // this.camera.object3D.rotation.y= 0;
      // this.camera.object3D.updateMatrix();   
      // this.camera.object3D.matrixAutoUpdate=true;    
      // this.camera.object3D.updateMatrix();      

    // this.camera.components['look-controls-dev'].pitchObject.rotation.x = 0;
    // this.camera.components['look-controls-dev'].pitchObject.rotation.y = 0;
    // this.camera.components['look-controls-dev'].pitchObject.rotation.z = 0;

    // var sceneEl = this.el.sceneEl;
    // sceneEl.reload();
    // var camera = this.camera.components['camera'];
    // this.camera.setAttribute('rotation', '0 0 0');
    // this.camera.setAttribute('position', '0 0 2');
    // this.camera.setAttribute('scale', '0 0 0');
    // camera.restoreCameraPose();    
    // camera.restoreCameraPose();
    // camera.components['camera'].restoreCameraPose();

    // var e = new THREE.Euler();
    // e.x = 0;
    // e.y=0;
    // e.z=0;

    // this.camera.components['look-controls-dev'].pitchObject.rotation = e;

    // this.camera.components['look-controls-dev'].pitchObject.rotation.x = 0;
    // this.camera.components['look-controls-dev'].pitchObject.rotation.y = 0;
    // this.camera.components['look-controls-dev'].pitchObject.rotation.z = 0;

    // this.resetCamera();
    


    // this.camera.components['look-controls-dev'].init();
    // console.log(this.el.sceneEl);
    

    // console.log(this.camera.components['look-controls-dev'].pitchObject);/

    // var camera = this.slides[i].querySelector('a-entity[camera]');
    // camera.setAttribute('camera', 'active', true);
    // camera.setAttribute('camera', 'rotation', '0 0 0');
    
    this.slides[i].setAttribute('visible', true);
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