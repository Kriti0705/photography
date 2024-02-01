import { Button, Card, Container, Form } from "react-bootstrap";
import Layout from "../layout";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
    const isLoggedIn = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!!isLoggedIn) {
            navigate('/');
        }
    }, []);

    const [isLoading, setIsLoading] = useState(false);
    // const [error,setError] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required().min(6),
        }),
        onSubmit: function (values) {
            console.log(values);
            setIsLoading(true);

            window.localStorage.setItem("isLogeIn", true)

            axios
                .post("https://api.darwinstech.com/api/login", values, {
                    Headers: {
                        Accept: "application/json",
                    },
                })
                .then(function (resp) {
                    console.log("LOGIN RESP", resp.data.data.token);
                    // setIsLoading(false);
                    if (resp.status === 200) {
                        localStorage.setItem("token", "Bearer " + resp.data.data.token);

                        navigate("/exams");
                    } else {
                        setIsLoading(false);

                    }
                })
                .catch(function (err) {

                    // setIsLoading(false);
                    // console.log(err.data);b  
                    // setError(err.response.data.msg);
                });
        },
    });
    return (
        <Layout>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <Card className="my-5">
                        <Card.Header className=" fw-bold text-white" style={{backgroundColor:"#96B6C5"}} >
                            Login Page
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    className={formik.errors.email ? "is-invalid" : ""}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder="Enter email"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <span className="invalid-feedback">{formik.errors.email}</span>
                                ) : null}
                            </div>

                            <div className="mb-2">
                                <label htmlFor="password" className="form-label">
                                    Password:
                                </label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    className={formik.errors.password ? "is-invalid" : ""}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder="Enter password"
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <span className="invalid-feedback">
                                        {formik.errors.password}
                                    </span>
                                ) : null}
                            </div>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "right" }}>
                            <Button type="submit" className="mx-2" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Spinner animation="grow" size="sm" />
                                        <b> Loading...</b>
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </Button>

                        </Card.Footer>
                    </Card>
                </form>
            </Container>
        </Layout>
    );
};

export default Login;

