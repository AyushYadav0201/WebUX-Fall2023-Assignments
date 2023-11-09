document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("display");
    const ctx = canvas.getContext("2d");
    let expression = "";

    // Function to draw the expression on the canvas
    function drawExpression() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "24px Arial";
        ctx.fillStyle = "white"; // Set text color to white
        ctx.textAlign = "right"; // Align text to the right
        ctx.fillText(expression, canvas.width - 10, 30); // Adjust the x-coordinate to align to the right
    }

    // Function to check if an expression has balanced parentheses
    function isBalanced(expression) {
        const stack = [];
        for (let char of expression) {
            if (char === "(") {
                stack.push("(");
            } else if (char === ")") {
                if (stack.length === 0) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    }

    // Add click event listeners for buttons
    document.getElementById("clear").addEventListener("click", () => {
        expression = "";
        drawExpression();
    });

    document.getElementById("back").addEventListener("click", () => {
        expression = expression.slice(0, -1);
        drawExpression();
    });

    document.getElementById("equals").addEventListener("click", () => {
        try {
            if (isBalanced(expression)) {
                const result = eval(expression);
                expression = result.toString();
            } else {
                expression = "Invalid Expression";
            }
        } catch (error) {
            expression = "Invalid Expression";
        }
        drawExpression();
    });

    // Add event listener for the modulus operator button
document.getElementById("modulus").addEventListener("click", () => {
    expression += "%";
    drawExpression();
});

    // Add event listeners for digit, operator, and parentheses buttons
    const buttons = document.querySelectorAll(".digit, .operator, .parenthesis");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "=") {
                try {
                    if (isBalanced(expression)) {
                        const result = eval(expression);
                        expression = result.toString();
                    } else {
                        expression = "Invalid Expression";
                    }
                } catch (error) {
                    expression = "Invalid Expression";
                }
            } else if (value === "C") {
                expression = "";
            } else if (value === "Back") {
                expression = expression.slice(0, -1);
            } else {
                expression += value;
            }

            drawExpression();
        });
    });

    // Call drawExpression initially to clear the canvas
    drawExpression();
});
