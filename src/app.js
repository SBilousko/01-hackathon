import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";

const menu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule(
  "background-changer",
  "Поменять цвет фона"
);
const clicksModule = new ClicksModule(
  "clicks-analyzer",
  "Считать клики (за 5 секунд)"
);
const shapeModule = new ShapeModule(
  "random-shape",
  "Создать фигуру"
);

const backgroundModuleHTML = backgroundModule.toHTML();
const clicksModuleHTML = clicksModule.toHTML();
const shapeModuleHTML = shapeModule.toHTML();

menu.add([backgroundModuleHTML, clicksModuleHTML, shapeModuleHTML]);

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
});
