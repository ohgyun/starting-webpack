class Box {
    constructor(containerSelector, name) {
        const container = document.querySelector(containerSelector);
        container.className = name;
        container.innerHTML = `<div class="box">${name}</div>`;
    }
}

export default Box;