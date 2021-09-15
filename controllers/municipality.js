const Sequelize = require('sequelize');
const municipality = require('../models').municipality;

module.exports = {

    /**
     * Create a new municipality validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.stateId || !req.body.name) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save municipality in the database.
        municipality.create({
            stateId: req.body.stateId,
            name: req.body.name,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the municipality."
                });
            });
            
    },

    /**
     * Read all municipality into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all municipality.
        municipality.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving municipality."
            });

    },

    /**
     * Read all municipality from a State into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     findByState(req, res) {

        // Retrieve all municipality.
        municipality.findAll({
            where: { stateId: req.params.stateId }
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
     * Find a single municipality with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        municipality.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving municipality with id = " + req.params.id
            });

    },

    /**
     * Update a municipality identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        municipality.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "municipality was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update municipality with id=${id}. Maybe municipality was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating municipality with id = " + id
                });
            });

    },

    /**
     * Delete a municipality with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        municipality.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "municipality was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete municipality with id=${id}. Maybe municipality was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete municipality with id = " + id
                });
            });

    },

    /**
     * Delete all municipality from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        municipality.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} municipality were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all municipality."
                });
            });

    },

}