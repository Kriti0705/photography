import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layout";

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsers = () => {
        axios
            .get("https://api.darwinstech.com/api/users", {
                headers: {
                    Accept: "application/json",
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then(function (resp) {
                console.log(resp.data.data.token);
                setUsers(resp.data.data.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    const confirmDelete = (user) => {
        if (window.confirm(`Are you sure you want to delete user ${user.name}?`)) {
            axios
                .delete(`https://api.darwinstech.com/api/users/${user.id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                })
                .then(function (resp) {
                    getUsers();
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    };

    const editUser = (user) => {
        // Navigate to the edit page with the user ID
        navigate(`/editUser/${user.id}`);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Layout>
            <div className="container">
                <div className="card mt-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div>User's List</div>
                        <Link to={"/register"} className="btn btn-primary btn-sm">
                            Add User
                        </Link>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.created_at}</td>
                                        <td>{user.updated_at}</td>
                                        <td className="d-flex justify-content-around align-items-center">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => confirmDelete(user)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-sm"
                                                onClick={() => editUser(user)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Users;
