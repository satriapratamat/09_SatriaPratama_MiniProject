import { auth } from "../firebase";


    const LogIn = (e, email, password) => {
        e.preventDefault();
    
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
          })
          .catch((error) => alert(error.message));
      };
    
      const signUp = (e, email, password, displayName) => {
        e.preventDefault();

        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
          })
          .catch((error) => alert(error.message));

        auth
            .updateCurrentUser({displayName: displayName})
            .then((auth) => {

            })
            .catch((error) => {
                console.log("Register error", error)
            })
      };
    
      const LogOut = () => {
        auth
          .signOut()
          .then(() => {
          })
          .catch((error) => alert(error.message));
      };

export { LogIn, signUp, LogOut }