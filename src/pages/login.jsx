
const Login = () => {
return(
   <div className="flex items-center justify-center py-12 px-4 max-w-md w-full space-y-8">
       <form className="mt-8 space-y-6" method="post">
           <input type="hidden" name="remember" defaultValue={true} />
           <div className="space-y-4">
               <div>
                   <label className="sr-only" htmlFor="email-address">
                       Login
                   </label>
                   <input className=
                   "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="login" name="login" id="crm" />
               </div>
               <div>
                   <label className="sr-only" htmlFor="email-address">
                       password
                   </label>

                   <input className=
                   "appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="password"
                  name="password"
                  id="password"
                  type='password'/>
               </div>
           </div>
           <div>
            <button className="group relative border w-full
            flex justify-center py-2 px-4 border-transparent
            font-medium rounded-md bg-indigo-600 text-white
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit">
                Login
            </button>
           </div>
           <div>
               <div>
                <a className="font-medium text-indigo-600 hover:text-indigo-500"
                href="#">
                    Esqueceu sua senha ?
                </a>
               </div>
           </div>
           
       </form>
   </div>
    )
}

export default Login;