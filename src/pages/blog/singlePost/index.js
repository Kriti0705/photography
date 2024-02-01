import { useParams } from "react-router-dom";
import Layout from "../../layout";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";

const BlogPage = () => {

    const [singlePost, setSinglePost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const Loader = () => {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    useEffect(() => {
        getSinglePost();
    }, []);

    console.log("Params", params.id);

    const getSinglePost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSinglePost(data)
                setIsLoading(false);
                console.log(data);
            })
    };


    return (
        <Layout>
            <Container className="my-5">
                {isLoading ? <Loader /> : <singlePost />}
                <h1>{singlePost.title}</h1>
                <p>{singlePost.body}</p>

            </Container>
        </Layout>
    )
}

export default BlogPage;