
export const authMethods = {
    checkLog: () => {
        const token = localStorage.getItem("access_token");
        if (token){
            return true;
        }else{
            console.log('No user found!');
            return false;
        }
    },
    logout: () => {
        localStorage.removeItem("access_token");
    },
    login: (token) => {
        localStorage.setItem("access_token", token);
    },
    getToken: () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem("access_token");
    }
};

