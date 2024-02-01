import React from "react";
import Layout from "../layout";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

//import Plugis if you need.
import lgthumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgvedio from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const Home = () => {
    return (
        <Layout>
            <div className="d-flex" style={{ paddingTop: "5%" }}>
                <LightGallery
                    speed={500}
                    plugins={[lgthumbnail, lgShare, lgRotate, lgvedio, lgAutoPlay, lgZoom]}
                >
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3W8aZHOYElFd5VhRtmZDME8PaBLC6CaqHLcH
                        QHLucobhCAEj-1oAxhVCu5eortQuNXo&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3W8aZHOYElFd5VhRtmZDME8PaBLC6CaqHLcH
                        QHLucobhCAEj-1oAxhVCu5eortQuNXo&usqp=CAU" alt="Travel photography" width={"250px"} />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlvUyw-x8I1kTmVqQUzcySSHdEmmC8w1XGw&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlvUyw-x8I1kTmVqQUzcySSHdEmmC8w1XGw&usqp=CAU"
                            alt="Portrait photography " width={"250px"} />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEM7hfmX27AHl0G7yH2rByoIvbtEBImISo0Q&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEM7hfmX27AHl0G7yH2rByoIvbtEBImISo0Q&usqp=CAU"
                            alt="Maternity Photography" width={"235px"} />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GYDIE8m2lI6oeQU514Z9CmN0ejqGIAzV4A&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GYDIE8m2lI6oeQU514Z9CmN0ejqGIAzV4A&usqp=CAU/"
                            alt="Child Photography" height={"250px"}
                        />
                    </a>

                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdynA_kZtORYRtRkgnWjYo2onSgrGjMY4SFLm1iWPVcesF202A-FE7Olqk_QJ84WE2Jw&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdynA_kZtORYRtRkgnWjYo2onSgrGjMY4SFLm1iWPVcesF202A-FE7Olqk_QJ84WE2Jw&usqp=CAU"
                            alt="Travel photography" />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3UrpKTZWB0wyeLcpC33Ix21TldumNyq_4Q&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3UrpKTZWB0wyeLcpC33Ix21TldumNyq_4Q&usqp=CAU"
                            alt="Wedding Photography" />
                    </a>

                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfSbHBZZM9H7rvVVU1GFDuNUH1favWINQsQ&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfSbHBZZM9H7rvVVU1GFDuNUH1favWINQsQ&usqp=CAU"
                            alt="Travel photography" />
                    </a>

                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDJXqM5I1h5E6_ZBpnZ0YI7zsqj3wrvqwSA&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDJXqM5I1h5E6_ZBpnZ0YI7zsqj3wrvqwSA&usqp=CAU"
                            alt="Street Photography" />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8s1JZzpV_luqyBonfnlDofCR6HIC962nFA&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8s1JZzpV_luqyBonfnlDofCR6HIC962nFA&usqp=CAU"
                            alt="Documentary Photography" />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7VkBWt309QE9JXYxe21Zsr-d0fjj_GKTzLdHq6n9DJEXEyIcavaVdXXXMIQDcGwX0dk&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7VkBWt309QE9JXYxe21Zsr-d0fjj_GKTzLdHq6n9DJEXEyIcavaVdXXXMIQDcGwX0dk&usqp=CAU"
                            alt="Drones Photography" />
                    </a>
                    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetl91xV47OirwmWKryJkBgTNNGizI4JadUQ&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetl91xV47OirwmWKryJkBgTNNGizI4JadUQ&usqp=CAU"
                            alt="Landscape Photography" />
                    </a>

                </LightGallery>
            </div>
        </Layout >
    )
}

export default Home;