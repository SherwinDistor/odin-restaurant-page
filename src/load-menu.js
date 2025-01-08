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

    // Use the createMenuItems function by passing in the name, description, imageURL and price
    menuDiv.appendChild(createMenuItems(
            'Spinach Artichoke Dip',
            'Fresh Spinach, Roasted Garlic, Red Pepper Flakes, Smoked Gouda, Parmesan & Mozzarella. Served with Imported Crackers & Focaccia Bread.',
            'https://photos.singleplatform.com/c_limit,w_1280,fl_progressive/81ea67af4343fc97501a2ac928f531b581b2068c.jpg',
            13
        )
    )

    // Create h2 with entrees
    const entrees = document.createElement('h2');
    entrees.textContent = 'ENTREES';
    menuDiv.appendChild(entrees);

    
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