import EjemplosPortfolio from "../EjemplosPortfolio/EjemplosPortfolio"
import Webs from "../Webs/Webs"

const Portfolio = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className="titles">Portfolio</h2>
                    <EjemplosPortfolio/>
                    <Webs/>
            </div>
        </div>
    )
}

export default Portfolio
