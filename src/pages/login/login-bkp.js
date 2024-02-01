// import { Container, InputGroup, Form, Button } from "react-bootstrap";
// import Layout from "../layout/index";
// import { useState } from "react";

// const Login = () => {

//     const [firstName, setFirstName] = useState('');
//     const [FirstNameValidation, setFirstNameValidation] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [LastNameValidation, setLastNameValidation] = useState('');
//     const [email, setEmail] = useState('');
//     const [emailValidation, setEmailValidation] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordValidation, setPasswordValidation] = useState('');


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log();

//         if (email === '') {
//             setEmailValidation("Email Is required");
//         } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//             setEmailValidation("InValid Email");
//         } else {
//             setEmailValidation();
//         }
//         console.log(email);

//         if (firstName == '') {
//             setFirstNameValidation('First Name Required');
//         }
//         else {
//             setFirstNameValidation('');
//         }
//         console.log(firstName);

//         if (lastName == '') {
//             setLastNameValidation('Last Name Required');
//         }
//         else {F
//             setLastNameValidation('');
//         }
//         console.log(lastName);

//         if (password == '') {
//             setPasswordValidation('Password Is Required');
//         }
//         else {
//             setPasswordValidation('');
//         }
//         console.log(password);

//     }

//     return (
//         <Layout>
//             <Container>
//                 <h1>LOGIN PAGE</h1>
//                 <form method="post" onSubmit={handleSubmit}>
//                     <InputGroup className="mb-3">
//                         <InputGroup.Text> First Name  </InputGroup.Text>
//                         <Form.Control aria-label="firstName" placeholder='Enter First Name' onChange={(e) => {
//                             setFirstName(e.target.value)
//                         }} />
//                         <span className="text-danger">{FirstNameValidation}</span>
//                     </InputGroup>
//                     <InputGroup className="mb-3">
//                         <InputGroup.Text> Last Name  </InputGroup.Text>
//                         <Form.Control aria-label="firstName" placeholder='Enter Last Name' onChange={(e) => {
//                             setLastName(e.target.value)
//                         }} />
//                         <span className="text-danger">{LastNameValidation}</span>
//                     </InputGroup>
//                     <InputGroup className="mb-3">
//                         <InputGroup.Text> Email  </InputGroup.Text>
//                         <Form.Control aria-label="email" placeholder='Enter Email' onChange={(e) => {
//                             setEmail(e.target.value)
//                         }} />
//                         <span className="text-danger">{emailValidation}</span>
//                     </InputGroup>
//                     <InputGroup className="mb-3">
//                         <InputGroup.Text> Password  </InputGroup.Text>
//                         <Form.Control aria-label="password" placeholder='Enter Only Numbers' onChange={(e) => {
//                             setPassword(e.target.value)
//                         }} />
//                         <span className="text-danger">{passwordValidation}</span>
//                     </InputGroup>
//                     <Button
//                         type="submit"
//                         style={{ backgroundColor: "lightGray " }}>
//                         Submit
//                     </Button>
//                 </form>
//             </Container>
//         </Layout>
//     )
// }

// export default Login;