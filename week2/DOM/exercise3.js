function create(element) {
    var createdElement = document.createElement(element);
    var content = document.createTextNode("AWESOME");
    createdElement.style.position = "fixed";
    createdElement.style.zIndex = "2147483647";
    createdElement.style.left = "20px";
    createdElement.style.top = "100px";
    createdElement.style.fontSize = "200px";
    createdElement.appendChild(content);
    document.body.append(createdElement);
}
