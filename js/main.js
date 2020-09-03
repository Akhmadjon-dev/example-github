var x = prompt("yoshiz nechada?");
if (x >= 18 && x <= 40) {
  alert("Ayni ishlash vaqti!!!");
  y = prompt("kasbingiz nima?");
  alert("unda siz bu " + y + " kasb bilan kop narsaga erishasiz");
} else if (x < 18 && x >= 7) {
  x = prompt("Bilim olish vaqti!!!");
} else if (x > 40 && x < 60) {
  x = prompt("Oila davrasida bolish kerak koproq!!!");
} else if (x < 7 && x > 0) {
  x = prompt("Bola paytiz");
} else {
  alert("Nima deyishgaham hayronman.");
}
