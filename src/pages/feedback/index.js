import React from "react";
import Layout from "../layout";
import { Formik } from "formik";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Feedback = () => {
    return (
        <Formik
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 4000);
            }}

            initialValues={{
                name: '', email: '', contactNo: '', message: ''
            }}
            validate={values => {
                const errors = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if (!values.name) {
                    errors.name = 'Required'
                }

                if (!values.contactNo) {
                    errors.contactNo = 'Required'
                }

                if (!values.message) {
                    errors.message = 'Required'
                }

                return errors;
            }}
        >
            {({
                handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit}>
                    <Layout>
                        <Container>
                            <h1>Feedback Form</h1>

                            <div className="mb-3">
                                <Form.Label> Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    className={errors.name ? 'is-invalid' : ''}
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                <div class="invalid-feedback">
                                    {errors.name && touched.name && errors.name}
                                </div>
                            </div>

                            <div className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    className={errors.email ? 'is-invalid' : ''}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                <div class="invalid-feedback">
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div>

                            <div className="mb-3">
                                <Form.Label>contactNo</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="contactNo"
                                    className={errors.contactNo ? 'is-invalid' : ''}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contactNo}
                                />
                                <div class="invalid-feedback">
                                    {errors.contactNo && touched.contactNo && errors.contactNo}
                                </div>
                            </div>

                            <div className="mb-3">
                                <Form.Group>
                                    <Form.Label>message</Form.Label>
                                    <Form.Control
                                        name="message"
                                        as="textarea"
                                        rows={3}
                                        className={errors.message ? 'is-invalid' : ''}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.message}
                                    />
                                    <div class="invalid-feedback">
                                        {errors.message && touched.message && errors.message}
                                    </div>
                                </Form.Group>
                            </div>



                            {/* <div>
                            <label>contactNo</label>
                            <input className="form-control is-invalid" type="text" />
                            <span className="invalid-feedback">
                                Required
                            </span>
                        </div> */}


                            <div>
                                <Button type="submit" disabled={isSubmitting}>Submit</Button>
                            </div>
                        </Container>
                    </Layout>

                </Form>
            )}


        </Formik>

    )
}

export default Feedback;