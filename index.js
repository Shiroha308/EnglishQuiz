//index.php内のポップアップを作動させるための関数

window.addEventListener('load', function() {
    if( !sessionStorage.getItem('disp_popup') ) {
      sessionStorage.setItem('disp_popup', 'on');
      var popup = document.getElementsByClassName('bg_onetime_popup');
      popup[0].classList.add('js_active');
      popup[0].onclick = function() {
      popup[0].classList.remove('js_active');
      }
    }
  }, false);
