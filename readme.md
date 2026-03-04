## Answers to Questions:
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.

---------->When the button is clicked,
---------->First the button’s event runs,
---------->Then the div’s event runs,
--------->Then the body’s event runs.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add one event listener to the parent element and handle events using bubbling.

-------->Improves performance (fewer event listeners).
-------->Works for dynamically added elements.
-------->Cleaner and more efficient code.



--------------------------------------------------------------------------------------------------
### 5. What is the difference between preventDefault() and stopPropagation() methods?

# preventDefault()
---------->Stops the default browser behavior.
---------->Example: Prevent form submission.
# stopPropagation()
---------->Stops the event from bubbling to parent elements.