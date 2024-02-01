import './exam.css';
import Layout from "../layout";
import { useEffect, useState } from "react";
import { Card, Button, CardBody, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const Exam = (props) => {
    const [exams, setExams] = useState([]);

    const getExams = () => {
        axios
            .get("https://api.darwinstech.com/api/exams", {
                headers: {
                    Accept: "application/json",
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then(function (resp) {
                console.log(resp);
                setExams(resp.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    useEffect(() => {
        getExams();
    }, []);
    return (
        <Layout>
            <Container>
                <Row className="my-5 g-3">
                    {exams.map(function (value, index) {
                        return (
                            <Col md={3}>
                                <Card >
                                    <CardBody>
                                        <Card.Title>
                                            {index == 3 ? 'hello' : value.name.slice(0, 27)}...
                                        </Card.Title>
                                        <Card.Text>
                                            {index == 3 ? 'hello' : value.description}
                                        </Card.Text>
                                    </CardBody>
                                    <Card.Footer>
                                        <Button className="w-100"
                                            variant="success"
                                        >
                                            Start Exam
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Layout >
    );
};
export default Exam;