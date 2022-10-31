document.getElementById("iletişim").onclick = function () {
  if ((document.getElementById("iletişimform").style.display = "none")) {
    document.getElementById("iletişimform").style.display = "block";
    document.getElementById("projeform").style.display = "none";
    document.getElementById("başvuruform").style.display = "none";
  } else {
    document.getElementById("iletişimform").style.display = "none";
  }
};

document.getElementById("proje").onclick = function () {
  if ((document.getElementById("projeform").style.display = "none")) {
    document.getElementById("projeform").style.display = "block";
    document.getElementById("iletişimform").style.display = "none";
    document.getElementById("başvuruform").style.display = "none";
  } else {
    document.getElementById("projeform").style.display = "none";
  }
};

document.getElementById("başvuru").onclick = function () {
  if ((document.getElementById("başvuruform").style.display = "none")) {
    document.getElementById("başvuruform").style.display = "block";
    document.getElementById("projeform").style.display = "none";
    document.getElementById("iletişimform").style.display = "none";
  } else {
    document.getElementById("başvuruform").style.display = "none";
  }
};
