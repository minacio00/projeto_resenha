import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const ImgMap = ()=> {
    // const popable = document.querySelectorAll('popable');
    let lastClicked; 
    // popable.forEach(elem => elem.addEventListener('click', togglePopup));
    const [user, setUser] = useState({});
            
    const navigate = useNavigate();

    useEffect(()=> {
        const popable = document.getElementsByClassName('popable');
        // Array.from(popable).forEach(elem => elem.addEventListener('click', (elem)=>togglePopup));
        // Array.from(popable).forEach(elem => console.log("amado",elem));
        // console.log("teste",popable);
    });

    //if the user is not logged in redirects into login page;
    onAuthStateChanged(auth,(currentUser) => {
        if(!currentUser){
            navigate("/", {replace: true});
        }
        setUser(currentUser);
    })


    
    function togglePopup(e) {
        e.preventDefault();
        // popup.innerText = e.target.dataset.text;
        alert("amado")
      
        // If  clicking something else, first restore '.hidden' to popup so that toggle will remove it.
        if (lastClicked !== e.target) {
          popup.classList.add('hidden');
        }
        popup.classList.toggle('hidden');
        lastClicked = e.target;  // remember the target
      };
    function handleClick(e){
        e.preventDefault();
        alert('amado');
    }

    return(
        <>
            <h1 className="text-3xl font-bold text-yellow-400">The map and area elements</h1>
            <p>Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:</p>

            <img src="workplace.jpg" alt="Workplace" useMap="#workmap" width="400" height="379"/>
            <map name="workmap">
                <area shape="rect" coords="34,44,270,350" alt="Computer" onClick={e => handleClick(e)} className="popable"/>
                <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" className="popable"/>
                <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm"className="popable"/>
            </map>
        </>

    );
}

export default ImgMap;