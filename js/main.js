var _els = document.getElementsByClassName('parallax'),
    _layers = [],
    _scrollY = window.scrollY;

for(var i =0; i < _els.length; i++){
  var el = _els[i];
  var offset = _els[i].dataset.offset;
  _layers.push({
    el : el,
    y : 0,
    offset : offset
  });
};

window.addEventListener('scroll', handle_scroll);
requestAnimationFrame(animate);

function handle_scroll(e){
    _scrollY = window.scrollY;
    console.log(_scrollY);
}

function animate(){
  for (var i = 0; i < _layers.length; i++) {
    var oldY = _layers[i].y;
    _layers[i].y = _scrollY * _layers[i].offset;
    if(oldY !== _layers[i].y){
      _layers[i].el.style.transform = 'translateY('+ _layers[i].y +'px)';
    }
  }
  requestAnimationFrame(animate);
}
