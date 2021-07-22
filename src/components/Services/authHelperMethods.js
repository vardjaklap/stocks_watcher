export default class AuthHelperMethods {
    constructor(domain) {
        this.domain = domain || "http://localhost:3000"; // API server domain
    }
    login = (username, password) => {

    };

    loggedIn = () => {
        // Checks token
        const token = this.getToken(); // Getting token from localstorage
        if(!token){
            return false
        }else{
            return token
        }
    };

    setToken = idToken => {
        // Saves user token to localStorage
        localStorage.setItem("id_token", idToken);
    };

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem("id_token");
    };

    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem("id_token");
    };


}