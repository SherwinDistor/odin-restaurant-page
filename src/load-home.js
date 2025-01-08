const loadHome = () => {
    // Get div#content
    const contentDiv = document.getElementById('content');

    // Create h1 element with restaurant name
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Welcome To Minervas';
    contentDiv.appendChild(restaurantName);

    // Create div with img inside
    const restaurantImg = document.createElement('img');
    const restaurantImgDiv = document.createElement('div');
    restaurantImg.src = 'https://images.letgroup.com/OoYrbF6EFm/cmsimg_1672861375.jpg';
    restaurantImg.alt = 'Inside Minervas restaurant';
    restaurantImgDiv.appendChild(restaurantImg);
    contentDiv.appendChild(restaurantImgDiv);

    // Create div with three p elements inside
    const restaurantParagraphDiv = document.createElement('div');

    // Create the first paragraph
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Only the greatest dining experiences stand the tests of time and taste. Minervas has proudly served guests since 1977, from the heart of downtown Sioux Falls.';
    restaurantParagraphDiv.appendChild(paragraph1);

    // Create the second paragraph
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Located at the corner of Phillips Avenue and 11 Street, Minervas is known for its deliciously diverse, evolving menu.';
    restaurantParagraphDiv.appendChild(paragraph2);

    // Create the third paragraph
    const paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Guests return for generations to savor our hand-cut, in-house aged steaks, fresh seafood, chops, classic pasta dishes, the freshest salads, and house-made desserts.';
    restaurantParagraphDiv.appendChild(paragraph3);

    // Append the div with all the paragraphs to the content div
    contentDiv.appendChild(restaurantParagraphDiv);

}

export { loadHome };