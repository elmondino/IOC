function addHtml(textContent, htmlElement = "p", domElement = "#app") {
  const element = document.createElement(htmlElement);
  const textNode = document.createTextNode(textContent);
  element.appendChild(textNode);

  const selectedDomElement = document.querySelector(domElement);
  selectedDomElement.appendChild(element);
}

export default addHtml;
