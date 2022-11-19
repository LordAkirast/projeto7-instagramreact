import Suggestions from "./suggestions"

export default function Sidebar() {
    return (
        <div class="sidebar">
       <Profile userNick="catanacomics" userName="catana"/>
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
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>{props.userNick}</strong>
            <span>
            {props.userName}
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )

}
}