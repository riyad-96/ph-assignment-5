### Questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answers:

1. The difference between those are:
- **getElementById** => grab an single elemnt from the dom.
- **getElementsByClassName** => grab all the element with the same className and returns nodelist.
- **querySelector** => this supports all the css selectors but grabs a single element.
- **querySelectorAll** => this grabs all the elements with the same selector passed on to it and returns a nodeList.


2. First we need to create an element with **document.createElement('whichEverTagWeWant')** method. then **parentElement.appendChild(createdElement)**. this is all it takes.

3. Event bubbling is basically if a event is triggered on a nested element the event bubbles up to its parent then document body then document.
e.g. **child** > **parent** > **body** > **html**

4. Event Delegration is super useful when we need to listen so many elements, we can simply add listener to its parent and event bubbling will detect which child is clicked and listen to it.

5. **preventDefault()** prevent the default browser behavior of an event. and **stopPropagation()** prevent the event bubbling up to its parent.