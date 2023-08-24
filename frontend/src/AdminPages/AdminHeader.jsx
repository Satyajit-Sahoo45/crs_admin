import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminHeader() {

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("adminInfo"));

        if (user) {
            navigate("/admindashboard");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('adminInfo');
        window.location.href = "/admin"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">carX ADMIN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="/newRequests">New Requests</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/addNewSlots">Add New Slot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/availableSlots">Available Slot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/bookedSlots">Booked Slot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/allData">All Data</a>
                        </li>
                    </ul>

                </div>


                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt='img' width="40" height="40" className="rounded-circle" />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href='/admin' onClick={logout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AdminHeader