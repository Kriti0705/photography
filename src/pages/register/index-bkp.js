// import { Container } from "react-bootstrap";
// import Layout from "../layout";
// import { Form, Card, Button } from "react-bootstrap";
// import { useState } from "react";

// const Register = () => {

//     const intialData = {
//         name: "",
//         email: "",
//         gender: "",
//         country: "",
//         hobbies: [],
//         contact: "",
//         Address: "",
//         password: ""
//     }
//     // const [fields, setFields] = useState('');
//     const [data, setData] = useState(intialData);
//     const [flag, setFlag] = useState(false)
//     // const [hobbies, sethobbies] = useState([]);
//     console.log(data)

//     // const [userinfo, setUserInfo] = useState({
//     //     hobbies: [], response: []
//     // });


//     // let [items, setItems] = useState([]);
//     // let item = null;

//     // console.log(items)

//     const handleChange = (e) => {

//         const key = e.target;
//         console.log(key.value)
//         if (key.name === "name") {
//             setData((prev) => {
//                 return { ...prev, name: key.value }
//             })
//         } else if (key.name === "email") {
//             setData((prev) => {
//                 return { ...prev, email: key.value }
//             })
//         } else if (key.name === "contactNumber") {
//             setData((prev) => {
//                 return { ...prev, contact: key.value }
//             })
//         } else if (key.name === "textarea") {
//             setData((prev) => {
//                 return { ...prev, Address: key.value }
//             })
//         } else if (key.name === "password") {
//             setData((prev) => {
//                 return { ...prev, password: key.value }
//             })
//         } else if (key.name === "select") {
//             if (key.value == 1) {
//                 setData((prev) => {
//                     return { ...prev, password: "india" }
//                 })
//             } else if (key.value == 2) {
//                 setData((prev) => {
//                     return { ...prev, password: "USA" }
//                 })
//             } else if (key.value == 3) {
//                 setData((prev) => {
//                     return { ...prev, password: "Dubai" }
//                 })
//             }

//         }

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e)
//         for (let key of e.target) {
//             if (key.name === "hobbies") {
//                 if (key.checked === true) {
//                     setData((prev) => { return { ...prev, hobbies: [...prev.hobbies, key.value] } })
//                 }
//             } else if (key.name === "gender") {
//                 if (key.checked) {
//                     setData((prev) => { return { ...prev, gender: key.value } })
//                 }
//             }
//         }

//         setFlag(true);

//         // e.resetForm()
//         // console.log(e.target)
//         // console.log()
//         // // let a = [];
//         // for (let key of e.target) {
//         // a.push(
//         //     <li>
//         //         {key.toUpperCase().replace("_", "")}:{fields[key]}
//         //     </li>
//         // );
//         // console.log(key)
//         // if(key.type === "radio"){
//         //    console.log(e.target[2].value)
//         // } 
//         // }
//         // setItems(a);
//         // setData({...data,name:e.target[0].value,email:e.target[1].value})

//     };

//     return (
//         <Layout>
//             <Container>
//                 <fieldset>
//                     <legend>
//                         Your Details
//                     </legend>
//                     {flag && (<>
//                         name:{data.name}
//                         <br />
//                         email:{data.email}
//                         <br />
//                         contact:{data.contact}
//                         <br />
//                         gender:{data.gender}
//                         <br />
//                         hobbies:{data.hobbies}
//                         <br />
//                         country:{data.country}
//                         <br />
//                         address:{data.Address}
//                         <br />
//                         password:{data.password}</>)}

//                 </fieldset>
//                 <Form onSubmit={handleSubmit}>
//                     <Card className="my-5">
//                         <Card.Header className="bg-primary fw-bold text-white">
//                             Register New User
//                         </Card.Header>
//                         <Card.Body>
//                             <div className="mb-2">
//                                 <label htmlFor="name" className="form-label">
//                                     Name:
//                                 </label>
//                                 <Form.Control
//                                     type="text"
//                                     onChange={handleChange}
//                                     name="name"
//                                     placeholder="Enter Name"
//                                 />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="email" className="form-label">
//                                     Email:
//                                 </label>
//                                 <Form.Control
//                                     type="text"
//                                     onChange={handleChange}
//                                     name="email"
//                                     placeholder="Enter Email"
//                                 />
//                             </div>

//                             <div className="mb-2 d-flex">
//                                 <div className="mx-2 ">
//                                     <label htmlFor="gender" className="form-label">
//                                         Gender:
//                                     </label>
//                                 </div>
//                                 <Form.Check
//                                     inline
//                                     label="male"
//                                     name="gender"
//                                     value={"male"}
//                                     onChange={handleChange}
//                                     type={"radio"}
//                                     id={`inline-radio-1`}
//                                 />
//                                 <Form.Check
//                                     inline
//                                     label="female"
//                                     name="gender"
//                                     value={"female"}
//                                     onChange={handleChange}
//                                     type={"radio"}
//                                     id={`inline-radio-1`}
//                                 />
//                                 <Form.Check
//                                     inline
//                                     label="other"
//                                     name="gender"
//                                     value={"other"}
//                                     onChange={handleChange}
//                                     type={"radio"}
//                                     id={`inline-radio-1`}
//                                 />
//                             </div>

//                             <div className="d-flex">
//                                 <div className="mx-2 ">
//                                     <label htmlFor="hobbies" className="form-label">
//                                         Hobbies:
//                                     </label>
//                                 </div>
//                                 <Form.Check
//                                     inline
//                                     label="Reading"
//                                     name="hobbies"
//                                     value={"reading"}
//                                     onChange={handleChange}
//                                     type={"checkbox"}
//                                     id={`inline-checkbox-1`}
//                                 />
//                                 <Form.Check
//                                     inline
//                                     label="Writing"
//                                     name="hobbies"
//                                     value={"Writing"}
//                                     onChange={handleChange}
//                                     type={"checkbox"}
//                                     id={`inline-checkbox-1`}
//                                 />
//                                 <Form.Check
//                                     inline
//                                     label="Singing"
//                                     name="hobbies"
//                                     value={"Singing"}
//                                     onChange={handleChange}
//                                     type={"checkbox"}
//                                     id={`inline-checkbox-1`}
//                                 />
//                                 <Form.Check
//                                     inline
//                                     label="Other"
//                                     name="hobbies"
//                                     value={"Other"}
//                                     type={"checkbox"}
//                                     id={`inline-checkbox-1`}
//                                 />
//                                 <Form.Check
//                                     inline
//                                     label="All"
//                                     name="hobbies"
//                                     value={"All"}
//                                     type={"checkbox"}
//                                     id={`inline-checkbox-1`}
//                                 />
//                             </div>

//                             <div className="mb-2">
//                                 <label htmlFor="gender" className="form-label">
//                                     Country:
//                                 </label>
//                                 <Form.Select aria-label="Default select example" onChange={handleChange} name="select">
//                                     <option> Select Country</option>
//                                     <option value="1">India</option>
//                                     <option value="2">U.S.A</option>
//                                     <option value="3">Dubai</option>
//                                 </Form.Select>
//                             </div>

//                             <div className="mb-2">
//                                 <label htmlFor="contactNumber" className="form-label">
//                                     Contact Number:
//                                 </label>
//                                 <Form.Control
//                                     type="number"
//                                     onChange={handleChange}
//                                     name="contactNumber"
//                                     placeholder="Enter Number"
//                                 />
//                             </div>
//                             <div className="mb-2">
//                                 <Form.Group>
//                                     <Form.Label>Address</Form.Label>
//                                     <Form.Control as="textarea" name="textarea" rows={2} onChange={handleChange} />
//                                 </Form.Group>
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="Password" className="form-label">
//                                     Password
//                                 </label>
//                                 <Form.Control
//                                     type="password"
//                                     onChange={handleChange}
//                                     name="password"
//                                     placeholder="Enter Password "
//                                 />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="confirm Password" className="form-label">
//                                     Confirm Password
//                                 </label>
//                                 <Form.Control
//                                     type="password"
//                                     onChange={handleChange}
//                                     name="confirm Password"
//                                     placeholder="Enter Password Again"
//                                 />
//                             </div>
//                             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                                 <Form.Check type="checkbox" label="Check me out" />
//                             </Form.Group>
//                         </Card.Body>
//                         <Card.Footer style={{ textAlign: "right" }}>
//                             <Button type="submit" className="mx-2">
//                                 REGISTER
//                             </Button>
//                             <Button type="button" variant="danger">
//                                 Cancel
//                             </Button>
//                         </Card.Footer>
//                     </Card>
//                 </Form>
//             </Container>
//         </Layout>
//     )
// }

// export default Register;