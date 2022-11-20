import React from "react"

export default function User() {
    const [userName, setUserName] = React.useState("catana")
    const [userProfile, setuserProfile] = React.useState("assets/img/catanacomics.svg")
    return (
        <Profile userNick="catanacomics" userName={userName} userProfile={userProfile} />
    )


    function Profile(props) {
        if (!props.userProfile) {
            setuserProfile("assets/img/catanacomics.svg")
        }
        return (
            <div className="usuario" data-test="user">
                <img data-test="profile-image"onClick={changeUserImg} src={props.userProfile} />
                <div className="texto">
                    <strong>{props.userNick}</strong>
                    <span data-test="name">
                        {props.userName}
                        <ion-icon onClick={changeUsername} name="pencil" data-test="edit-name"></ion-icon>
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