// Task 1:

// 1.1 
console.log(document.body.lastElementChild.tagName);

// 1.2 
console.log(document.body.children.length);

// 1.3
const childNodesLength = document.body.childNodes.length;
const childrenLength = document.body.children.length;
console.log(childNodesLength);
console.log(childrenLength);
console.log(childNodesLength - childrenLength);
/*
Why they differ:

childNodes includes text nodes created by whitespace and line breaks in the HTML.

children ignores these text nodes and counts only elements.
 */


// 1.4 
const firstNode = document.body.childNodes[0];
console.log(firstNode.nodeType);// 3 = Text Node
console.log(firstNode.nodeName);  //"#text"


// 1.5
const firstParagraph = document.body.children[1].children[0].children[0];               
const secondParagraph = firstParagraph.nextElementSibling;
console.log( (firstParagraph.parentElement === secondParagraph.parentElement)? "siblings" : "descendant");

// 1.6 
document.body.childNodes.forEach(node => {
  if (node.nodeType === 3) { 
    console.log("Text node found:", JSON.stringify(node.textContent));
  }

/*Explanation:
HTML formatting adds invisible text nodes for line breaks and spaces.*/

});





// Task 2:

// 2.1

const div = document.createElement("div");
div.className = "card";     
div.dataset.role = "admin";

const h2 = document.createElement("h2");
h2.textContent = "Access Panel";

const p = document.createElement("p");
p.textContent = "Authenticated";
div.appendChild(h2);
div.appendChild(p);
document.body.appendChild(div);

//2.2
console.log("data-role:", div.dataset.role);

//2.3
p.textContent = "Welcome back, Admin";

//2.4
div.classList.add("authenticated", "highlight");

//2.5
if (div.classList.contains("card")) {
  div.classList.remove("card");
}

console.log(div.className);
