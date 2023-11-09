**Expression Calculator using Canvas API only(APIonlyCalcultor) and an extra with CSS styling(CSSCalculator)**

This project is an expression calculator built using HTML Canvas. Users can enter mathematical expressions with the operators "+ (add), - (subtract), * (multiply), / (divide), % (modulus)" and evaluate them by clicking the "=" button. The calculator also allows users to delete a character from the expression using the "Back" button. If the expression is malformed, an "Invalid Expression" error message will be displayed in the value field.

1. Evaluate an expression using the calculator when the "=" button is clicked.
2. Delete a character from the expression using the "Back" button.
3. See an "Invalid Expression" error message on the value field when the expression is malformed.
4. Using operators such as:
    a. add +
    b. subtract -
    c. multiply *
    d. divide /
    e. modulus %
    f. brackets ()


***API only Calculator***
This code sets up an HTML Canvas for the calculator and defines buttons and operators. It also provides functions for drawing buttons, handling expressions, and evaluating expressions. Here's a breakdown of the key parts of the code:

1. It initializes the Canvas and its 2D rendering context (ctx).
2. Defines the dimensions of the calculator buttons (buttonWidth and buttonHeight).
3. Creates an array of buttons that represent the calculator's layout.
4. Defines an array of operator symbols.
5. Initializes variables for the current expression and error messages.

The code provides three main functions:

1. drawButtons(): This function draws the calculator buttons on the Canvas based on the buttons array. It differentiates operator buttons (e.g., +, -, *, /) with an orange color and others with a gray color.
2. drawExpression(): This function clears the Canvas, displays the current expression, and shows an error message if there is one. The expression is drawn in black text, while the error message is in red.
3. evaluateExpression(): This function attempts to evaluate the current expression using the eval() function. If successful, it updates the expression with the result. If there's an error, it sets an "Invalid Expression" message.

The code also sets up a click event listener on the Canvas. When a button is clicked, it identifies the clicked button and performs the corresponding action (adding to the expression, evaluating, or deleting characters). After each user interaction, the Canvas is updated to reflect the changes.
Finally, it calls drawButtons() and drawExpression() to initialize the calculator's UI.


***CSS styling Calculator***
This code is responsible for creating an expression calculator on an HTML Canvas. Here's a breakdown of the key parts of the code:

1. The code begins by adding an event listener for the "DOMContentLoaded" event to ensure that the JavaScript code runs after the HTML document is fully loaded.
2. It initializes the canvas and a 2D rendering context (ctx) for drawing the calculator display.
3. The drawExpression() function is defined to clear the canvas and display the current expression in white text with right alignment.
4. Another function, isBalanced(expression), is used to check if the parentheses in the expression are balanced. It uses a stack data structure to keep track of open and close parentheses.
5. The code adds event listeners for specific buttons on the calculator. For example, the "C" button clears the expression, the "Back" button removes the last character from the expression, and the "=" button evaluates the expression. If the expression is not balanced or if there is an error during evaluation, an "Invalid Expression" message is displayed.
6. Event listeners are also added for digit, operator, and parenthesis buttons. When these buttons are clicked, the corresponding value is added to or modified in the expression, and the result is updated on the canvas.
7. The drawExpression() function is called initially to clear the canvas.