const canvas = document.getElementById('calculator');
const ctx = canvas.getContext('2d');

const buttonWidth = 100; // Adjust as needed
const buttonHeight = 100; // Adjust as needed

const buttons = [
    '', '', '','', '',
    '', '', '', '%', '/',
    '(', '7', '8', '9', '*',
    ')', '4', '5', '6', '-',
    'Back', '1', '2', '3', '+',
    ' ', '0', ' ', '.', '=',
];

const operators = ['+', '-', '*', '/', '='];

let expression = '';
let errorMessage = '';

function drawButtons() {
    ctx.font = '24px Arial';
    ctx.fillStyle = 'lightgray';

    for (let i = 0; i < buttons.length; i++) {
        const x = (i % 5) * buttonWidth;
        const y = Math.floor(i / 5) * buttonHeight;

        if (operators.includes(buttons[i])) {
            ctx.fillStyle = 'orange';
        } else {
            ctx.fillStyle = 'gray';
        }

        ctx.fillRect(x, y, buttonWidth, buttonHeight);
        ctx.strokeRect(x, y, buttonWidth, buttonHeight);
        ctx.fillStyle = 'white';
        ctx.fillText(buttons[i], x + 40, y + 60);
    }
}

function drawExpression() {
    ctx.clearRect(0, 0, canvas.width, buttonHeight);
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'white';
    ctx.fillText(expression, 10, 30);
    ctx.fillStyle = 'red';
    ctx.fillText(errorMessage, 10, 80);
}

function evaluateExpression() {
    try {
        const result = calculateExpression(expression);
        errorMessage = '';
        expression = result.toString();
    } catch (error) {
        errorMessage = 'Invalid Expression';
    }
    drawExpression();
}


function evaluateExpression() {
    try {
        const result = calculateExpression(expression);
        errorMessage = '';
        expression = result.toString();
    } catch (error) {
        errorMessage = 'Invalid Expression';
    }
    drawExpression();
}

function calculateExpression(expression) {
    const operators = [];
    const values = [];

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
    };

    const tokens = expression.match(/(\d+|[-+*/%()])/g);

    if (!tokens) {
        throw new Error('Invalid Expression');
    }

    for (const token of tokens) {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else if (token in precedence) {
            while (
                operators.length > 0 &&
                precedence[operators[operators.length - 1]] >= precedence[token]
            ) {
                values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
            }
            operators.push(token);
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators[operators.length - 1] !== '(') {
                values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
            }
            operators.pop();
        }
    }

    while (operators.length > 0) {
        values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
    }

    return values[0];
}

function applyOperator(operator, b, a) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Division by zero');
            }
            return a / b;
        case '%':
            if (b === 0) {
                throw new Error('Modulus by zero');
            }
            return a % b;
    }
}



canvas.addEventListener('click', function (event) {
    const x = Math.floor(event.offsetX / buttonWidth);
    const y = Math.floor(event.offsetY / buttonHeight);
    const button = buttons[y * 5 + x];

    if (button) {
        if (button === 'Back') {
            expression = expression.slice(0, -1);
        } else if (button === '=') {
            evaluateExpression();
        } else {
            expression += button;
        }
        drawExpression();
    }
});

drawButtons();
drawExpression();
