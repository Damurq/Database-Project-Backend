const Sequelize = require('sequelize');
const office = require('../models').office;

module.exports = {

    /**
     * Create a new office validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.municipalityId) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save office in the database.
        office.create({
            municipalityId: req.body.municipalityId,
            code: req.body.code,
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the office."
                });
            });
            
    },

    /**
     * Read all office into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all office.
        office.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving office."
            });

    },

    /**
     * Read all offices from a municipality into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     findByMunicipality(req, res) {

        // Retrieve all municipality.
        office.findAll({
            where: { municipalityId: req.params.municipalityId }
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving municipality."
            });

    },

    /**
     * Find a single office with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        office.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving office with id = " + req.params.id
            });

    },

    /**
     * Update a office identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        office.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "office was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update office with id=${id}. Maybe office was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating office with id = " + id
                });
            });

    },

    /**
     * Delete a office with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        office.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "office was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete office with id=${id}. Maybe office was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete office with id = " + id
                });
            });

    },

    /**
     * Delete all office from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        office.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} office were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all office."
                });
            });

    },

}