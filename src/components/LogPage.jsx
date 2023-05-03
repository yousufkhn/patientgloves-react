import "./LogPage.css"

export default function LogPage({ logList }) {

    const reversedLogList = [...logList].reverse();

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Patient Log <img src={require("../assets/images/notepad.png")} alt="" style={{ height: "2.1rem" }} /></h1>

            <div className="logContainer" style={{ height: "70vh", overflow: "auto", borderRadius: "2rem" }}>
                {
                    reversedLogList.map((article) => (
                        <div key={article.timestamp} className="latestCardcard" style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }} >
                            <div className="latestCardcard__body">
                                <h4>{article.text}</h4>
                                <span>{article.timestamp}</span>
                            </div>
                        </div>
                    ))

                }
            </div>

        </>
    )
}