const loadContent = () => {
    // Get div#content
    const contentDiv = document.getElementById('content');

    // Create h1 element with restaurant name
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Welcome To Minervas';
    contentDiv.appendChild(restaurantName);

    
}

export { loadContent };