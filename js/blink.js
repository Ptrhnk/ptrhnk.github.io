var l, e, t, i, s, hacek, tt, ee, hacek_, logo, pismena;
const words = [
  'Letišťě',
  'Let',
  'Letiš',
  'Les',
  'Lesť',
  'Lis',
  'Lisť',
  'Et',
  'Ti',
  // 'Tiť',
  'Tišé',
  'Isťě',
  // 'Iť',
  'ťě',
];
// Start the script
<<<<<<< HEAD
window.onload = (function() {
  setTimeout("introAnimation()", 1000);
  setTimeout("showLetiste()", 4000);
  setTimeout("blinkRandom()", 6000);
  setTimeout("btnLoop()", 5000);
});
//
function introAnimation() {
  var btnsArr = new Array();
  var btns = document.getElementsByClassName("white-button");
  [].forEach.call(btns, function (btn) {btnsArr.push(btn)});
  var menuBtn = document.getElementsByClassName("menu-button");
  [].forEach.call(menuBtn, function (menu) {btnsArr.push(menu)});
  // var socials = document.getElementsByClassName("social-icon");
  // [].forEach.call(socials, function (social) {btnsArr.push(social)});

  var j = 0;
  function startAnimation() {
    setTimeout(function() {
    btnsArr[j].classList.add("intro-btn-animation");
    btnsArr[j].classList.remove("invisible");
    j++;
      if (j < btnsArr.length) {
=======
window.onload = (() => {
  setTimeout("introAnimation()", 1000);
  setTimeout("blinkRandom()", 5000);
})
//
function introAnimation() {
  let btns = document.getElementsByClassName("white-button");
  let j = 0;
  function startAnimation() {
    setTimeout(() => {
    btns[j].classList.add("intro-btn-animation");
    btns[j].classList.remove("invisible");
    j++;
      if (j < btns.length) {
>>>>>>> e2e2e3f9a9b8604463a80fe7bd76324313f5a704
        startAnimation();
      }
    }, 700);
  }
  startAnimation();
}
<<<<<<< HEAD

=======
>>>>>>> e2e2e3f9a9b8604463a80fe7bd76324313f5a704
function showLetiste() {
  l = document.getElementById("l");
  e = document.getElementById("e");
  t = document.getElementById("t");
  i = document.getElementById("i");
  s = document.getElementById("s");
  hacek = document.getElementById("hacek");
  tt = document.getElementById("tt");
  ee = document.getElementById("ee");
  hacek_ = document.getElementById("hacek_");

<<<<<<< HEAD
  var charArr = [l, e, t, i, s, hacek, tt, ee, hacek_];
  var charArrCopy = charArr.slice();

  function startShow(visibility) {
    var letter = charArr.pop();
    setTimeout(function() {
      letter.style.visibility = visibility;
      if (charArr.length > 0) {
        startShow(visibility);
      }
    }, Math.floor(Math.random() * 150) + 50);
  }
  setTimeout(function() {
    startShow("visible");
      setTimeout(function() {
        charArr = charArrCopy.slice();
        startShow("hidden");
      }, 3000);
  }, 100);
}
//
function btnLoop() {
  var btnsGet = document.getElementsByClassName("white-button");
  var btns = new Array();
  [].forEach.call(btnsGet, function (btn) {btns.push(btn)});
  function startTrip() {
    var btn = btns.shift();
    setTimeout(function() {
      btn.classList.remove("intro-btn-animation")
      btn.classList.add("btn-loop");
      if (btns.length > 0) {
        startTrip();
      }
    }, 1000);
  }
  startTrip();
}
//
function blinkRandom() {
  var logo = document.getElementById("logo");
  logo.classList.add("logo-shadow");
  var btnElectro = document.getElementById("elektronika");
  btnElectro.classList.add("btn-loop");

  var showLetterInterval = setInterval("showLetter()", 700);
  var randomWordsInterval = setInterval("randomWords()", 3000);
  var logoBlinkInterval = setInterval("logoBlink()", 800);
=======
  let charArr = [l, e, t, i, s, hacek, tt, ee, hacek_];

}
//
function blinkRandom() {
  let btns = document.getElementsByClassName("white-button");
  // for (let i = 0; i < btns.length; i++) {
  //   btns[j].classList.remove("intro-btn-animation");
  //   btns[j].classList.add("btn-loop");
  // }
  let logo = document.getElementById("logo");
  logo.classList.add("logo-shadow");
  let btnElectro = document.getElementById("elektronika");
  btnElectro.classList.add("btn-loop");

  let showLetterInterval = setInterval("showLetter()", 600);
  let randomWordsInterval = setInterval("randomWords()", 3000);
  let logoBlinkInterval = setInterval("logoBlink()", 800);
>>>>>>> e2e2e3f9a9b8604463a80fe7bd76324313f5a704
}

function showLetter() {
  l = document.getElementById("l");
  e = document.getElementById("e");
  t = document.getElementById("t");
  i = document.getElementById("i");
  s = document.getElementById("s");
  hacek = document.getElementById("hacek");
  tt = document.getElementById("tt");
  ee = document.getElementById("ee");
  hacek_ = document.getElementById("hacek_");

  let charArr = [l, e, t, i, s, hacek, tt, ee, hacek_];
  let letter = charArr[Math.floor(Math.random() * charArr.length)];

  setTimeout(function() {
    letter.style.visibility = "visible";
      setTimeout(function() {
        letter.style.visibility = "hidden";
    }, Math.floor(Math.random() * 900) + 100);
  }, Math.floor((Math.random() * 5000) + 300));
}

function logoBlink() {
  let logo = document.getElementById("logo");
  setTimeout(function() {
    logo.style.visibility = "hidden";
      setTimeout(function() {
        logo.style.visibility = "visible";
    }, Math.floor(Math.random() * 50) + 10);
  }, Math.floor((Math.random() * 4000) + 300));
}

function randomWords() {
  l = document.getElementById("l");
  e = document.getElementById("e");
  t = document.getElementById("t");
  i = document.getElementById("i");
  s = document.getElementById("s");
  hacek = document.getElementById("hacek");
  tt = document.getElementById("tt");
  ee = document.getElementById("ee");
  hacek_ = document.getElementById("hacek_");

  let word = words[Math.floor(Math.random() * words.length)].toLowerCase();

  setTimeout(function() {
    toggleWord(word, true);
      setTimeout(function() {
        toggleWord(word, false)
      }, Math.floor(Math.random() * 1600) + 400);
  }, Math.floor((Math.random() * 1600) + 400));

  function toggleWord(word, setVisible) {
    let visibility = setVisible ? "visible" : "hidden";
    let j = 0;
    function writeChar() {
      setTimeout(function() {
        switch(word.charAt(j)) {
          case 'l':
          l.style.visibility = visibility;
          break;
          case 'e':
          e.style.visibility = visibility;
          break;
          case 't':
          t.style.visibility = visibility;
          break;
          case 'i':
          i.style.visibility = visibility;
          break;
          case 's':
          s.style.visibility = visibility;
          break;
          case 'š':
          hacek.style.visibility = visibility;
          s.style.visibility = visibility;
          break;
          case 'ť':
          tt.style.visibility = visibility;
          break;
          case 'é':
          ee.style.visibility = visibility;
          break;
          case 'ě':
          ee.style.visibility = visibility;
          hacek_.style.visibility = visibility;
          break;
        }
        j++;
        if (j < word.length) {
          writeChar();
        }
      }, Math.floor(Math.random() * 50) + 10);
    }
    writeChar();
  }
}
