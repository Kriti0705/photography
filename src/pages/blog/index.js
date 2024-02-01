import { useEffect, useState } from "react";
import Layout from "../layout/index";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Post from "./post";

// import Spinner from 'react-bootstrap/Spinner';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function () {
        getPosts();
    }, []);

    const Loader = () => {
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    const getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPosts(data)
                setIsLoading(false);
                console.log(data);
            })
    }

    const BlogPosts = () => {
        return (
            <Row>
                {posts.map((post) => {
                    return (
                        <Col md={4}>
                            <Post heading={post.title} body={post.body} id={post.id} />
                        </Col>
                    );
                })}
            </Row >
        );
    };

    return (
        <Layout>
            <Container className="my-5">
                {isLoading ? <Loader /> : <BlogPosts />}
            </Container>
        </Layout>
    )
}

export default Blog;