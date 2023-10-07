function customRender(ele,root){
    const domElement = document.createElement(ele.type);
    domElement.innerHTML = ele.children;
    for (const prop in ele.props) {
        domElement.setAttribute(prop, ele.props[prop])
    }
    root.appendChild(domElement)
}

const root = document.querySelector('#root');

const Element ={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'Click me to visit google'
}

customRender(Element,root);