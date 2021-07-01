const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = async (_req, res) => {
  try {
    const patients = await Patients.findAll({ include: { model: Plans, as: 'plan' } });

    if(!patients.length) return res.status(404).send({ message: 'No patients found' });

    return res.status(200).json(patients);
  } catch (error) {
    console.error(error.message)
  }
}

const getAllPatientsSurgeries = async (req, res) => {
  try {
    const patientsSurgeries = await Patients.findAll(
      { include: { model: Surgeries, as: 'surgeries', through: { attributes: [] }  } }
    )

    if(!patientsSurgeries.length) return res.status(404).send({ message: 'No patients found' });

    return res.status(200).json(patientsSurgeries);
  } catch (error) {
    console.error(error.message)
  }
}

const getAllPlansAndPatients = async (req, res) => {
  try {
    const patientsPlans = await Plans.findAll(
      { where: { plan_id: req.params.id }, include: { model: Patients, as: 'patients' } }
    )
    if(!patientsPlans.length) return res.status(404).send({ message: 'No patients found' });

    return res.status(200).json(patientsPlans);
  } catch (error) {
    console.error(error.message)
  }
}

const createPatient = async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;

    const patient = await Patients.create({ fullname, plan_id });
    
    res.status(200).json(patient)
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getAllPlansAndPatients,
  createPatient
};
