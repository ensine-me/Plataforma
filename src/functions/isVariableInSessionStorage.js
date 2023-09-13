export function isVariableInSessionStorage(key) {
    // Retrieve the value from session storage
    var value = sessionStorage.getItem(key);

    // Check if the value is not null or undefined
    return value !== null && value !== undefined;
}