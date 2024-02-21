$(document).ready(function() {
  var colors = [ 
    {w: 700, c: 'rgba(0, 96, 255, 0.77)' },
    {w: 150, c: 'rgba(255, 0, 245, 0.77)'},
    {w: 100, c: 'rgba(255, 0, 0, 0.77)' },
    {w: 100, c: 'rgba(255, 0, 233, 0.77)'},
    {w: 150, c: 'rgba(0, 170, 255, 0.77)'},
    {w: 300, c: 'rgba(255, 120, 0, 0.77)'},
    {w: 150, c: 'rgba(255, 226, 0, 0.77)'}
  ];

  var w_sum, i;

  for(i=0, w_sum=0; i < colors.length; i++) {
    w_sum += colors[i].w;
  }

  var bg = Math.round((Math.random()*10))+1;
  var col = Math.round((Math.random()*w_sum));
    
  for(i=0, w_sum=0; i < colors.length; i++) {
    w_sum += colors[i].w;
        
    if (w_sum > col) break;
  }

  $('#fixed-wrapper').css('background-image', 'url("./slides/'+bg+'.jpg")');
  $('#menu-wrapper').css('background-color', colors[i].c);
});

