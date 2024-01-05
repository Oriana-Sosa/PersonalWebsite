import EjemplosPortfolio from "../EjemplosPortfolio/EjemplosPortfolio"
import Webs from "../Webs/Webs"
import styles from "./Portfolio.css"

const Portfolio = () => {
    return (
        <div className="container contPortfolio"><a name="portfolio"></a>
            <div className="row">
                <h2 className="titles">Portfolio</h2>
                    <EjemplosPortfolio/>
                    <Webs/>
            </div>
        </div>
    )
}

export default Portfolio
