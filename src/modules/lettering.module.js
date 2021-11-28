import {Module} from '../core/module'

export class LetteringClass extends Module {
        const letteringsArr = ["JavaScript", "Node.js", "React", "Angular", "HTML", "CSS", "jQuery", "Vue.js"];
        const stylesArr = ["textStyle1", "textStyle2", "textStyle3", "textStyle4", "textStyle5"];

        const WIDTH = 900;
        const HEIGHT = 800;

        const dataArr = randomCount();
        screenText = create(dataArr);

        setInterval(() => {
            const dataArr = randomCount();
            console.log(screenText);
            deleteTextSpan(screenText)
            screenText = create(dataArr);
        }, 1000);

        function randomCount() {
            let textStyle = Math.floor(Math.random() * stylesArr.length);
            let text = Math.floor(Math.random() * letteringsArr.length);
            let x = Math.floor(Math.random() * WIDTH);
            console.log('x = ', x);

            let y = Math.floor(Math.random() * HEIGHT);
            console.log('y = ', y);
            return [textStyle, text, x, y];
        }
        function create(randomArr) {
            const textSpan = document.createElement('span');
            textSpan.textContent = letteringsArr[randomArr[1]];
            textSpan.classList.add(`${stylesArr[randomArr[0]]}`);
            textSpan.style.top = randomArr[3] + "px";
            textSpan.style.left = randomArr[2] + "px";
            document.body.append(textSpan);
            return textSpan;
        }

        function deleteTextSpan(span) {
            span.remove();
        }


            }
}
