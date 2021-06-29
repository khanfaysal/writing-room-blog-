import firebase from "firebase/app";
import "firebase/auth";
import React from 'react';
import { useForm } from "react-hook-form";
// import { useHistory, useLocation } from "react-router-dom";
// import { context } from '../../App';
import firebaseConfig from '../lib/firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  

const Login = () => {
    // const {User, setUser}=useContext(context)
    const {register,formState: { errors }} = useForm();

    // let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };
    // const onSubmit = data => {

    //     if (data.email && data.password) {
    //         firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    //         .then((userCredential) => {
                
    //           var user = userCredential.user;
    //           const userLoggedIn  = {...data}
    //           userLoggedIn.isSignedIn = true;
    //           setUser(userLoggedIn);
    //           history.replace(from);
            
    //         })
    //         .catch((error) => {
      
    //           var errorMessage = error.message;
    //             const userError = {...data};
    //             userError.isSignedIn = false;
    //             userError.error = errorMessage;
    //             setUser(userError);
      
    //         });
            
    //     }
    //             reset()
    // }
    // console.log(User);
    // onSubmit={handleSubmit(onSubmit)}
    return (
        <div className="flex flex-wrap justify-center w-full  my-6 pr-0 lg:pr-2">
            <form class="p-10 bg-secondary rounded shadow-xl border-t-2" >
              
                <label className="mt-2 block text-sm text-gray-600 capitalize">Email</label>
                <input class="pb-3 w-full" type="email"{...register("email", { required: true })} placeholder=""/>
                {errors.email && <p className="error">Email is required</p>}<br />
  
                <label className="mt-2 block text-sm text-gray-600 capitalize">password</label>
                <input class="pb-3 w-full" type="password"{...register("categoryTitle", { required: true })} placeholder=""/>
                {errors.password && <p className="error">Password is required</p>}<br />
  
                <input class="mt-6 px-4 py-1 text-white font-bold uppercase tracking-wider bg-primary rounded" type="submit" />
              </form>
    </div>
    );
};

export default Login;