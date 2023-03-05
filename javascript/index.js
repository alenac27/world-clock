function updateTime() {
  let almatyElement = document.querySelector("#almaty");
  let almatyDateElement = almatyElement.querySelector(".date");
  let almatyTimeElement = almatyElement.querySelector(".time");
  let almatyTime = moment().tz("Asia/Almaty");

  almatyDateElement.innerHTML = moment().format("MMMM Do YYYY");
  almatyTimeElement.innerHTML = `${almatyTime.format(
    "h:mm:ss [<small>]A<[/small>]"
  )}`;
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    "h:mm:ss [<small>]A<[/small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
