import { loadHome } from "./load-home";
import { loadMenu } from "./load-menu";

const createMain = () => {
    // Create main div
    const mainDiv = document.createElement('div');
    mainDiv.id = 'main';
    return mainDiv;
}

const initializeWebsite = () => {
    // Get div#content
    const contentDiv = document.getElementById('content');

    contentDiv.appendChild(createMain());

    // loadHome();
    loadMenu();
}

export { initializeWebsite };