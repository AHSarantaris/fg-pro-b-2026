

// ---------------------- //
// runTests.js - Test runner.
// Runs all the test files. You should NOT change this file.
// ---------------------- //

runTests();

function runTests() {
    console.log("== Starting tests ==");
    runQueueTests();
    runBinaryMatrixGraphTests();
    console.log("== " + testPassedCount + " passed, " + testFailedCount + " failed ==");
}


