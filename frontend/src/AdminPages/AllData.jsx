import React, { useEffect, useState } from 'react'
import axios from 'axios'


function AllData() {

    const [slots, setSlots] = useState([])

    const [parkingArea, setParkingArea] = useState("MALL");
    const [vehicleType, setVehicleType] = useState("two");
    const [dateValue, setDateValue] = useState("2023-06-20");

    const parkingInput = (e) => {
        e.preventDefault();
        setParkingArea(e.target.value);
    }

    const vehicleTypeInput = (e) => {
        e.preventDefault();
        setVehicleType(e.target.value);
    }

    const handleDateUpdate = (e) => {
        const dateValue = e.target.value;
        console.log("dateValue", dateValue);
        setDateValue(dateValue);
    }

    useEffect(() => {

        async function fetchData() {

            if (parkingArea === "OFFICE" && vehicleType === "four" && dateValue !== "") {
                const req = await axios.get(`api/user/getOfficeParkingSlots`)
                setSlots(req.data);
            } else if (parkingArea === "OFFICE" && vehicleType === "two" && dateValue !== "") {
                const req = await axios.get(`api/user/getOfficeTwoWheelerParkingSlots`)
                setSlots(req.data);
            }
            else if (parkingArea === "MALL" && vehicleType === "four" && dateValue !== "") {
                const req = await axios.get(`api/user/getMallParkingSlots`)
                setSlots(req.data);
            }
            else if (parkingArea === "MALL" && vehicleType === "two" && dateValue !== "") {
                const req = await axios.get(`api/user/getMallTwoWheelerParkingSlots`)
                setSlots(req.data);
            }
        }
        fetchData()
        // console.log(slots);
    }, [parkingArea, vehicleType, dateValue])



    return (
        <div className="container-fluid booking-container  text-center p-4">
            <p className="h1">User Requests</p>

            <div className="p-2 bg-light-gray">
                <div className="container">
                    <section id="minimal-statistics">
                        <div className="row">
                            <div className="col-12 mt-3 mb-1">
                                <h4 className="text-uppercase">By DateWise</h4>
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

                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label px-3 text-white">
                                    Date
                                    <span className="text-danger"> *</span>
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={dateValue}
                                    onChange={(e) => handleDateUpdate(e)}
                                    onblur="validate(1)"
                                    autoComplete='off'
                                />
                            </div>
                        </div>

                        <table class="table table-dark">
                            <thead >
                                <tr>
                                    <th scope='col'>Slot No</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Date</th>
                                    <th>Parking Duration</th>
                                    <th>IsParked</th>
                                </tr>
                            </thead>


                            <tbody >
                                {
                                    slots.map((data, index) => {
                                        return (
                                            <>
                                                {
                                                    data.date === dateValue && data.isParked === true ?
                                                        (
                                                            <tr>
                                                                <th scope='row'>{data.slotNo}</th>
                                                                <td>{data.email}</td>
                                                                <td>{data.phone}</td>
                                                                <td>{data.date}</td>
                                                                <td>{data.duration} hr</td>
                                                                <td>{data.isParked ? "YES" : "NO"}</td>
                                                            </tr>
                                                        ) : ("")
                                                }
                                            </>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div >
        </div >
    )
}

export default AllData