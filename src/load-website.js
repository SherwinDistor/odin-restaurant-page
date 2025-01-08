import { loadHome } from "./load-home";

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

    loadHome();
}

export { initializeWebsite };