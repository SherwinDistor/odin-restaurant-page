const loadMenu = () => {
    // Create menu div and add id
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    // Create h1 with menu text
    const menuName = document.createElement('h1');
    menuName.textContent = 'Menu';
    menuDiv.appendChild(menuName);

    // Create h2 with App
    const appetizers = document.createElement('h2');
    appetizers.textContent = 'APPETIZERS';
    menuDiv.appendChild(appetizers);

    // Create menu items div for apps
    const menuItemsAppsDiv = document.createElement('div');
    menuItemsAppsDiv.id = 'menu-items-apps';
    menuDiv.appendChild(menuItemsAppsDiv);

    // Use the createMenuItems function by passing in the name, description, imageURL and price
    menuItemsAppsDiv.appendChild(createMenuItems(
            'Chardonay Mussels',
            'Mussels, Garlic, Fresh Herbs, Chardonnay Wine, Diced Tomatoes, Grilled Focaccia Bread.',
            'https://www.minervas.net/images/jqg_1674769188.jpg',
            19
    ));

    menuItemsAppsDiv.appendChild(createMenuItems(
            'South Dakota Beef Chislic',
            'Fried Premium Steak Tips, Garlic, Fresh Herbs, Bold BBQ Sauce.',
            'https://www.minervas.net/images/jqg_1674769069.jpg',
            18   
    ));

    // Create h2 with entrees
    const entrees = document.createElement('h2');
    entrees.textContent = 'ENTREES';
    menuDiv.appendChild(entrees);

    // Create menu items div for entrees
    const menuItemsEntreesDiv = document.createElement('div');
    menuItemsEntreesDiv.id = 'menu-items-entrees';
    menuDiv.appendChild(menuItemsEntreesDiv);

    // Create entree menu items
    menuItemsEntreesDiv.appendChild(createMenuItems(
        'Jumbo Prawns',
        'Fresh Herbs, Garlic, Red Pepper Flakes, Butter, White Wine, Linguine. Topped with Charbroiled Jumbo Prawns.',
        'https://www.minervas.net/images/jqg_1674769114.jpg',
        38
    ));
    
    menuItemsEntreesDiv.appendChild(createMenuItems(
        'Cajun Chicken Linguine',
        'Cajun Spiced Chicken Breast, Carrots, Broccoli, Bell Peppers, Mushrooms, Almonds, Butter, Cream, White Wine.',
        'https://www.minervas.net/images/jqg_1674769093.jpg',
        22
    ));

    menuItemsEntreesDiv.appendChild(createMenuItems(
        'Ribeye',
        '12oz. With Mashed Potatoes, Sauteed Sweet Onions. Topped with Fresh Herbs, Butter & Garlic.',
        'https://www.minervas.net/images/jqg_1674257206.jpg',
        46
    ));

    menuItemsEntreesDiv.appendChild(createMenuItems(
        'Canadian Walleye',
        'Lightly Breaded, Dill Hollandaise Sauce, Toasted Almonds, White Cheddar Mashed.',
        'https://www.minervas.net/images/jqg_1674769136.jpg',
        28
    ));
    

    // Get main and append menu
    const mainDiv = document.getElementById('main');
    mainDiv.appendChild(menuDiv);
}

// function that creates menu items with name, description, and image as parameters
const createMenuItems = (name, description, imageURL, price) => {
    const menuItem = document.createElement('div');
    menuItem.id = 'menu-item';
    
    const menuHeaderDiv = document.createElement('div');
    menuHeaderDiv.id = 'menu-header';

    const menuItemName = document.createElement('h3');
    menuItemName.textContent = name;

    const menuItemDescription = document.createElement('p');
    menuItemDescription.id = 'description';
    menuItemDescription.textContent = description;

    const menuItemImage = document.createElement('img');
    menuItemImage.src = imageURL;
    menuItemImage.alt = `Image of ${name}`;
    menuItemImage.id = 'menu-image';

    const menuItemPrice = document.createElement('h4');
    menuItemPrice.textContent = `$${price}.00`;

    menuItem.appendChild(menuHeaderDiv);
    menuHeaderDiv.appendChild(menuItemName);
    menuHeaderDiv.appendChild(menuItemPrice);
    menuItem.appendChild(menuItemDescription);
    menuItem.appendChild(menuItemImage);

    return menuItem;
}

export { loadMenu };