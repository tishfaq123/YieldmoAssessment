window.addEventListener('load', () => {

    const title = sessionStorage.getItem('title');
    const description = sessionStorage.getItem('description');
    const logo = sessionStorage.getItem('logo');
    const image = sessionStorage.getItem('image');
    
    document.getElementById('result-title').innerHTML = title;
    document.getElementById('result-description').innerHTML = description;
    document.getElementById('result-logo').innerHTML = logo;
    document.getElementById('result-image').innerHTML = image;
})