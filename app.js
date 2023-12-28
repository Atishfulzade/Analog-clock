const container = document.querySelector(".container");
const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const mode = document.querySelector(".mode");
const clock = document.querySelector(".clock");

if (localStorage.getItem("mode") === "dark_mode") {
  container.classList.add("dark");
  mode.textContent = "light_mode";
}
mode.addEventListener("click", () => {
  container.classList.toggle("dark");
  clock.classList.toggle("dark");

  const isDarkMode = container.classList.contains("dark");
  mode.textContent = isDarkMode ? "light_mode" : "dark_mode";
  localStorage.setItem("mode", isDarkMode ? "dark_mode" : "light_mode");
});

const updateTime = () => {
  let date = new Date(),
    secTodeg = (date.getSeconds() / 60) * 360;
  minTodeg = (date.getMinutes() / 60) * 360;
  hourTodeg = (date.getHours() / 12) * 360;
  secondHand.style.transform = `rotate(${secTodeg}deg)`;
  minuteHand.style.transform = `rotate(${minTodeg}deg)`;
  hourHand.style.transform = `rotate(${hourTodeg}deg)`;
};

setInterval(updateTime, 1000);
