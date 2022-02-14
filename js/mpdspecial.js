var alist = document.getElementsByClassName("specialHall_hashTag_wrap");

for (var i = 0; i < alist.length; i++) {
  alist[i].addEventListener('mouseover', function(num) {
    return function() {
      loadImg(alist[num]);
    }
  }(i), false);
}

function loadImg(x) {
  x.querySelector(".img_wrap").src=x.getAttribute("data-my-img");
}

