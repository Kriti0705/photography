import { useState, useEffect } from "react";
import Layout from "../../../layout";
import axios from "axios";


const EditUser = ({ id }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    // Fetch user data using the user ID from the URL
    const userId = id;
    axios
      .get(`https://api.darwinstech.com/api/users/${userId}`, {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (resp) {
        setUser(resp.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = () => {
    // Implement logic to update the user data on the server
    axios
      .put(`https://api.darwinstech.com/api/users/${user.id}`, user, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (resp) {
        // Handle successful update
        console.log("User updated successfully");
      })
      .catch(function (err) {
        console.log(err);
        // Handle the error
      });
  };

  const handleCancel = () => {
    // Implement logic to navigate back or perform other cancel actions
  };

  return (
    <Layout>
      <div className="container">
        <div className="card mt-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>Edit User</div>
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
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.created_at}</td>
                  <td>{user.updated_at}</td>
                  <td className="d-flex justify-content-around align-items-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditUser;
