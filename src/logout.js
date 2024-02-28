async function Logout(navigatefun){
    localStorage.clear();
    navigatefun("/");
}
export default Logout;