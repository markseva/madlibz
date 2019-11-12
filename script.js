function doTheStuff(){
  let noun1 = document.getElementById("W1").value;
  let noun2 = document.getElementById("W2").value;
  let noun3 = document.getElementById("W3").value;
  let occ = document.getElementById("W4").value;
  let verb = document.getElementById("W5").value;
  let place = document.getElementById("W6").value;
  let ed = document.getElementById("W7").value;
  let noun4 = document.getElementById("W8").value;
  let ing = document.getElementById("W9").value;
  let nouns = document.getElementById("W10").value;
  let noun5 = document.getElementById("W11").value;
  let emotion = document.getElementById("W12").value;

  document.getElementById("myForm").innerHTML = "<h4>It was during the battle of <span class='name'> " + noun1  + "</span> when I was running through a <span class='name'> " + noun2 + " </span> when a <span class='name'>" + noun3 + "</span> went off right next to my platoon. Our <span class='name'> " + occ + "</span> yelled for us to <span class='name'> " + verb + "</span> to the nearest <span class='name'> " + place + "</span> we could find. When we got to the <span class='name'> " + place + "</span> we <span class='name'> " + ed + "</span> to start a fire. As we were starting the fire the enemy saw the <span class='name'> " + noun4 + "</span> from the fire and started <span class='name'> " + ing + " " + nouns + "</span> at us. We all quickly ducked behind the <span class='name'> " + noun5 + "</span> at the <span class='name'> " + place + "</span> and returned fire, We quickly eliminated the enemy and were <span class='name'> " + emotion + "</span> that we had won the battle.</h4>";
}
