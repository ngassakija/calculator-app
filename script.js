
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "clear") {
            expression = "";
            display.value = "";
        }

        else if (value === "=") {
            try {
                const result = Function(
                    '"use strict"; return (' +
                    expression.replace(/×/g, "*").replace(/÷/g, "/") +
                    ')'
                )();

                display.value = result;
                expression = String(result);

            } catch {
                display.value = "Error";
                expression = "";
            }
        }

        else {
            expression += value;
            display.value = expression;
        }

    });
});
