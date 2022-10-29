
import ReactDOM from "react-dom"

const  Loader = () => {
    return ReactDOM.createPortal (
        <div className='wrapper'>loader
            <div className="loader">
                <img src="/asset/loader.gif" alt="Loading..." />
            </div>
        </div>,
        document.getElementById("loader")
    )
}

export default Loader