import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import Layout from "../layout/index";
import { Field, Formik } from "formik";
import ThankYou from "../../images/thankYou.jpg";
import * as Yup from "yup";

const Contact = () => {

    const registerScehma = Yup.object({
        username: Yup.string().required().min(3).max(30),
        email: Yup.string().required().email(),
        contact: Yup.string().required().min(10).max(10),
        message: Yup.string().required().min(10).max(150),
        gender: Yup.string().required(),
        hobbies: Yup.array().required("Select at least one hobby"),
        country: Yup.string().required("Please select a country"),
    });
    return (
        <Layout>
            <Container className="py-3">
                <Card className="p-2">
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Header>
                                    Contact ME
                                </Card.Header>
                                <Card.Body >
                                    <Formik
                                        initialValues={{
                                            username: "",
                                            email: "",
                                            contact: "",
                                            message: "",
                                            gender: "",
                                            hobbies: "",
                                            country: "",
                                        }}
                                        onSubmit={(values, { setSubmitting, resetForm }) => {
                                            console.log(values);
                                            setTimeout(() => {
                                                setSubmitting(false);
                                                resetForm();
                                            }, 100000);
                                        }}
                                        validationSchema={registerScehma}
                                    >
                                        {({
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            isSubmitting,
                                            errors,
                                            touched,
                                            handleBlur,
                                        }) =>
                                            isSubmitting ? (
                                                <img className="mt-5"
                                                    src={ThankYou}
                                                    alt="thankyou"
                                                    width="100%"
                                                    height="350px"
                                                />
                                            ) : (
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Group controlId="username" className="my-1">
                                                        <Form.Label>Enter Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            onChange={handleChange}
                                                            value={values.username}
                                                            onBlur={handleBlur}
                                                            isInvalid={touched.username && !!errors.username}
                                                            isValid={touched.username && !errors.username}
                                                        />
                                                        {touched.username && errors.username ? (
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.username}
                                                            </Form.Control.Feedback>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group controlId="email" className="my-1">
                                                        <Form.Label>Enter Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={touched.email && !!errors.email}
                                                            isValid={touched.email && !errors.email}
                                                        />
                                                        {touched.email && errors.email ? (
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.email}
                                                            </Form.Control.Feedback>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group controlId="contact" className="my-1">
                                                        <Form.Label>Enter Contact</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            value={values.contact}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={touched.contact && !!errors.contact}
                                                            isValid={touched.contact && !errors.contact}
                                                        />
                                                        {touched.contact && errors.contact ? (
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.contact}
                                                            </Form.Control.Feedback>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Form.Group controlId="message" className="my-1">
                                                        <Form.Label>Message</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            value={values.message}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={touched.message && !!errors.message}
                                                            isValid={touched.message && !errors.message}
                                                        />
                                                        {touched.message && errors.message ? (
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.message}
                                                            </Form.Control.Feedback>
                                                        ) : null}
                                                    </Form.Group>

                                                    <div id="my-radio-group">Gender</div>
                                                    <div
                                                        role="group"
                                                        aria-labelledby="my-radio-group"
                                                        className="form-control"
                                                    >
                                                        <Field
                                                            type="radio"
                                                            name="gender"
                                                            value="male"
                                                            onChange={handleChange}
                                                            checked={values.gender === "male"}
                                                            isInvalid={touched.gender && !!errors.gender}
                                                            isValid={touched.gender && !errors.gender}
                                                        />

                                                        <label className="mx-2">
                                                            Male
                                                        </label>

                                                        <Field
                                                            type="radio"
                                                            name="gender"
                                                            value="female"
                                                            onChange={handleChange}
                                                            checked={values.gender === "female"}
                                                            isInvalid={touched.gender && !!errors.gender}
                                                            isValid={touched.gender && !errors.gender}
                                                        />
                                                        <label className="mx-2">
                                                            Female
                                                        </label>

                                                        <Field
                                                            type="radio"
                                                            name="gender"
                                                            value="Other"
                                                            onChange={handleChange}
                                                            checked={values.gender === "other"}
                                                            isInvalid={touched.gender && !!errors.gender}
                                                            isValid={touched.gender && !errors.gender}
                                                        />
                                                        <label className="mx-2">
                                                            Other
                                                        </label>

                                                        {touched.gender && errors.gender ? (
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.gender}
                                                            </Form.Control.Feedback>
                                                        ) : null}
                                                        {/* <span className="text-danger">{errors.gender}</span> */}
                                                    </div>



                                                    <label htmlFor="hobbies"
                                                        className="form-label mb-2"
                                                        style={{ marginRight: 10 }}> Hobbies
                                                    </label>
                                                    <div className="form-control mb-2"
                                                        aria-labelledby="Checkbox-group"
                                                        role="group"
                                                    >
                                                        <div >
                                                            <Form.Check
                                                                inline
                                                                onChange={handleChange}
                                                                checked={values.hobbies.includes("reading")}
                                                                name="hobbies"
                                                                value={["reading"]}
                                                                label="READING"
                                                                type="checkbox"
                                                                id="reading"

                                                            />


                                                            <Form.Check
                                                                inline
                                                                onChange={handleChange}
                                                                checked={values.hobbies.includes("sports")}
                                                                name="hobbies"
                                                                value={["sports"]}
                                                                label="SPORTS"
                                                                type="checkbox"
                                                                id="sports"
                                                            />
                                                            <Form.Check
                                                                inline
                                                                onChange={handleChange}
                                                                checked={values.hobbies.includes("cooking")}
                                                                name="hobbies"
                                                                value={["cooking"]}
                                                                label="COOKING"
                                                                type="checkbox"
                                                                id="cooking"
                                                            />
                                                            <Form.Check
                                                                inline
                                                                onChange={handleChange}
                                                                checked={values.hobbies.includes("other")}
                                                                name="hobbies"
                                                                value={["other"]}
                                                                label="OTHER"
                                                                type="checkbox"
                                                                id="other"
                                                            />

                                                            {touched.hobbies && errors.hobbies ? (
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.hobbies}
                                                                </Form.Control.Feedback>
                                                            ) : null}
                                                            {/* <span className="text-danger">{errors.hobbies}</span> */}
                                                        </div>
                                                    </div>

                                                    <Form.Group controlId="country" className="my-1">
                                                        <Form.Label>Country</Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            value={values.country}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            isInvalid={touched.country && !!errors.country}
                                                            isValid={touched.country && !errors.country}
                                                        >
                                                            <option value="">Select...</option>
                                                            <option value="usa">USA</option>
                                                            <option value="uk">UK</option>
                                                            <option value="uk">Australia</option>
                                                            <option value="uk">Dubai</option>
                                                            <option value="uk">New-zeland</option>
                                                            {/* Add more options as needed */}
                                                        </Form.Control>
                                                        {touched.country && errors.country ? (
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.country}
                                                            </Form.Control.Feedback>
                                                        ) : null}
                                                    </Form.Group>
                                                    <Button
                                                        type="submit"
                                                        className="form-control my-2"
                                                        disabled={isSubmitting}

                                                    >
                                                        SEND
                                                    </Button>
                                                </Form>
                                            )
                                        }
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} style={{ marginTop: "10px" }}>
                            <Card style={{ height: "530px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.268077609944!2d72.82510549999999!3d21.181507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc53566d6b%3A0xa05f4515a070c233!2sDarwin!5e0!3m2!1sen!2sin!4v1706176464673!5m2!1sen!2sin"
                                    height="100%"
                                    style={{ border: "0" }}
                                    loading="lazy"
                                ></iframe>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </Layout>
    );
}

export default Contact;

// How to Apply validation in show at a time which field is selected at a time but not show in all fields