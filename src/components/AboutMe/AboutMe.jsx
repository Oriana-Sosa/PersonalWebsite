import styles from "./AboutMe.css"
import guarda from "./../../assets/guardaSitioWeb.png"

const AboutMe = () => {
    return (
        <div className="container p-5 aboutMeContainer"><a name="aboutMe"></a>
            <div className="row">  
            <h2 className="titles mb-4">Sobre mi</h2>
                <div className="col-lg-6 aboutMe">  
                    <p className="aboutMeP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta iure reiciendis, architecto omnis magnam blanditiis et non perferendis, repellendus laborum voluptatum modi? Minus nisi, ad voluptatem praesentium maxime mollitia!</p>
                    <p className="aboutMeP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta iure reiciendis, architecto omnis magnam blanditiis et non perferendis, repellendus laborum voluptatum modi? Minus nisi, ad voluptatem praesentium maxime mollitia!</p>
                    <img src={guarda} className="guardaAboutMe" alt="" />
                </div>
                <div className="col-lg-6 aboutMeGreen text-center" >
                <p className="aboutMeP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta iure reiciendis, architecto omnis magnam blanditiis et non perferendis, repellendus laborum voluptatum modi? Minus nisi, ad voluptatem praesentium maxime mollitia!</p>
                    <p className="aboutMeP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta iure reiciendis, architecto omnis magnam blanditiis et non perferendis, repellendus laborum voluptatum modi? Minus nisi, ad voluptatem praesentium maxime mollitia!</p>
                    <p className="aboutMeP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta iure reiciendis, architecto omnis magnam blanditiis et non perferendis, repellendus laborum voluptatum modi? Minus nisi, ad voluptatem praesentium maxime mollitia!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
