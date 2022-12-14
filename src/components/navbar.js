export default function Navbar() {
    return (
        <div>
            <div class="navbar">
                <div class="container">
                    <div class="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="separador"></div>
                        <img src="assets/img/logo.png" />
                    </div>


                    <div class="logo-mobile">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>

                    <div class="instagram-mobile">
                        <img src="assets/img/logo.png" />
                    </div>

                    <div class="pesquisa">
                        <input type="text" placeholder="Pesquisar" />
                    </div>

                    <div class="icones">
                        <Icon name="paper-plane-outline" />
                        <Icon name="compass-outline" />
                        <Icon name="heart-outline" />
                        <Icon name="person-outline" />

                    </div>

                    <div class="icones-mobile">
                        <Icon name="paper-plane-outline" />
                    </div>
                </div>
            </div>
        </div> ///final


    )
}

function Icon(props) {
    return (
        <ion-icon name={props.name}></ion-icon>

    )
}

