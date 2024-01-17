function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password) {
    if(password.length >= 8 && /^[a-zA-Z#$%0-9]+$/.test(password)){
        return true;
    }
    return false;
}
function changeOfPath(path){
    if(path !== '/'){
        document.querySelector('.signin-link').href = '/';
        document.querySelector('.signin-link').innerHTML = 'Home';
    }
}
export { isValidEmail, isValidPassword, changeOfPath };