import { loadHome } from "./load-home";
import { loadMenu } from "./load-menu";

const createNavButtons = () => {
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        loadHome();
    })

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        loadMenu();
    })

    // const aboutBtn = document.createElement('button');

    const nav = document.getElementById('nav');
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);

    return nav;
}


const createMain = () => {
    // Create main div
    const mainDiv = document.createElement('div');
    mainDiv.id = 'main';
    return mainDiv;
}

const initializeWebsite = () => {
    const header = document.getElementById('header');
    header.appendChild(createNavButtons());

    // Get div#content
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(createMain());

    loadHome();
    // loadMenu();
}

export { initializeWebsite };