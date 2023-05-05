import React from "react";

const Home = ({ user }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        let file = event.target.uploadFile.files[0];
        let formData = new FormData();
        let firstname = user.firstname;
        let lastname = user.lastname;
        let email = user.email;
        formData.append('file', file);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('email', email);
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData
        })
            .then(resp => resp.json())
            .then(res => {
                if (res === "File uploaded successfully") {
                    document.getElementById("uploaded").click();

                }
                else{
                    document.getElementById("error").click();

                }
            })
    }
    return (
        <div className="container mt-5">
            {/* <!-- Button trigger modal --> */}
            <button type="button" id="uploaded" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
            <button type="button" id="error" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2"></button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">File uploaded successfully</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Error in uploading file</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            {/* Makes POST request to /signup route */}
                            <form method="POST" action="http://localhost:3001/upload" onSubmit={handleSubmit} enctype="multipart/form-data">
                                <h3 className="centered">Upload your resume</h3>
                                <div className="form-group">
                                    <input type="file" className="form-control m-2 p-2" name="uploadFile" accept="application/pdf" required />
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;