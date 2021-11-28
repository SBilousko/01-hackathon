import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import { LetteringModule } from "./modules/lettering.module.js";
import { TimerModule } from "./modules/timer.module";

const menu = new ContextMenu(".menu");

const clicksModule = new ClicksModule(
  "clicks-analyzer",
  "Считать клики (за 5 секунд)"
);
const shapeModule = new ShapeModule();
const ramdomLettering = new LetteringModule(
  "random-letter",
  "Показать случайное слово"
);
const timerModule = new TimerModule("timer-module", "Таймер отсчета");
shapeModule.addFigure();
const clicksModuleHTML = clicksModule.toHTML();
const shapeModuleHTML = shapeModule.toHTML();
const timerModuleHTML = timerModule.toHTML();
const ramdomLetteringHTML = ramdomLettering.toHTML();

menu.add([
  clicksModuleHTML,
  shapeModuleHTML,
  timerModuleHTML,
  ramdomLetteringHTML,
]);

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const positionX = event.pageX;
  const positionY = event.pageY;
  const documentHeight = document.documentElement.clientHeight;
  const documentWidth = document.documentElement.clientWidth;
  menu.open();
  const menuHeight = menu.el.offsetHeight;
  const menuWidth = menu.el.offsetWidth;
  if (documentHeight - positionY < menuHeight) {
    menu.el.style.top = `${positionY - menuHeight}px`;
  } else {
    menu.el.style.top = `${positionY}px`;
  }

  if (documentWidth - positionX < menuWidth) {
    menu.el.style.left = `${positionX - menuWidth}px`;
  } else {
    menu.el.style.left = `${positionX}px`;
  }

  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      console.log(event.target.getAttribute("data-type"));
      if (event.target.getAttribute("data-type") == "timer-module") {
        timerModule.trigger();
      } 
      if (event.target.getAttribute("data-type") == "random-letter") {
        ramdomLettering.trigger();
      }
    });
  });
});
