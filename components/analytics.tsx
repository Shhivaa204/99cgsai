"use client";
import {useEffect,useState} from "react";
export function Analytics(){
 const [consent,setConsent]=useState<"accepted"|"rejected"|null>(null);
 useEffect(()=>{setConsent(localStorage.getItem("99cgs-cookie-consent") as "accepted"|"rejected"|null)},[]);
 function choose(value:"accepted"|"rejected"){localStorage.setItem("99cgs-cookie-consent",value);setConsent(value)}
 if(consent) return null;
 return <div className="cookie-banner"><p>We use cookies for analytics. You can accept or reject.</p><button onClick={()=>choose("accepted")}>Accept</button><button onClick={()=>choose("rejected")}>Reject</button></div>;
}