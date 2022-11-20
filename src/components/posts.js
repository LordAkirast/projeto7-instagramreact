import React from "react"

let i = 0;

export default function Posts() {
  const [bookmarkClicked,setbookmarkClicked] = React.useState("bookmark-outline")

  return (
    <div class="posts">
      <Post userImage="assets/img/meowed.svg" userName="meowed" userPost="assets/img/gato-telefone.svg" userFavImage="assets/img/respondeai.svg" userFav="respondeai" likeQtd="101.523" />
      <Post userImage="assets/img/barked.svg" userName="barked" userPost="assets/img/dog.svg" userFavImage="assets/img/adorable_animals.svg" userFav="adorable_animals" likeQtd="99.159" />
    </div>
  )

  function Post(props) {
    return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.userImage} />
            {props.userName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.userPost} data-test="post-image"/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div> 
               <ion-icon data-test="save-post" onClick={bookmarkClick} name={bookmarkClicked}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.userFavImage} />
            <div class="texto" data-test="likes-number">
              Curtido por <strong>{props.userFav}</strong> e <strong>outras {props.likeQtd} pessoas</strong>
            </div>
          </div>
        </div>
      </div>

    )
  }

  function bookmarkClick() {
    if (i === 0) {
    setbookmarkClicked("bookmark-sharp")
    i = i + 1
   } else if (i === 1) {
    setbookmarkClicked("bookmark-outline")
    i = i - 1;
   }
}
}

