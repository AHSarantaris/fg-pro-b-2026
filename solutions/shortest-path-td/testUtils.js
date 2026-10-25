
// ---------------------- //
// testUtils.js - A small collection of helper functions for writing unit tests.
// You should NOT change this file.
//
// Available functions:
//   test(description, fn)          - runs fn as a test and reports PASS/FAIL
//                                    (one failing test does not stop the others)
//   describe(groupName)            - sets the group (e.g. the class under test);
//                                    shown as a section header and printed as
//                                    "[groupName]" in front of every result
//   assertEquals(actual, expected) - fails if actual !== expected.
//                                    Also works on arrays / nested arrays.
//   assertTrue(condition)          - fails if condition is false
//   assertThrows(fn)               - fails if fn does not throw an error
//
// Results are written to the console (F12) and to the tests.html page
// when the tests are run from there.
// ---------------------- //

let testPassedCount = 0;
let testFailedCount = 0;
let currentTestGroup = "";

// Sets the current test group (e.g. the class under test). The group name is
// printed as a section header and prefixed as "[groupName]" on every result.
function describe(groupName) {
    currentTestGroup = groupName;
    console.log("== " + groupName + " ==");
    reportToPage("== " + groupName + " ==", null);
}

function test(name, fn) {
    const label = currentTestGroup === "" ? "" : "[" + currentTestGroup + "] ";
    try {
        fn();
        testPassedCount++;
        console.log("  PASS  " + label + name);
        reportToPage("PASS  " + label + name, false);
    } catch (err) {
        testFailedCount++;
        console.error("  FAIL  " + label + name + " - " + err.message);
        reportToPage("FAIL  " + label + name + " - " + err.message, true);
    }
    updateSummary();
}

function assertEquals(actual, expected, message) {
    const a = JSON.stringify(actual);
    const e = JSON.stringify(expected);
    if (a !== e) {
        throw new Error((message ? message + " " : "") + "Expected " + e + ", got " + a);
    }
}

function assertTrue(condition, message) {
    if (!condition) {
        throw new Error(message || "Expected true, got " + condition);
    }
}

function assertThrows(fn, message) {
    let threw = false;
    try {
        fn();
    } catch (err) {
        threw = true;
    }
    if (!threw) {
        throw new Error(message || "Expected the function to throw an error, but it did not");
    }
}

// Writes the result to the page when the tests run in tests.html.
function reportToPage(text, isError) {
    if (typeof document === "undefined") return;
    const list = document.getElementById("test-results");
    if (!list) return;
    const li = document.createElement("li");
    li.textContent = text;
    li.className = isError === null ? "group" : (isError ? "fail" : "pass");
    list.appendChild(li);
}

function updateSummary() {
    if (typeof document === "undefined") return;
    const el = document.getElementById("test-summary");
    if (!el) return;
    el.textContent = testPassedCount + " passed, " + testFailedCount + " failed";
    el.className = testFailedCount > 0 ? "fail" : "pass";
}
