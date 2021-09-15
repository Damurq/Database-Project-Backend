const Sequelize = require('sequelize');
const complement = require('../models').complement;

module.exports = {

    /**
     * Create a new complement validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.requestId) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save complement in the database.
        complement.create({
            requestId: req.body.requestId,
            reason: req.body.reason,
            use: req.body.use,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the complement."
                });
            });
            
    },

    /**
     * Read all complement into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all complement.
        complement.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving complement."
            });

    },

    /**
     * Find a single complement with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        complement.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving complement with id = " + req.params.id
            });

    },

    /**
     * Update a complement identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        complement.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "complement was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update complement with id=${id}. Maybe complement was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating complement with id = " + id
                });
            });

    },

    /**
     * Delete a complement with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        complement.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "complement was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete complement with id=${id}. Maybe complement was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete complement with id = " + id
                });
            });

    },

    /**
     * Delete all complement from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        complement.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} complement were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all complement."
                });
            });

    },

}