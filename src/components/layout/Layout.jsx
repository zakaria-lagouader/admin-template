import Main from "./Main"
import Navbar from "./Navbar"

function Layout({ children, mid }) {
    return (
        <>
            <Navbar />
            <Main mid={mid}>
                {children}
            </Main>
        </>
    )
}

export default Layout