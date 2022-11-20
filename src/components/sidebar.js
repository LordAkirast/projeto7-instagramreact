import Suggestions from "./suggestions"
import React from "react"
import User from "./user"

export default function Sidebar() {
    const[userName,setUserName] = React.useState("catana")
    const[userProfile,setuserProfile] = React.useState("assets/img/catanacomics.svg")

    return (
        <div class="sidebar">
       <User/>
       <Suggestions/>

      

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}