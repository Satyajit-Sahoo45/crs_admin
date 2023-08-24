import axios from 'axios';
import React, { useEffect, useState } from 'react'

function NewRequests() {

    const [parkingArea, setParkingArea] = useState("MALL");
    const [vehicleType, setVehicleType] = useState("two");
    const [slots, setSlots] = useState([])


    const parkingInput = (e) => {
        e.preventDefault();

        setParkingArea(e.target.value);
        // console.log(parkingArea);
    }
    const vehicleTypeInput = (e) => {
        e.preventDefault();
        setVehicleType(e.target.value);
    }

    useEffect(() => {

        async function fetchData() {

            if (parkingArea === "OFFICE" && vehicleType === "four") {

                const req = await axios.get(`api/user/getOfficeParkingSlots`)

                setSlots(req.data);
            }
            else if (parkingArea === "OFFICE" && vehicleType === "two") {

                const req = await axios.get(`api/user/getOfficeTwoWheelerParkingSlots`)

                setSlots(req.data);
            }
            else if (parkingArea === "MALL" && vehicleType === "four") {
                const req = await axios.get(`api/user/getMallParkingSlots`)

                setSlots(req.data);
            }
            else if (parkingArea === "MALL" && vehicleType === "two") {
                const req = await axios.get(`api/user/getMallTwoWheelerParkingSlots`)

                setSlots(req.data);
            }
        }

        fetchData()
    }, [parkingArea, vehicleType])

    async function approveRequest(e, index) {

        const id = slots[index]._id;
        const isParked = true;
        const isRequested = false;

        if (parkingArea === "OFFICE" && vehicleType === "four") {
            const req = await axios.put(`api/user/approveOfficeRequestedSlots`,
                { id, isRequested, isParked }
            )
            console.log(req);
        }
        else if (parkingArea === "OFFICE" && vehicleType === "two") {
            const req = await axios.put(`api/user/approveOfficeTwoWheelerRequestedSlots`,
                { id, isRequested, isParked }
            )
            console.log(req);
        }
        else if (parkingArea === "MALL" && vehicleType === "four") {
            const req = await axios.put(`api/user/approveMallRequestedSlots`,
                { id, isRequested, isParked }
            )
            console.log(req);
        }
        else if (parkingArea === "MALL" && vehicleType === "two") {
            const req = await axios.put(`api/user/approveMallTwoWheelerRequestedSlots`,
                { id, isRequested, isParked }
            )
            console.log(req);
        }

        // console.log(e);
        // console.log(index);
        // console.log(slots[index]);
    }



    return (
        <div className="container-fluid text-center p-4">
            <p className="h1">User Requests</p>

            <div className="booking-container p-2 bg-light-gray">
                <div className="container">
                    <section id="minimal-statistics">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Requested slot</h4>
                                <p> Approve the request if the slot is available</p>
                            </div>
                        </div>

                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3 text-white">
                                    Select Location
                                    <span className="text-danger"> *</span>
                                </label>
                                <select className="form-select"
                                    value={parkingArea}
                                    onChange={parkingInput}
                                >
                                    <option value="MALL">Mall</option>
                                    <option value="OFFICE">Office</option>
                                </select>
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3 text-white">
                                    Vechicle Type
                                    <span className="text-danger"> *</span>
                                </label>
                                <select className="form-select"
                                    value={vehicleType}
                                    onChange={vehicleTypeInput}
                                >
                                    <option value="two">Two Wheeler</option>
                                    <option value="four">Four Wheeler</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            {slots.map((data, index) => {
                                return (
                                    <div className="col-xl-3 col-sm-2 col-12">
                                        {data.isRequested === true ?
                                            (<div className="card">
                                                <div className="card-content">
                                                    <div className="card-body">
                                                        <div className="d-flex">
                                                            <div className="align-self-center">
                                                                <i className="fa-solid fa-square-parking parking-icon"></i>
                                                                <p>email: {data.email}</p>
                                                                <button className="btn btn-primary" onClick={e => { approveRequest(e, index) }}>Approved</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>) : ("")
                                        }
                                    </div>
                                )
                            })
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NewRequests