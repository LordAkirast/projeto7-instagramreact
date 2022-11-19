import Suggestions from "./suggestions"
import React from "react"

export default function Sidebar() {
    const[userName,setUserName] = React.useState("catana")
    const[userProfile,setuserProfile] = React.useState("assets/img/catanacomics.svg")

    return (
        <div class="sidebar">
       <Profile userNick="catanacomics" userName={userName} userProfile={userProfile}/>
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

function Profile(props) {
    return (
        <div class="usuario">
          <img onClick={changeUserImg} src={props.userProfile} />
          <div class="texto">
            <strong>{props.userNick}</strong>
            <span>
            {props.userName}
              <ion-icon onClick={changeUsername} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )

}

function changeUsername() {
    setUserName(prompt("Entre com o seu nome de usuário: "))
}

function changeUserImg() {
    setuserProfile(prompt("Entre com a URL da imagem: "))

}
}