import React from "react"

let b = 0;
let h = 0;
let likeQtd = 980;

export default function Posts() {


  return (
    <div className="posts">
      <Post key="1" level="first-level" userImage="assets/img/meowed.svg" userName="meowed" userPost="assets/img/gato-telefone.svg" userFavImage="assets/img/respondeai.svg" userFav="respondeai" />
      <Post key="2" level="second-level" userImage="assets/img/barked.svg" userName="barked" userPost="assets/img/dog.svg" userFavImage="assets/img/adorable_animals.svg" userFav="adorable_animals" likeQtd="99.159" />
    </div>
  )

  function Post(props) {

    const [bookmarkClicked, setbookmarkClicked] = React.useState("bookmark-outline")
    const [heartClicked, setheartClicked] = React.useState("heart-outline")
    return (
      <div className="post" data-test="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.userImage} />
            {props.userName}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.userPost} onDoubleClick={imgClick} data-test="post-image" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ul className={props.level}>
                <li className="defaultHeart" onClick={heartClick} data-test="like-post"><ion-icon name={heartClicked}></ion-icon></li>
                <li><ion-icon name="chatbubble-outline"></ion-icon> </li>
                <li> <ion-icon name="paper-plane-outline"></ion-icon> </li>
              </ul>
            </div>
            <div className="defaultBook">
              <ion-icon data-test="save-post" onClick={bookmarkClick} name={bookmarkClicked}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.userFavImage} />
            <div className="texto" data-test="likes-number">
              Curtido por <strong>{props.userFav}</strong> e <strong>outras {likeQtd} pessoas</strong>
            </div>
          </div>
        </div>
      </div>

    )

    function heartClick() {
      let element = document.querySelector('.defaultHeart')
      element.classList.toggle('clickedHeart')

      if (h === 0) {
        setheartClicked("heart-sharp")
        h = h + 1
        likeQtd += 1
      } else if (h === 1) {
        setheartClicked("heart-outline")
        h = h - 1;
        likeQtd -= 1

      }
    }

    function imgClick() {
      if (h === 0) {
        let element = document.querySelector('.defaultHeart')
        element.classList.toggle('clickedHeart')
        setheartClicked("heart-sharp")
        h = h + 1
        likeQtd += 1
      }
    }





    function bookmarkClick() {
      let element = document.querySelector('.defaultBook')
      element.classList.toggle('clickedBook')
      if (b === 0) {
        setbookmarkClicked("bookmark-sharp")
        b = b + 1
      } else if (b === 1) {
        setbookmarkClicked("bookmark-outline")
        b = b - 1;
      }
    }
  }
}



