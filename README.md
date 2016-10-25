# Space3D
Virtual Reality Space Exploration


## Yeoman

https://github.com/tmaximini/generator-ionic-gulp

## Aframe

http://stackoverflow.com/questions/36911852/multiple-a-scene-using-canvas

https://blog.neondaylight.com/build-a-simple-web-vr-ui-with-a-frame-a17a2d5b484#.i5qkcyy18

### Stereoscopic

https://github.com/oscarmarinmiro/aframe-stereo-component
eg: https://github.com/bryik/aframe-cardboard-camera/blob/master/examples/mountain.html

### Just 3js

https://www.sitepoint.com/bringing-vr-to-web-google-cardboard-three-js/

### Optimsing images

https://medium.com/samsung-internet-dev/optimising-a-frame-assets-for-faster-starts-4ec3bd35c6fc#.1x02gognc


### Animations

http://codepen.io/bryik/pen/XKWgvK


### Extras?

Scan this to view the virtual tour on your mobile device. - http://vrviewer.istaging.co/#!/684173

https://github.com/aframevr/aframe/issues/1023
One way we did before is to create a black mask entity that fades in when transitioning, and you change the scene during the transition.


### Museum

http://almossawi.com/aframe-d3-visualization/demo/








    <a-entity id="ip2" position="4 2 0" look-at="[camera]" info-point>
      <a-cylinder class="info-point-trigger" color="red" height="0.01" radius="0.2" rotation="-90 0 0"></a-cylinder>        
      <a-entity class="info-point-text" position="-0.8 0.5 0" scale="0.8 0.8 -1" bmfont-text="text: Comparison of Three Species of Iris Comparison of Three Species of Iris; width: 500; color: #fff; lineHeight: 42; opacity:0">
        <a-animation begin="showInfo" attribute="bmfont-text.opacity" dur="500" fill="forwards" to="1" repeat="0"></a-animation>
        <a-animation begin="hideInfo" attribute="bmfont-text.opacity" dur="200" to="0" repeat="0"></a-animation>
      </a-entity>
    </a-entity>    


    



    // "aframe": "git://github.com/aframevr/aframe.git#b4541560bc87062a2c71254d64b0ded2040a934f",

          // "aframe-stereo-component":{
      //   "main": "dist/aframe-stereo-component.js"
      // },

          "aframe-stereo-component": "git@github.com:oscarmarinmiro/aframe-stereo-component.git",

          http://codepen.io/mozvr/pen/RrxgwE


<!--       <a-sky id="sky1" radius="5000" src="#left" stereo="eye:left"></a-sky>
      <a-sky id="sky2" radius="5000" src="#right" stereo="eye:right"></a-sky> -->


      https://github.com/IdeaSpaceVR/aframe-360-degree-photosphere

      https://github.com/FintanK/webvr-angular-aframe         







      
<!-- TODO: Arrows. Static? -->

<a-scene scene-switcher>


<!--   <a-camera position="0 0 0">
      <a-cursor color="black"></a-cursor>
  </a-camera>   -->

<!--   <a-sky class="scene-1" color="red" visible="true"></a-sky>
  <a-sky class="scene-2" color="pink" visible="false"></a-sky> -->

  <!-- <a-sky class="scene-3" radius="5000" src="#scene-3-left" stereo="eye:left" visible="false"></a-sky> -->
  <!-- <a-sky class="scene-3" radius="5000" src="#scene-3-right" stereo="eye:right" visible="false"></a-sky> -->

  <!-- <a-sphere color="yellow" position="0 0 0" radius="1"></a-sphere> -->
  <!-- <a-box color="#6173F4" depth="2" height="400"></a-box> -->

  <a-camera position="0 1.8 3" cursor-visible="false" stereocam="eye:right;"></a-camera>
  
  <a-entity position="-1.5 3 0">
    <a-entity bmfont-text="text: Comparison of Three Species of Iris"></a-entity>
  </a-entity>  
        
<!--   <a-sky color="black" visible="true" rotation="0 0 0">
    <a-box color="#6173F4" opacity="1" depth="2" position="0 1 0"></a-box>
    <a-entity bmfont-text="text: Hello World;" position="0 1 1"></a-entity>      
  </a-sky>
  <a-entity bmfont-texts="text: Hello World;"></a-entity> -->

<!--   <a-sky src="#scene-4" visible="false">
    <a-box color="#6173F4" opacity="1" depth="2" position="0 1 0"></a-box>
  </a-sky>
  <a-sky id="sky1" src="#scene-3" visible="false"></a-sky>
  <a-sky src="#scene-2" visible="false"></a-sky> -->

<!--   <a-sky opacity="0" transparent="true" visible="false">
    <a-sphere stereo="eye:left" radius="5000" segmentsWidth="64" segmentsHeight="64" color="red"></a-sphere>
    <a-sphere stereo="eye:right" radius="5000" segmentsWidth="64" segmentsHeight="64" color="yellow"></a-sphere>
    <a-box color="#6173F4" opacity="1" depth="2" position="0 1 0"></a-box>
  </a-sky> -->

  <!-- <a-camera position="0 0 10" cursor-visible="false"></a-camera>       -->

<!--   <a-sky transparent="true">
TODO: Test if positioned in one it shows in both.
    <a-sphere src="#scene-3-left" stereo="eye:left" radius="5000" segmentsWidth="64" segmentsHeight="64" scale="-1 1 1" rotation="0 -60 0">
    </a-sphere>
    <a-sphere src="#scene-3-right" stereo="eye:right" radius="5000" segmentsWidth="64" segmentsHeight="64" scale="-1 1 1" rotation="0 -60 0"></a-sphere>
  </a-sky> -->

</a-scene> 


  <a-sky src="#scene-1" visible="true"></a-sky>


  <a-sky src="#scene-4" visible="false">
    <a-box color="#6173F4" opacity="1" depth="2" position="0 1 0"></a-box>
  </a-sky>
  <a-sky src="#scene-3" visible="false"></a-sky>
  <a-sky src="#scene-2" visible="false"></a-sky>

<a-scene antialias='true' scene-switcher>




</a-scene>

<!-- Assets -->
  <a-assets>
    <img id="scene-1" src="/images/PANO_20140705_mars1.jpg" preload="auto">
    <img id="scene-2" src="/images/PANO_20150101_stars.jpg" preload="auto">
    <img id="scene-3" src="/images/PANO_Dione_moon_color.jpg" preload="auto">
    <img id="scene-4" src="/images/PANO_Enceladus2_ps.jpg" preload="auto">
  </a-assets>

  <!-- Camera -->
  <a-entity position="0 1.8 3">
    <a-entity camera look-controls wasd-controls mouse-cursor></a-entity>
  </a-entity>

    <a-entity position="-2 3 -1">
      <a-cylinder event-set__1="_event: mouseenter; material.color: #5A67A6" color="#101010" height="0.01" radius="0.2" rotation="-90 0 0">
      </a-cylinder>        
      <a-entity scale="0.7 0.7 -1" bmfont-text="text: Comparison of Three Species of Iris Comparison of Three Species of Iris; width: 500; color: #fff"></a-entity>
    </a-entity>    