
export const authMethods = {
    checkLog: () => {
        const token = localStorage.getItem("id_token");
        if (token){
            return true;
        }else{
            console.log('No user found!');
            return false;
        }
    },
    logout: () => {
        localStorage.removeItem("id_token");
    },
    login: (token) => {
        localStorage.setItem("id_token", token);
    },
    getToken: () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem("id_token");
    }
};

