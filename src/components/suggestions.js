export default function Suggestions() {
    return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <Suggested reason="Segue você" userSuggestedImg="assets/img/bad.vibes.memes.svg" userSuggested="bad_vibes_memes"/>
        <Suggested reason="Segue você" userSuggestedImg="assets/img/chibirdart.svg" userSuggested="chibirdart"/>
        <Suggested reason="Novo no Instagram" userSuggestedImg="assets/img/razoesparaacreditar.svg" userSuggested="razoesparaacreditar"/>
        <Suggested reason="Segue você" userSuggestedImg="assets/img/adorable_animals.svg" userSuggested="adorable_animals"/>
        <Suggested reason="Segue você" userSuggestedImg="assets/img/smallcutecats.svg" userSuggested="smallcutecats"/>
      </div>
    )

function Suggested(props) {
    return(
        <div class="sugestao">
          <div class="usuario">
            <img src={props.userSuggestedImg}/>
            <div class="texto">
              <div class="nome">{props.userSuggested}</div>
              <div class="razao">{props.reason}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
    )
}
}