import { useState, useEffect } from "react";
import Layout from "../layout";
import { Card, Button, Form, Container } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";


const Register = () => {
    const isLoggedIn = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        if (!!isLoggedIn) {
            navigate('/');
        }
    }, []);

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            hobbies: "",
            password: "",
            c_password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required().max(30),
            email: Yup.string().required().email(),
            gender: Yup.string().required('Please select at least one option'),
            hobbies: Yup.array().required().min(1, "Please select at least one hobby."),
            password: Yup.string("Password is Required").required().min(6),
            c_password: Yup.string().required()
                .oneOf([Yup.ref('password'), null], "Must match with a Password"),
        }),
        onSubmit: function (values, { resetForm }) {
            console.log(values);
            setIsLoading(true);

            axios
                .post("https://api.darwinstech.com/api/register", values, {
                    Header: {
                        Accept: "application/json",
                    },
                })
                .then(function (resp) {
                    console.log(resp.data.token);
                    localStorage.setItem("token", "Bearer " + resp.data.token);
                    navigate("/login");
                    setIsLoading(false);
                    resetForm();
                })
                .catch(function (err) {
                    setIsLoading(false);
                    console.log(err);

                })
        },
    });
    return (
        <Layout>
            <Container>
                <form onSubmit={formik.handleSubmit}>
                    <Card className="my-5"  >
                        <Card.Header className="fw-bold text-white" style={{ backgroundColor: "#96B6C5" }}>
                            Register New User
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">
                                    Name:
                                </label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    className={formik.errors.name ? "is-invalid" : ""}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    placeholder="Enter Name"
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <span className="invalid-feedback">{formik.errors.name}</span>
                                ) : null}

                            </div>
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
                                <label htmlFor="gender" className="form-label"
                                    style={{ marginRight: 10 }}
                                > Gender
                                </label>
                                {formik.touched.gender && formik.errors.gender ? (
                                    <span className="invalid-feedback">{formik.errors.gender}</span>
                                ) : null}
                                <div style={{ display: "inline" }}>
                                    <Form.Check
                                        name="gender"
                                        value="male"
                                        label="MALE"
                                        type="radio"
                                        className={formik.errors.gender ? "is-invalid" : ""}
                                        id="m"
                                        onChange={formik.handleChange}
                                        inline
                                    />

                                    <Form.Check
                                        inline
                                        onChange={formik.handleChange}
                                        d className={formik.errors.gender ? "is-invalid" : ""}
                                        name="gender"
                                        value="female"
                                        label="FEMALE"
                                        type="radio"
                                        id="f"
                                    />
                                    {formik.touched.gender && formik.errors.gender ? (
                                        <span className="invalid-feedback">{formik.errors.gender}</span>
                                    ) : null}
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="hobbies" className="form-label" style={{ marginRight: 10 }}> Hobbies
                                </label>
                                <div>
                                    <Form.Check
                                        inline
                                        onChange={formik.handleChange}
                                        className={formik.errors.hobbies ? "is-invalid" : ""}
                                        name="hobbies"
                                        value="reading"
                                        label="READING"
                                        type="checkbox"
                                        id="reading"
                                    />
                                </div>
                                <div>
                                    <Form.Check
                                        inline
                                        onChange={formik.handleChange}
                                        className={formik.errors.hobbies ? "is-invalid" : ""}
                                        name="hobbies"
                                        value="sports"
                                        label="SPORTS"
                                        type="checkbox"
                                        id="sports"
                                    />
                                </div>
                                <div>
                                    <Form.Check
                                        inline
                                        onChange={formik.handleChange}
                                        className={formik.errors.hobbies ? "is-invalid" : ""}
                                        name="hobbies"
                                        value="cooking"
                                        label="COOKING"
                                        type="checkbox"
                                        id="cooking"
                                    />
                                </div>
                                <div>
                                    <Form.Check
                                        inline
                                        onChange={formik.handleChange}
                                        className={formik.errors.hobbies ? "is-invalid" : ""}
                                        name="hobbies"
                                        value="other"
                                        label="OTHER"
                                        type="checkbox"
                                        id="other"
                                    />
                                    {formik.touched.hobbies && formik.errors.hobbies ? (
                                        <span className="invalid-feedback">{formik.errors.hobbies}</span>
                                    ) : null}
                                </div>
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
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label">
                                    Confirm Password:
                                </label>
                                <Form.Control
                                    type="password"
                                    name="c_password"
                                    className={formik.errors.c_password ? "is-invalid" : ""}
                                    onChange={formik.handleChange}
                                    value={formik.values.c_password}
                                    placeholder="Enter confirm Password "
                                />
                                {formik.touched.c_password && formik.errors.c_password ? (
                                    <span className="invalid-feedback">
                                        {formik.errors.c_password}
                                    </span>
                                ) : null}
                            </div>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "right" }}>
                            <Button type="submit" className="mx-2">
                                Register
                            </Button>

                        </Card.Footer>
                    </Card>
                </form>
            </Container>
        </Layout >
    );
};


export default Register;