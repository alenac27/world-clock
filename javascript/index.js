function updateTime() {
  let almatyElement = document.querySelector("#almaty");
  if (almatyElement) {
    let almatyDateElement = almatyElement.querySelector(".date");
    let almatyTimeElement = almatyElement.querySelector(".time");
    let almatyTime = moment().tz("Asia/Almaty");

    almatyDateElement.innerHTML = moment().format("MMMM Do YYYY");
    almatyTimeElement.innerHTML = `${almatyTime.format(
      "h:mm:ss [<small>]A<[/small>]"
    )}`;
  }
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = `${berlinTime.format(
      "h:mm:ss [<small>]A<[/small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#city-list");
  citiesElement.innerHTML = `<div>
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        
        <a
          href="https://imaginative-pastelito-450627.netlify.app/"
          >All cities</a
        > `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelector = document.querySelector("#cities");
citySelector.addEventListener("change", updateCity);
