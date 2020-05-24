let startTime = performance.now()

const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log(evt, 'A paragraph was clicked.', evt.target);
        evt.target.remove();
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

function beforePageExit(event) {
	console.log(event)
	event.preventDefault()
	event.returnValue = "Hey hey are you sure you want to leave this page?"

}


document.addEventListener("beforeunload", beforePageExit)

let endTime = performance.now()

console.log("The total running time is ", (endTime - startTime)*360)

