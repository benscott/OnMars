AFRAME.registerComponent('info-point', {
  schema: {
    on: { default: 'mouseenter'},
    // off: { default: 'hover' },
    visible: { default: false}
  },
  init: function () {
    // Attach event listener for when user's gaze lands on info point
    // We need to wait until child-attached event fires rather than on init() 
    // As we're using templates that only get rendered on scene view 
    this.el.getElementsByClassName("info-point-trigger")[0].addEventListener(this.data.on, this.showInfo.bind(this));          
  },
  /**
   * Show info text
   */
  showInfo: function (){
    if(!this.isVisible()){
      this.hideAll(); 
      this.el.getElementsByClassName("info-point-text")[0].emit('showInfo');      
    }
    this.data.visible = true;
  },
  /**
   * Hide info text
   */
  hideInfo: function (){  
    if(this.isVisible()){
      this.el.getElementsByClassName("info-point-text")[0].emit('hideInfo');      
    }
    this.data.visible = false;
  },  
  /**
   * Helper function - is text visible
   */
  isVisible: function(){
    return this.data.visible
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