function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Set attributes
  if (reactElement.props.href) {
    domElement.setAttribute('href', reactElement.props.href);
  }
  if (reactElement.props.target) {
    domElement.setAttribute('target', reactElement.props.target);
  }

  // Set text content (assuming children is a string)
  domElement.textContent = reactElement.children;

  // Append the created element to the container
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit Google',
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
