import React, { useState, useEffect } from "react";
import axios from 'axios';

const BookedSlots = () => {

    const [parkingArea, setParkingArea] = useState("MALL");
    const [bookedSlots, setBookedSlots] = useState([])
    const [vehicleType, setVehicleType] = useState("four");


    const parkingInput = (e) => {
        e.preventDefault();

        setParkingArea(e.target.value);
        // console.log(parkingArea);
    }

    useEffect(() => {
        async function fetchData() {
            if (parkingArea === "OFFICE" && vehicleType === "four") {
                const req = await axios.get(`api/user/getOfficeParkingSlots`)
                setBookedSlots(req.data);
            }
            else if (parkingArea === "OFFICE" && vehicleType === "two") {
                const req = await axios.get(`api/user/getOfficeTwoWheelerParkingSlots`)
                setBookedSlots(req.data);
            }
            else if (parkingArea === "MALL" && vehicleType === "four") {
                const req = await axios.get(`api/user/getMallParkingSlots`)
                setBookedSlots(req.data);
            }
            else if (parkingArea === "MALL" && vehicleType === "four") {
                const req = await axios.get(`api/user/getMallTwoWheelerParkingSlots`)
                setBookedSlots(req.data);
            }
        }
        fetchData()
    }, [parkingArea, vehicleType])

    return (
        <div className="container-fluid booking-container text-center p-4">
            <div className="p-2 bg-light-gray">
                <div className="container">
                    <section id="minimal-statistics">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">Available slots</h4>
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
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3 text-white">
                                    Select Vehicle Type
                                    <span className="text-danger"> *</span>
                                </label>
                                <select className="form-select"
                                    value={vehicleType}
                                    onChange={e => setVehicleType(e.target.value)}
                                >
                                    <option value="two">Two Wheeler</option>
                                    <option value="four">Four Wheeler</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            {bookedSlots.map((data, index) => {
                                return (
                                    <div className="col-xl-2">
                                        {data.isParked === true ?
                                            (<div className="card red">
                                                <div className="card-content">
                                                    <div className="align-self-center">
                                                        <i className="fa-solid fa-square-parking parking-icon"></i>
                                                        <p>Slot: {data.slotNo}</p>
                                                        <p>Area: {data.Area}</p>
                                                    </div>
                                                    {/* </div> */}
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

export default BookedSlots;
