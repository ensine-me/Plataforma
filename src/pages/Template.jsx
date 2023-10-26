import MiniDrawer from "../components/SideBar"
import MarcarAula from "../components/marcarAula";
import sPlat from "../assets/styles/template.module.css"

const Template = () => {
    return (
        <>
            <MiniDrawer />
            <div className={sPlat.box}>
                <MarcarAula/>
            </div>
        </>
    )
}

export default Template;