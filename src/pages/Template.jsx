import MiniDrawer from "../components/SideBar"
import sPlat from "../style/template.module.css"

const Template = () => {
    return (
        <>
            <MiniDrawer />
            <div className={sPlat.box}>
                <h3>Front alheio a sidebar</h3>
                <p>Arquivo: Template.jsx</p>
                <p>Css: template.module.css</p>
            </div>
        </>
    )
}

export default Template;