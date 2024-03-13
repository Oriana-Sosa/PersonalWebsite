import styles from "./Footer.css"
import linkedin from "./../../assets/linkedin.png"
import github from "./../../assets/github.png"

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="footer p-2 d-flex ">
          <div className="col-6">
            <p className="footerName m-2">Oriana Sosa</p>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-end">
            <a href="https://www.linkedin.com/in/oriana-sosa/" target="_blank" rel="noopener noreferrer"><img src={linkedin} width="50px" height="50px" alt="" /></a>
            <a href="https://github.com/Oriana-Sosa" target="_blank" rel="noopener noreferrer"><img src={github}  width="50px" height="50px" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Footer
