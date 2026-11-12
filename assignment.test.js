const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Read the student's assignment
const assignmentPath = path.join(__dirname, 'assignment.js');
const code = fs.readFileSync(assignmentPath, 'utf8');

// Create an isolated JavaScript environment
const context = vm.createContext({ console });

// Execute the student's code
let executionError = null;

try {
    vm.runInContext(code, context);
} catch (error) {
    executionError = error;
}

// Read a variable from the student's code
function getVariable(name) {
    try {
        return vm.runInContext(name, context);
    } catch (error) {
        return undefined;
    }
}

// Check whether a variable has been declared
function isDeclared(name) {
    const pattern = new RegExp(
        `\\b(let|const|var)\\s+${name}\\b`
    );

    return pattern.test(code);
}

// Check JavaScript syntax
test('Assignment must have valid JavaScript syntax', () => {
    assert.ifError(executionError);
});

// ==========================================
// PART 1: ARITHMETIC OPERATORS
// ==========================================

test('Q1: firstNumber must equal 20', () => {
    assert.ok(isDeclared('firstNumber'));
    assert.strictEqual(getVariable('firstNumber'), 20);
});

test('Q2: secondNumber must equal 5', () => {
    assert.ok(isDeclared('secondNumber'));
    assert.strictEqual(getVariable('secondNumber'), 5);
});

test('Q3: Addition result must equal 25', () => {
    assert.ok(isDeclared('additionResult'));
    assert.strictEqual(getVariable('additionResult'), 25);
});

test('Q4: Subtraction result must equal 15', () => {
    assert.ok(isDeclared('subtractionResult'));
    assert.strictEqual(getVariable('subtractionResult'), 15);
});

test('Q5: Multiplication result must equal 100', () => {
    assert.ok(isDeclared('multiplicationResult'));
    assert.strictEqual(getVariable('multiplicationResult'), 100);
});

test('Q6: Division result must equal 4', () => {
    assert.ok(isDeclared('divisionResult'));
    assert.strictEqual(getVariable('divisionResult'), 4);
});

test('Q7: Modulus result must equal 0', () => {
    assert.ok(isDeclared('modulusResult'));
    assert.strictEqual(getVariable('modulusResult'), 0);
});

test('Q8: Exponentiation result must equal 3200000', () => {
    assert.ok(isDeclared('exponentiationResult'));
    assert.strictEqual(getVariable('exponentiationResult'), 3200000);
});

test('Q9: Increment number must equal 11', () => {
    assert.ok(isDeclared('incrementNumber'));
    assert.strictEqual(getVariable('incrementNumber'), 11);
});

test('Q10: Decrement number must equal 9', () => {
    assert.ok(isDeclared('decrementNumber'));
    assert.strictEqual(getVariable('decrementNumber'), 9);
});

// ==========================================
// PART 2: ASSIGNMENT OPERATORS
// ==========================================

test('Q11: Score must equal 50', () => {
    assert.ok(isDeclared('score'));
    assert.strictEqual(getVariable('score'), 50);
});

test('Q12: Addition score must equal 30', () => {
    assert.ok(isDeclared('additionScore'));
    assert.strictEqual(getVariable('additionScore'), 30);
});

test('Q13: Subtraction score must equal 35', () => {
    assert.ok(isDeclared('subtractionScore'));
    assert.strictEqual(getVariable('subtractionScore'), 35);
});

test('Q14: Multiplication score must equal 20', () => {
    assert.ok(isDeclared('multiplicationScore'));
    assert.strictEqual(getVariable('multiplicationScore'), 20);
});

test('Q15: Division score must equal 20', () => {
    assert.ok(isDeclared('divisionScore'));
    assert.strictEqual(getVariable('divisionScore'), 20);
});

test('Q16: Modulus score must equal 2', () => {
    assert.ok(isDeclared('modulusScore'));
    assert.strictEqual(getVariable('modulusScore'), 2);
});

test('Q17: Exponentiation score must equal 9', () => {
    assert.ok(isDeclared('exponentiationScore'));
    assert.strictEqual(getVariable('exponentiationScore'), 9);
});


// ==========================================
// PART 3: LOGICAL OPERATORS
// ==========================================

test('Q18: isAdult must equal true', () => {
    assert.ok(isDeclared('isAdult'));
    assert.strictEqual(getVariable('isAdult'), true);
});

test('Q19: hasID must equal true', () => {
    assert.ok(isDeclared('hasID'));
    assert.strictEqual(getVariable('hasID'), true);
});

test('Q20: canEnter must equal true', () => {
    assert.ok(isDeclared('canEnter'));
    assert.strictEqual(getVariable('canEnter'), true);
});

test('Q21: hasTicket must equal false', () => {
    assert.ok(isDeclared('hasTicket'));
    assert.strictEqual(getVariable('hasTicket'), false);
});

test('Q22: canAccess must equal true', () => {
    assert.ok(isDeclared('canAccess'));
    assert.strictEqual(getVariable('canAccess'), true);
});

test('Q23: isBlocked must equal true', () => {
    assert.ok(isDeclared('isBlocked'));
    assert.strictEqual(getVariable('isBlocked'), true);
});

test('Q24: isAllowed must equal false', () => {
    assert.ok(isDeclared('isAllowed'));
    assert.strictEqual(getVariable('isAllowed'), false);
});


// ==========================================
// PART 4: COMPARISON OPERATORS
// ==========================================

test('Q25: equalResult must equal true', () => {
    assert.ok(isDeclared('equalResult'));
    assert.strictEqual(getVariable('equalResult'), true);
});

test('Q26: strictEqualResult must equal false', () => {
    assert.ok(isDeclared('strictEqualResult'));
    assert.strictEqual(getVariable('strictEqualResult'), false);
});

test('Q27: notEqualResult must equal true', () => {
    assert.ok(isDeclared('notEqualResult'));
    assert.strictEqual(getVariable('notEqualResult'), true);
});

test('Q28: strictNotEqualResult must equal true', () => {
    assert.ok(isDeclared('strictNotEqualResult'));
    assert.strictEqual(getVariable('strictNotEqualResult'), true);
});

test('Q29: greaterThanResult must equal true', () => {
    assert.ok(isDeclared('greaterThanResult'));
    assert.strictEqual(getVariable('greaterThanResult'), true);
});

test('Q30: lessThanResult must equal true', () => {
    assert.ok(isDeclared('lessThanResult'));
    assert.strictEqual(getVariable('lessThanResult'), true);
});

test('Q31: greaterOrEqualResult must equal true', () => {
    assert.ok(isDeclared('greaterOrEqualResult'));
    assert.strictEqual(getVariable('greaterOrEqualResult'), true);
});

test('Q32: lessOrEqualResult must equal true', () => {
    assert.ok(isDeclared('lessOrEqualResult'));
    assert.strictEqual(getVariable('lessOrEqualResult'), true);
});


// ==========================================
// PART 5: STRING OPERATORS
// ==========================================

test('Q33: firstName must equal Hassan', () => {
    assert.ok(isDeclared('firstName'));
    assert.strictEqual(getVariable('firstName'), 'Hassan');
});

test('Q34: lastName must equal Abdi', () => {
    assert.ok(isDeclared('lastName'));
    assert.strictEqual(getVariable('lastName'), 'Abdi');
});

test('Q35: fullName must equal Hassan Abdi', () => {
    assert.ok(isDeclared('fullName'));
    assert.strictEqual(getVariable('fullName'), 'Hassan Abdi');
});

test('Q36: welcomeMessage must equal Welcome to JavaScript', () => {
    assert.ok(isDeclared('welcomeMessage'));
    assert.strictEqual(
        getVariable('welcomeMessage'),
        'Welcome to JavaScript'
    );
});

