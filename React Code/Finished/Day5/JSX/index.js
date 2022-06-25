const h1 = document.createElement('h1');
h1.textContent = 'Hello!';
h1.className = 'header';
console.log(h1);

const element = <h1 className='header'>Hello!</h1>;
console.log(element);

// JSX
ReactDOM.render(element, document.querySelector('#root'));