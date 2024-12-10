const assert = require('assert');
const { floydWarshall } = require('./code'); // Import the function to test

function runTests() {
    // Test cases stored in an array for simplicity
    const tests = [
        {
            description: "Single-node graph",
            input: [[0]],
            expected: [[0]]
        },
        {
            description: "Fully connected graph",
            input: [
                [0, 3, Infinity],
                [3, 0, 1],
                [Infinity, 1, 0]
            ],
            expected: [
                [0, 3, 4],
                [3, 0, 1],
                [4, 1, 0]
            ]
        },
        {
            description: "Disconnected graph",
            input: [
                [0, Infinity, Infinity],
                [Infinity, 0, Infinity],
                [Infinity, Infinity, 0]
            ],
            expected: [
                [0, Infinity, Infinity],
                [Infinity, 0, Infinity],
                [Infinity, Infinity, 0]
            ]
        },
        {
            description: "Mixed connections",
            input: [
                [0, 1, Infinity, Infinity],
                [1, 0, 2, 1],
                [Infinity, 2, 0, 3],
                [Infinity, 1, 3, 0]
            ],
            expected: [
                [0, 1, 3, 2],
                [1, 0, 2, 1],
                [3, 2, 0, 3],
                [2, 1, 3, 0]
            ]
        },
        {
            description: "Empty graph",
            input: [],
            expected: []
        }
    ];

    // Run each test case
    tests.forEach(({ description, input, expected }) => {
        const result = floydWarshall(input);
        try {
            assert.deepStrictEqual(result, expected);
            console.log(` ${description} passed.`);
        } catch (err) {
            console.error(` ${description} failed. Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}`);
        }
    });

    console.log("All tests completed.");
}

runTests();
