function resultat() {
  var a = parseFloat(document.getElementById("t1").value) || 0;
  var b = parseFloat(document.getElementById("t2").value) || 0;
  var somme = a * b;
  document.getElementById("t3").value = somme;

  a = parseFloat(document.getElementById("t4").value) || 0;
  var b = parseFloat(document.getElementById("t5").value) || 0;
  var somme = a * b;
  document.getElementById("t6").value = somme;

  a = parseFloat(document.getElementById("t7").value) || 0;
  var b = parseFloat(document.getElementById("t8").value) || 0;
  var somme = a * b;
  document.getElementById("t9").value = somme;
}

function somme() {
  // Récupérer les valeurs des champs t3, t6, et t9, et les convertir en nombres
  var a = parseFloat(document.getElementById("t3").value) || 0;
  var b = parseFloat(document.getElementById("t6").value) || 0;
  var c = parseFloat(document.getElementById("t9").value) || 0;

  // Calculer la somme
  var total = a + b + c;

  // Afficher le résultat dans un champ avec id "total"
  document.getElementById("11").value = total;
}
