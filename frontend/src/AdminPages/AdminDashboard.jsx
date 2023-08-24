import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "./FooterSection";

const AdminDashboard = () => {
    return (
        <>
            <AdminHeader />

            <div className="admin-dashboard d-flex justify-content-around align-items-center">
                <div className="card text-center align-items-center" style={{ "width": "18rem", "height": "18rem", "background": "rgb(120, 113, 139)" }}>
                    <div className="card">
                        <h5 className="card-title">New Requests</h5>
                        <a href="/newRequests" className="btn btn-primary">Requests</a>
                    </div>
                </div>
                <div className="card text-center align-items-center" style={{ "width": "18rem", "height": "18rem", "background": "rgb(0,212,255,100)" }}>
                    <div className="card">
                        <h5 className="card-title "> Add New Slots</h5>
                        <a href="/addNewSlots" className="btn btn-primary">Add Slots</a>
                    </div>
                </div>
            </div>

            <Footer />

        </>


    )
}

export default AdminDashboard;