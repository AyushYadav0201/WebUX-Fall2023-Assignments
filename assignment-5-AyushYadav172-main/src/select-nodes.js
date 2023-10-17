/**
 * The 'HTMLNode' class represents HTML elements and provides a method for selecting specific elements within a DOM tree.
 */
class HTMLNode {
  /**
   * Constructor for creating an HTML node.
   * @param {String} tagName - The tag name.
   * @param {Array} children - An array of child nodes.
   * @param {Array} cssClasses - An array of CSS classes.
   * @param {String} nodeID - The node ID.
   */
  constructor(tagName, children, cssClasses, nodeID) {
    this.tagName = tagName;
    this.cssClasses = cssClasses;
    this.children = children;
    this.nodeID = nodeID;
  }

  /**
   * Searches for nodes matching a given selector.
   * @param {string} selector - The selector string.
   * @returns {Array} An array of selected nodes.
   */
  search(selector) {
    if (selector === undefined) {
      return 'Please provide a valid selector for searching.'; // when empty
    }

    const resultNodes = [];
    const queue = [...this.children]; // add children

    while (queue.length > 0) {
      const currentNode = queue.shift(); // remove the nodes accounted for

      if (
        (selector.startsWith('.') && currentNode.cssClasses.includes(selector.substring(1))) ||
        (selector.startsWith('#') && currentNode.nodeID === selector.substring(1)) ||
        currentNode.tagName === selector
      ) {
        resultNodes.push(currentNode); // add node of class, ID or tag matches
      }

      queue.push(...currentNode.children); // add all children to queue
    }

    if (resultNodes.length === 0) {
      return 'No nodes found for the given selector.'; // return on empty with no selector array
    }

    return resultNodes;
  }
}

/* 
Demo DOM:
<body id="content">
   <div id="div-1" class="mainContainer">
      <span id="span-1" class="note"></span>
      <span id="span-2"></span>
      <div id="div-2" class="subContainer1">
           <p id="para-1" class="sub1-p1 note"></p>
           <span id="span-3" class="sub1-span3"></span>
      </div>
      <div id="div-3" class "subContainer2">
         <section id="sec-1">
             <label id="lbl-1"></label>
         </section>
      </div>
      <div id="div-4">
           <span id="span-4" class="mania"></span>
           <span id="span-5" class="note mania"></span>
      </div>
    </div>
    <span id="span-6" class="randomSpan"></span>
   </body>
*/

// Create nodes based on the sample DOM structure
const body = new HTMLNode('body', [], [], 'content');
const divNode1 = new HTMLNode('div', [], ['mainContainer'], 'div-1');
const spanNode1 = new HTMLNode('span', [], ['note'], 'span-1');
const spanNode2 = new HTMLNode('span', [], [], 'span-2');
const divNode2 = new HTMLNode('div', [], ['subContainer1'], 'div-2');
const pNode1 = new HTMLNode('p', [], ['sub1-p1', 'note'], 'para-1');
const spanNode3 = new HTMLNode('span', [], ['sub1-span3'], 'span-3');
const divNode3 = new HTMLNode('div', [], ['subContainer2'], 'div-3');
const secNode1 = new HTMLNode('section', [], [], 'sec-1');
const labelNode1 = new HTMLNode('label', [], [], 'lbl-1');
const divNode4 = new HTMLNode('div', [], [], 'div-4');
const spanNode4 = new HTMLNode('span', [], ['mania'], 'span-4');
const spanNode5 = new HTMLNode('span', [], ['note', 'mania'], 'span-5');
const spanNode6 = new HTMLNode('span', [], ['randomSpan'], 'span-6');

// Establish parent-child relationships
body.children = [divNode1, spanNode6];
divNode1.children = [spanNode1, spanNode2, divNode2, divNode3, divNode4];
divNode2.children = [pNode1, spanNode3];
divNode3.children = [secNode1];
secNode1.children = [labelNode1];
divNode4.children = [spanNode4, spanNode5];

console.log('Section 1: Select and print all span elements inside divNode1');
console.log(divNode1.search('span'));

console.log('Section 2: Select and print elements with the class "note" inside divNode1');
console.log(divNode1.search('.note'));

console.log('Section 3: Select and print all label elements');
console.log(divNode1.search('label'));

console.log('Section 4: Select and print elements with the class "note" inside pNode1');
console.log(pNode1.search('.note'));

console.log('Section 5: Select and print all div elements inside divNode1');
console.log(divNode1.search('div'));

console.log('Section 6: Select and print all span elements inside divNode4');
console.log(divNode4.search('span'));

console.log('Section 7: Select and print all section elements inside divNode3');
console.log(divNode3.search('section'));

console.log('Section 8: Handle error conditions (e.g., empty selector)');
console.log(body.search());

console.log('Section 9: Select and print all label elements inside the "body" node');
console.log(body.search('label'));

console.log('Section 10: Select and print elements with the class "randomSpan" inside divNode1');
console.log(divNode1.search('.randomSpan'));
