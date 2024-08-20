// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

      addDestinationInfo(
        document,
        pickPlanet(listedPlanets).name,
        pickPlanet(listedPlanets).diameter,
        pickPlanet(listedPlanets).star,
        pickPlanet(listedPlanets).distance,
        pickPlanet(listedPlanets).moons,
        pickPlanet(listedPlanets).image
      );
    });

  let list = document.getElementById("faultyItems");
  let form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
