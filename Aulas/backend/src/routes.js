const express = require("express");
const multer = require("multer");
const Uploadconfig = require("./Config/Upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashBoardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectController = require("./controllers/RejectController");


const router = express.Router();
const upload = multer(Uploadconfig);

router.post("/sessions", SessionController.store);

router.post("/spots", upload.single("thumbnail"), SpotController.store);

router.get ("/spots", SpotController.index);

router.get ("/dashboard", DashBoardController.show);

router.post("/spots/:spot_id/bookings", BookingController.store);

router.post("/bookings/:booking_id/approvals", ApprovalController.store);

router.post("/bookings/:booking_id/rejects", RejectController.store);

module.exports = router;