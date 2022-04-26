function handleSubmit () {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const logo = document.getElementById('logo').value;
    const image= document.getElementById('image').value;
 
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("description", description);
    sessionStorage.setItem("logo", logo);
    sessionStorage.setItem("image", image);

    return;
}