(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var app = {};

app.carousel = function () {
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    contain: true,
    draggable: '>1',
    wrapAround: true
  }); // element argument can be a selector string
  //   for an individual element

  var flkty = new Flickity('.main-carousel', {// options
  });
};

app.events = function () {
  // when a hamburger nav is clicked
  document.querySelector('.menuCircle').addEventListener('click', function (e) {
    var menu = document.querySelector('.menu');

    if (menu.classList.contains('showFlex')) {
      menu.classList.remove('showFlex');
    } else {
      menu.classList.add('showFlex');
    }
  }); // FAQ events

  if (document.querySelector('.questionItem')) {
    var questionItems = document.getElementsByClassName('questionItem'); // loop through the elements with questionItem class

    for (var i = 0; i < questionItems.length; i++) {
      // add event listener to each question item
      questionItems[i].addEventListener('click', function (e) {
        var questionId = this.getAttribute('id'); // unselected previous question

        document.querySelector('.active').classList.remove('active');
        document.querySelector('.show').classList.remove('show'); // select clicked question

        document.getElementById(questionId).classList.add('active');
        document.querySelector(".".concat(questionId)).classList.add('show');
      });
    }
  } // testimonial events


  if (document.querySelector('.testimonialsMain')) {
    var names = document.getElementsByClassName("name"); // add an event listener to all the testimonial names

    for (var _i = 0; _i < names.length; _i++) {
      names[_i].addEventListener('click', function () {
        var clicked = this.getAttribute('class');
        var clickedName = clicked.split(' ')[1]; // unselect previous testimonial

        var previousQuote = document.getElementsByClassName('quote show');
        previousQuote[0].classList.remove('show');
        var previousImage = document.getElementsByClassName('imageContainer show');
        previousImage[0].classList.remove('show');
        document.querySelector('.active').classList.remove('active'); // select clicked testimonial

        document.querySelector(".testimonialNames .".concat(clickedName)).classList.add('active');
        var currentElements = document.getElementsByClassName(clickedName);

        for (var _i2 = 0; _i2 < currentElements.length - 1; _i2++) {
          currentElements[_i2].classList.add('show');
        }
      }); // end of event listener

    } // end of for loop


    var namesNav = document.querySelector('.namesNav');
    namesNav.addEventListener('click', function (e) {
      e.preventDefault();
      var namesList = document.querySelector('.testimonialNames ul');

      if (namesList.classList.contains('show')) {
        namesList.classList.remove('show');
      } else {
        namesList.classList.add('show');
      }

      var names = document.getElementsByClassName("name"); // add an event listener to all the testimonial names

      for (var _i3 = 0; _i3 < names.length; _i3++) {
        names[_i3].addEventListener('click', function () {
          document.querySelector('.testimonialNames ul').classList.remove('show');
        });
      }
    });
  } // end of testimonial events

};

app.init = function () {
  app.events();
  app.carousel();
};

(function () {
  app.init();
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQU0sR0FBRyxHQUFHLEVBQVo7O0FBRUEsR0FBRyxDQUFDLFFBQUosR0FBZSxZQUFXO0FBQ3RCLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixDQUFYO0FBQ0EsTUFBSSxLQUFLLEdBQUcsSUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQjtBQUMzQixJQUFBLE9BQU8sRUFBRSxJQURrQjtBQUUzQixJQUFBLFNBQVMsRUFBRSxJQUZnQjtBQUczQixJQUFBLFVBQVUsRUFBRTtBQUhlLEdBQW5CLENBQVosQ0FGc0IsQ0FRdEI7QUFDQTs7QUFDQSxNQUFJLEtBQUssR0FBRyxJQUFJLFFBQUosQ0FBYSxnQkFBYixFQUErQixDQUN2QztBQUR1QyxHQUEvQixDQUFaO0FBR0gsQ0FiRDs7QUFlQSxHQUFHLENBQUMsTUFBSixHQUFhLFlBQVc7QUFFcEI7QUFDQSxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxVQUFTLENBQVQsRUFBWTtBQUN4RSxRQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFiOztBQUNBLFFBQUksSUFBSSxDQUFDLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFVBQXhCLENBQUosRUFBeUM7QUFDckMsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsVUFBdEI7QUFDSCxLQUZELE1BRU87QUFDSCxNQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFtQixVQUFuQjtBQUNIO0FBQ0osR0FQRCxFQUhvQixDQVlwQjs7QUFDQSxNQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQUosRUFBNkM7QUFDekMsUUFBTSxhQUFhLEdBQUcs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QUFGO0FBQ0EsVUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWxCOztBQUNBLFVBQUksU0FBUyxDQUFDLFNBQVYsQ0FBb0IsUUFBcEIsQ0FBNkIsTUFBN0IsQ0FBSixFQUEwQztBQUN0QyxRQUFBLFNBQVMsQ0FBQyxTQUFWLENBQW9CLE1BQXBCLENBQTJCLE1BQTNCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsUUFBQSxTQUFTLENBQUMsU0FBVixDQUFvQixHQUFwQixDQUF3QixNQUF4QjtBQUNIOztBQUVELFVBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxRQUFkLENBVDJDLENBVzNDOztBQUNBLFdBQUssSUFBSSxHQUFDLEdBQUcsQ0FBYixFQUFnQixHQUFDLEdBQUcsS0FBSyxDQUFDLE1BQTFCLEVBQWtDLEdBQUMsRUFBbkMsRUFBdUM7QUFDbkMsUUFBQSxLQUFLLENBQUMsR0FBRCxDQUFMLENBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBWTtBQUMzQyxVQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLHNCQUF2QixFQUErQyxTQUEvQyxDQUF5RCxNQUF6RCxDQUFnRSxNQUFoRTtBQUNILFNBRkQ7QUFHSDtBQUVKLEtBbEJEO0FBb0JILEdBdkZtQixDQXVGbEI7O0FBR0wsQ0ExRkQ7O0FBNEZBLEdBQUcsQ0FBQyxJQUFKLEdBQVcsWUFBVztBQUNsQixFQUFBLEdBQUcsQ0FBQyxNQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsUUFBSjtBQUNILENBSEQ7O0FBS0EsQ0FBQyxZQUFXO0FBQ1IsRUFBQSxHQUFHLENBQUMsSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuY29uc3QgYXBwID0ge307XHJcblxyXG5hcHAuY2Fyb3VzZWwgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY2Fyb3VzZWwnKTtcclxuICAgIHZhciBmbGt0eSA9IG5ldyBGbGlja2l0eShlbGVtLCB7XHJcbiAgICAgICAgY29udGFpbjogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6ICc+MScsXHJcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZWxlbWVudCBhcmd1bWVudCBjYW4gYmUgYSBzZWxlY3RvciBzdHJpbmdcclxuICAgIC8vICAgZm9yIGFuIGluZGl2aWR1YWwgZWxlbWVudFxyXG4gICAgdmFyIGZsa3R5ID0gbmV3IEZsaWNraXR5KCcubWFpbi1jYXJvdXNlbCcsIHtcclxuICAgICAgICAvLyBvcHRpb25zXHJcbiAgICB9KTtcclxufVxyXG5cclxuYXBwLmV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICAvLyB3aGVuIGEgaGFtYnVyZ2VyIG5hdiBpcyBjbGlja2VkXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUNpcmNsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvd0ZsZXgnKSkge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dGbGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdzaG93RmxleCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gRkFRIGV2ZW50c1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbkl0ZW0nKSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWVzdGlvbkl0ZW0nKTtcclxuXHJcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBlbGVtZW50cyB3aXRoIHF1ZXN0aW9uSXRlbSBjbGFzc1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBxdWVzdGlvbiBpdGVtXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25JZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0ZWQgcHJldmlvdXMgcXVlc3Rpb25cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdCBjbGlja2VkIHF1ZXN0aW9uXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChxdWVzdGlvbklkKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3F1ZXN0aW9uSWR9YCkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0ZXN0aW1vbmlhbCBldmVudHNcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdGltb25pYWxzTWFpbicpKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmFtZWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhbGwgdGhlIHRlc3RpbW9uaWFsIG5hbWVzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuYW1lc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZE5hbWUgPSBjbGlja2VkLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHVuc2VsZWN0IHByZXZpb3VzIHRlc3RpbW9uaWFsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c1F1b3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVvdGUgc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNRdW90ZVswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlQ29udGFpbmVyIHNob3cnKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzSW1hZ2VbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3QgY2xpY2tlZCB0ZXN0aW1vbmlhbFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRlc3RpbW9uaWFsTmFtZXMgLiR7Y2xpY2tlZE5hbWV9YCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xpY2tlZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50RWxlbWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgLy8gZW5kIG9mIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgfSAvLyBlbmQgb2YgZm9yIGxvb3BcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZXNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZXNOYXYnKTtcclxuXHJcbiAgICAgICAgbmFtZXNOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsTmFtZXMgdWwnKTtcclxuICAgICAgICAgICAgaWYgKG5hbWVzTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgbmFtZXNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hbWVzTGlzdC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmFtZWApO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgdGVzdGltb25pYWwgbmFtZXNcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmFtZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsTmFtZXMgdWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSAvLyBlbmQgb2YgdGVzdGltb25pYWwgZXZlbnRzXHJcblxyXG5cclxufVxyXG5cclxuYXBwLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGFwcC5ldmVudHMoKTtcclxuICAgIGFwcC5jYXJvdXNlbCgpO1xyXG59OyBcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIGFwcC5pbml0KCk7XHJcbn0pKCk7Il19
