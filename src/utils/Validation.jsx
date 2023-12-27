function isvaildEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isvaildPassword(password) {
    return /^[a-zA-Z#$%0-9]+$/.test(password);
}
export { isvaildEmail, isvaildPassword };