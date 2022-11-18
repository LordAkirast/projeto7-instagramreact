import ReactDOM from "react-dom"
import Navbar from "./components/navbar"
import Body from "./components/body"
import Posts from "./components/posts"
import Sidebar from "./components/sidebar"
import Stories from "./components/stories"
import Suggestions from "./components/suggestions"
import User from "./components/user" 



function App() {
    return (
        <div>
            <Navbar />
            <Body />
            <Posts/>
            <Sidebar/>
            <Stories/>
            <Suggestions/>
            <User/>
        </div>

    )
}




const html = App()
const elemento = document.querySelector(".root")
ReactDOM.render(html, elemento)