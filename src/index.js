import ReactDOM from "react-dom"
import Navbar from "./components/navbar"
import Body from "./components/body"



function App() {
    return (
        <div>
            <Navbar />
            <Body />
        </div>

    )
}




const html = App()
const elemento = document.querySelector(".root")
ReactDOM.render(html, elemento)