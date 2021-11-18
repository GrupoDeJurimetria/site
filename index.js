function slide1() {
  document.getElementById('id').src = './imagens/A.png';
  t1 = setTimeout('slide2()', 8000);
  document.getElementById('aId').href = 'video.html';
  n = 0;
}

function slide2() {
  document.getElementById('id').src = './imagens/B.png';
  t2 = setTimeout('slide3()', 8000);
  document.getElementById('aId').href = 'project.html';
  n = 1;
}

function slide3() {
  document.getElementById('id').src = './imagens/C.png';
  t3 = setTimeout('slide1()', 8000);
  document.getElementById('aId').href = 'link3.html';
  n = 2;
}

function mais() {
  if (n == 0) {
    clearTimeout(t1);
    slide2();
  } else if (n == 1) {
    clearTimeout(t2);
    slide3();
  } else if (n == 2) {
    clearTimeout(t3);
    slide1();
  }
}

function menos() {
  if (n == 0) {
    clearTimeout(t1);
    slide3();
  } else if (n == 1) {
    clearTimeout(t2);
    slide1();
  } else if (n == 2) {
    clearTimeout(t3);
    slide2();
  }
}
