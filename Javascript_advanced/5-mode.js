function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    // Set variables with different themes
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add buttons to the body
    document.body.appendChild(createButton('Spooky', spooky));
    document.body.appendChild(createButton('Dark mode', darkMode));
    document.body.appendChild(createButton('Scream mode', screamMode));
}

function createButton(text, clickFunction) {
    let button = document.createElement('button');
    button.textContent = text;
    button.onclick = clickFunction;
    return button;
}

main();
