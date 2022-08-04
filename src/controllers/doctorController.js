import doctorService from '../services/doctorService';

const getTopDoctorHome = async (req, res) => {
    let limit = 10;
    if (req.query?.limit) {
        limit = req.query.limit
    }
    console.log(limit)
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
module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    postInforDoctor: postInforDoctor
}