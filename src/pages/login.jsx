import { useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {auth} from '../firebase-config';
import { useNavigate } from "react-router-dom";


const Login = () => {
    //a conta teste foi bloqueada no firebase, trocar a senha
    /*TODO: quando clicar no botão sem inserir usuario
    e senha rendenizar mensagem pedindo para preencher os campos */
    const [loginUser, setLoginUser] = useState();
    const [user, setUser] = useState({});
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
    })

    const signin = async(e) => {
        //DONE: TODO: mover checagem de preenchimento dos campos para antes da promisse.
        e.preventDefault();
        try {
           if(loginUser == null){ alert("insira um email"); return}
           else if (password == null) {alert("insira uma senha"); return}

           const user = await signInWithEmailAndPassword(auth,loginUser,password);
           navigate("/controle", {replace: true});
        } catch (e) {
            console.log(e);
            alert(e);
        }
        
    }

    const LogOut = async() => {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e)
        }
    }

//flex flex-col items-center justify-center py-12 px-4 max-w-md min-h-screen w-full space-y-8
return(
   <div className="flex flex-col items-center min-h-screen w-full justify-center">
       <form className="mt-8 space-y-6" method="post">
           <input type="hidden" name="remember" defaultValue={true} />
           <div className="space-y-4">
               <div>
                   <label className="sr-only" htmlFor="email-address">
                       Login
                   </label>
                   <input className=
                   "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Crmv" name="login" id="crm"
                  onChange={(e)=>setLoginUser(e.target.value)} />
               </div>
               <div>
                   <label className="sr-only" htmlFor="email-address">
                       password
                   </label>

                   <input className=
                   "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                  name="password"
                  id="password"
                  type='password'
                  onChange={ (e) => setPassword(e.target.value) }/>
               </div>
           </div>
           <div>
            <button className="group relative border w-full
            flex justify-center py-2 px-4 border-transparent
            font-medium rounded-md bg-indigo-600 text-white
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            // type="submit"
            onClick={ (e) => signin(e)}>
                Login
            </button>
           </div>
           <div>
               <div>
               <a className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => LogOut()}>
                    log out
                </a>
                <br />
                <a className="font-medium text-indigo-600 hover:text-indigo-500"
                href="#">
                    Esqueceu sua senha ?
                </a>
               </div>
               {user?.email}
           </div>
           
       </form>
   </div>
    )
}

export default Login;