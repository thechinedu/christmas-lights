const settings = document.querySelector(".light-bulb-settings");
const checkBoxContainer = document.querySelector(".checkbox-container");
const lightSwitch = document.querySelector(".light-switch");
const lightSwitchState = document.querySelector(".light-switch-state");
const lightBulbContainer = document.querySelector(".light-bulbs");
const lightBulbs = lightBulbContainer.querySelectorAll(".light-bulb");
const colorWheelBtn = document.querySelector(".color-wheel");
const colorWheels = lightBulbContainer.querySelectorAll(".color-setting");
const lightSwitchTextValues = {
  on: "off",
  off: "on"
};
const toggleProps = {};
const elemActions = {
  switch: () => {
    lightBulbContainer.classList.toggle("on");

    lightSwitchState.textContent =
      lightSwitchTextValues[lightSwitchState.textContent];
  },
  interval: e => {
    const duration = e.target.value;
    lightBulbs.forEach(lightBulb => {
      lightBulb.style.animationDuration = `${duration}s`;
    });
  }
};

settings.addEventListener("change", e => {
  elemActions[e.target.dataset.elem](e);
});

checkBoxContainer.addEventListener("click", e => {
  e.target.classList.toggle("active");
  lightSwitch.click();
});

colorWheelBtn.addEventListener("click", e => {
  colorWheels.forEach(colorWheel => {
    colorWheel.classList.toggle("hidden");
  });
});

lightBulbContainer.addEventListener("input", e => {
  const { themeColor } = e.target.dataset;
  const lightBulb = e.target.parentElement;
  lightBulb.style.setProperty(`--theme-color-${themeColor}`, e.target.value);
});
