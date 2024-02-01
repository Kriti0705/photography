import Layout from "../layout";
import { Card, Row, Col } from "react-bootstrap";
import "./about.css";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/2.jpg"
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import Footer from "../layout/footer";


const About = () => {
    return (
        <Layout>
            <Card className="my-5" style={{ minHeight: "700px" }}>
                <h3 className="my-3" style={{ textAlign: "center", fontStyle: "italic", fontWeight: "700" }}>  Photography Contents</h3>
                <div className="d-flex">
                    <ul>
                        <li className="h5">Wedding Photography</li>
                        <li className="h5">Portrait photography </li>
                        <li className="h5">Travel photography</li>
                        <li className="h5">Child photography </li>
                        <li className="h5">Drones Photography</li>
                        <li className="h5">Street Photography</li>
                        <li className="h5">Documentary Photography</li>
                        <li className="h5">Landscape Photography</li>
                        <li className="h5">Maternity Photography</li>
                    </ul>

                    <div className="gallery" style={{ marginLeft: "90px" }}>
                        <img src={image1} alt="natureimg" width={"50%"} />
                        <img src={image2} alt="natureimg" width={"50%"} height={"51%"} />
                        <p style={{ textAlign: "center", fontStyle: "italic", paddingLeft: "10px", fontWeight: "900", marginTop: "revert" }}
                        >JOIN A CATURE FOR BEAUTIFUL MEMORIES</p>
                        <img src={image3} alt="natureimg" width={"50%"} height={"50%"} />
                        <img src={image4} alt="natureimg" width={"50%"} height={"50%"} />
                    </div>
                </div>

            </Card>
            <Footer />
        </Layout >
    )
}

export default About;