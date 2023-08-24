const express = require('express')
const { registerAdmin,
    authAdmin,
    mallParkingModel,
    officeParkingModel,
    officeTwoWheelerParkingModel,
    mallTwoWheelerParkingModel
} = require('../controllers/adminController');

const router = express.Router()


router.post("/", registerAdmin)
router.post("/adminlogin", authAdmin)
router.post('/addMallSlot', mallParkingModel)
router.post('/addOfficeSlot', officeParkingModel)
router.post('/addOfficeTwoWheelerSlot', officeTwoWheelerParkingModel)
router.post('/addMallTwoWheelerSlot', mallTwoWheelerParkingModel)



module.exports = router;