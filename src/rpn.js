'use strict';

const re = /^[\+\-\/\*]$/;

module.exports = {
    rpn: (input, cb) => {
        let data = input.split(/\s+/),
            stack = [],
            item = null;

        while (item = data.shift()) {
            if (!isNaN(item)) stack.push(item); //if number then put him on stack
            else {
                if (stack.length < 2 || !re.test(item)) return cb(`Invalid expression: ${input}`);
                else {
                    let number2 = stack.pop(),
                        number1 = stack.pop(),
                        operator = item;

                    stack.push(eval(`${number1}${operator}${number2}`));
                }
            }

            if (data.length === 0 && stack.length > 1) return cb(`Invalid expression: ${input}`);
        }

        return cb(null, stack[0]); //return result
    }
};
