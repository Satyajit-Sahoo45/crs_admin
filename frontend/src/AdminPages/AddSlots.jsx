import React, { useState } from 'react'
import axios from 'axios'


function AddSlots() {

    const [newSlotNo, setNewSlotNo] = useState("")
    const [newvehicleType, setNewVehicleType] = useState("")
    const [newSlotArea, setNewSlotArea] = useState("")

    async function addNewSlot(e) {
        e.preventDefault();

        const slotNo = newSlotNo;
        const Area = newSlotArea;
        const email = `xyz${slotNo}@gmail.com`
        const month = new Date().getMonth()
        const date = `${new Date().getFullYear()}-${month < 10 ? ("0" + (month + 1)) : (month + 1)}-${new Date().getDate()}`

        if (newSlotArea === "OFFICE" && newvehicleType === "four") {
            const req = await axios.post("/api/admin/addOfficeSlot",
                { slotNo, email, Area, date }
            )
            console.log(req);
            window.location.href = '/addNewSlots';
        } else if (newSlotArea === "OFFICE" && newvehicleType === "two") {
            const req = await axios.post("/api/admin/addOfficeTwoWheelerSlot",
                { slotNo, email, Area, date }
            )
            console.log(req);
            window.location.href = '/addNewSlots';
        }
        else if (newSlotArea === "MALL" && newvehicleType === "four") {
            const req = await axios.post("/api/admin/addMallSlot",
                { slotNo, email, Area, date }
            )
            console.log(req);
            window.location.href = '/addNewSlots';
        }
        else if (newSlotArea === "MALL" && newvehicleType === "two") {
            const req = await axios.post("/api/admin/addMallTwoWheelerSlot",
                { slotNo, email, Area, date }
            )
            console.log(req);
            window.location.href = '/addNewSlots';
        }
    }

    return (
        <div className="request-container">
            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3>Request for slot</h3>
                        {/* <p className="blue-text">Just answer a few questions<br> so that we can personalize the right experience for you.</p> */}
                        <div className="card">
                            <h5 className="text-center mb-4"> Book Your Parking Slot By One Click</h5>
                            <form className="form-card">
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">
                                            Slot No
                                            <span className="text-danger"> *</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="slotno"
                                            name="SlotNo"
                                            value={newSlotNo}
                                            onChange={e => setNewSlotNo(e.target.value)}
                                            placeholder="Slot No"
                                            onblur="validate(1)"
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">
                                            Select Location
                                            <span className="text-danger"> *</span>
                                        </label>
                                        <select className="form-select"
                                            value={newSlotArea}
                                            onChange={e => setNewSlotArea(e.target.value)}
                                        >
                                            <option value="MALL">Mall</option>
                                            <option value="OFFICE">Office</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">
                                            Vehicle Type
                                            <span className="text-danger"> *</span>
                                        </label>
                                        <select className="form-select"
                                            value={newvehicleType}
                                            onChange={e => setNewVehicleType(e.target.value)}
                                        >
                                            <option value="two">Two Wheeler</option>
                                            <option value="four">Four Wheeler</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="form-group col-sm-6">

                                        <button type="submit" className="btn btn-primary"
                                            onClick={addNewSlot}
                                        >
                                            Add Slot
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSlots;