function setUser(name, email) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
}
function getUser() {
    return {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email')
    };
}
function removeUser() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
}
function setEmail(email) {
    localStorage.setItem('email', email);
}
function setName(name) {
    localStorage.setItem('name', name);
}
export { setEmail, setName, setUser, getUser, removeUser};