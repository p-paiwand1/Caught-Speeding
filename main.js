// Caught speeding By Ms.Parwin

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let speed = +document.getElementById("speed-in").value;
  let speedlimit = +document.getElementById("limit-out").value;

  // Process the Output - Chained
  if (speed >= "20") {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>Ticket to issue: Big Ticket</h2>`;
  } else if (speedlimit <= "20") {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>Ticket to issue: Small Ticket</h2>`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `<h2>Ticket to issue: No Ticket</h2>`;
  }
}
