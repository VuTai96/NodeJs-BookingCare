import doctorService from '../services/doctorService';

const getTopDoctorHome = async (req, res) => {
    let limit = req.query?.limit && req.query?.limit !== 'undefined' || 10;
    try {
        let doctors = await doctorService.getTopDoctorHome(+limit)
        return res.status(200).json(doctors)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}
const getAllDoctors = async (req, res) => {
    try {
        let doctors = await doctorService.getAllDoctorsService()
        return res.status(200).json(doctors)
    } catch (error) {
        console.log('get all doctor is error', error)
        return res.status(200).json({
            errCode: -1,
            message: 'get all doctor error from server'
        })
    }
}
const postInforDoctor = async (req, res) => {
    try {
        let response = await doctorService.createInforDoctor(req.body)
        return res.status(200).json(response)
    } catch (error) {
        console.log('postInforDoctor error: ', error)
        return res.status(200).json({
            errCode: -1,
            message: 'Post infor doctor error from server'
        })
    }
}
const updateInforDoctor = async (req, res) => {
    try {
        let response = await doctorService.updateInforDoctor(req.body)
        return res.status(200).json(response)
    } catch (error) {
        console.log('updateInforDoctor error: ', error)
        return res.status(200).json({
            errCode: -1,
            message: 'Update infor doctor error from server'
        })
    }
}
const getDetailDoctorById = async (req, res) => {
    try {
        let infor = await doctorService.getDetailDoctorService(req.query)
        return res.status(200).json(infor)
    } catch (error) {
        console.log('getDetailDoctorById error!', error)
        return res.status(200).json({
            errCode: -1,
            message: 'getDetailDoctorById error from server'
        })
    }
}
module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    postInforDoctor: postInforDoctor,
    getDetailDoctorById: getDetailDoctorById,
    updateInforDoctor: updateInforDoctor
}