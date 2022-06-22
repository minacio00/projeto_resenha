import { useEffect, useState, useRef } from "react";
import { ArrowLeftIcon, MenuIcon, UserAddIcon, DocumentAddIcon,
    UserIcon, HomeIcon, CogIcon, QuestionMarkCircleIcon, LogoutIcon
}
 from "@heroicons/react/solid";
import { useNavigate,Link } from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from '../firebase-config';


export const Sidebar = () => {
   const navigate = useNavigate();
   const [hidden, setHidden] = useState(true)
   const [user, setUser] = useState('');
   // // useEffect(() => {
   // //   setHidden(!isHidden)
   // // }, [isHidden])
   const handleClick = ()=>{
      setHidden(!hidden)
     
      // alert(hidden)
   }
   function useOutsideAlerter(ref) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target) && !hidden) {
            // alert("You clicked outside of me!");
            setHidden(!hidden)
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref,hidden]);
    }
   const LogOut = async () => {
      try {
         await signOut(auth);
      } catch (e) {
         console.log(e)
      }
   };
   onAuthStateChanged(auth, (currentUser) => {
      // console.log(auth)
      if (!currentUser) {
         navigate('/', { replace: true })
      }
      else {
         setUser(currentUser)
      }

   })
// co

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
   
    return(
       <>
       <MenuIcon className={`w-6 h-6 m-3 hover:cursor-pointer `} onClick={handleClick}/>
         <div ref={wrapperRef} className={` indent-0 ${hidden ? 'hidden' : " " } w-3/5 bg-slate-50 px-2 text-center fixed pt-8 pin-t pin-l h-screen border-r-4 border-grey-dark text-black`}
        >
               <div className={` relative mx-auto`}
               >
                  
                  <ArrowLeftIcon className=" mb-4 w-5 h-5 hover:cursor-pointer hover:bg-gray-100" onClick={handleClick}/>
                  <ul className="list-reset flex flex-col text-center" >
                     <div className="flex pb-4 hover:bg-gray-100">
                        
                           <li className="mr-3 flex-1 text-left">
                              <Link to={'/proprietario'}>
                                 <span className=" block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline "
                                 >
                                 <i className="fas fa-link pr-0 md:pr-3"></i>
                                 <span className=" pb-1 text-sm md:text-base text-grey-dark block">Cadastro Proprietário </span>
                                 
                                 </span>
                              </Link>
                           </li>
                           <UserAddIcon className="w-5 h-5"/>
                        
                     </div>
                     <div className="flex pb-4 hover:bg-gray-100">
                        <li className="mr-3 flex-1 text-left">
                           <a href="/controle" className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline "
                           >
                           <i className="fas fa-link pr-0 "></i>
                           <span className="pb-1 text-sm md:text-base text-grey-dark block">Busca Proprietário </span>
                           
                           </a>
                        </li>
                        <UserIcon className="w-5 h-5"/>
                     </div>
                     <div className="flex pb-4 hover:bg-gray-100">
                        <li className="mr-3 flex-1 text-left">
                           <Link to={"/equideo"}>
                              <span className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline "
                              >
                              <i className="fas fa-link pr-0 md:pr-3"></i>
                              <span className="pb-1 text-sm md:text-base text-grey-dark block">Cadastro Equino </span>
                              
                              </span>
                           </Link>
                        </li>
                        <DocumentAddIcon className="w-5 h-5"/>
                     </div>
                     <div className="flex pb-4 hover:bg-gray-100">
                        <li className="mr-3 flex-1 text-left">
                           <a href="/controle" className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline "
                           >
                           <i className="fas fa-link pr-0 md:pr-3"></i>
                           <span className="pb-1 text-sm md:text-base text-grey-dark block">Configurações </span>
                           
                           </a>
                        </li>
                        <CogIcon className="w-5 h-5"/>
                     </div>
                     <div className="flex pb-4 hover:bg-gray-100">
                        <li className="mr-3 flex-1 text-left">
                           <a href="/controle" className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline "
                           >
                           <i className="fas fa-link pr-0 md:pr-3"></i>
                           <span className="pb-1 text-sm md:text-base text-grey-dark block">Ajuda </span>
                           
                           </a>
                        </li>
                        <QuestionMarkCircleIcon className="w-5 h-5"/>
                     </div>
                     <div className="flex pb-4 hover:bg-gray-100">
                        <li className="mr-3 flex-1 text-left">
                           <a className="block py-1 md:py-3 pl-1 align-middle text-grey-darkest no-underline "
                           onClick={()=>{LogOut()}}>
                           <i className="fas fa-link pr-0 md:pr-3"></i>
                           <span className="pb-1 text-sm md:text-base text-grey-dark block">Sair </span>
                           
                           </a>
                        </li>
                        <LogoutIcon className="w-5 h-5"/>
                     </div>
                  </ul>
               </div>
            </div>
         </>
    )
}