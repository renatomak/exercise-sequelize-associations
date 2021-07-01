const express = require('express');
const { createPatient, getAllPatientsPlans, getAllPatientsSurgeries, getAllPlansAndPatients } = require('../controllers/patientsController')

const router = express.Router();

router.get('/', getAllPatientsPlans);
router.get('/patientssurgeries', getAllPatientsSurgeries);
router.get('/plans/:id', getAllPlansAndPatients);
router.post('/patient', createPatient);

module.exports = router;
