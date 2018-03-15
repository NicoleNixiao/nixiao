/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#9abfde',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 4,
    size_random: true,
    nb: 30,//节点
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#5994c7',
      opacity: 0.8,//设置线的透明度
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 300,
        rotateY: 400
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 400//节点之间的距离
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});