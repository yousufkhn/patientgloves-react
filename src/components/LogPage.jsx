import "./LogPage.css"

export default function LogPage() {

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Patient Log <img src={require("../assets/images/notepad.png")} alt="" style={{ height: "2.1rem" }} /></h1>

            <div className="logContainer" style={{ height: "70vh", overflow: "auto", borderRadius: "2rem" }}>

                <div className="latestCardcard" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }} >
                    <div className="latestCardcard__body">
                        <h4>hihihihihihihihihihi</h4>
                        <span>TimeStamp</span>
                    </div>
                </div>

            </div>

        </>
    )
}