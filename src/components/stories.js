export default function Stories() {
    return (
            <div className="stories">
                <Story user="meowed" image="assets/img/meowed.svg"/>
                <Story user="barked" image="assets/img/barked.svg"/>
                <Story user="nathanwpylestrangeplanet" image="assets/img/nathanwpylestrangeplanet.svg"/>
                <Story user="wawawicomics" image="assets/img/wawawicomics.svg"/>
                <Story user="respondeai" image="assets/img/respondeai.svg"/>
                <Story user="filomoderna" image="assets/img/filomoderna.svg"/>
                <Story user="memeriagourmet" image="assets/img/memeriagourmet.svg"/>

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )


    function Story(props) {
        return (
            <div className="story">
                    <div className="imagem">
                        <img src={props.image} />
                    </div>
                    <div className="usuario">
                        {props.user}
                    </div>
                </div>
        )
    }
    
    
    
    function Icon(props) {
        return (
            <ion-icon name={props.name}></ion-icon>
    
        )
    }
}


