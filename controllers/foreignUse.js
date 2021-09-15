const Sequelize = require('sequelize');
const foreignUse = require('../models').foreignUse;

module.exports = {

    /**
     * Create a new foreignUse validate before if not exists.
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

        // Save foreignUse in the database.
        foreignUse.create({
            requestId: req.body.requestId,
            isNeed: req.body.isNeed,
            source: req.body.source,
            arrival: req.body.arrival,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the foreignUse."
                });
            });
            
    },

    /**
     * Read all foreignUse into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all foreignUse.
        foreignUse.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving foreignUse."
            });

    },

    /**
     * Find a single foreignUse with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        foreignUse.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving foreignUse with id = " + req.params.id
            });

    },

    /**
     * Update a foreignUse identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        foreignUse.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "foreignUse was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update foreignUse with id=${id}. Maybe foreignUse was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating foreignUse with id = " + id
                });
            });

    },

    /**
     * Delete a foreignUse with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        foreignUse.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "foreignUse was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete foreignUse with id=${id}. Maybe foreignUse was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete foreignUse with id = " + id
                });
            });

    },

    /**
     * Delete all foreignUse from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        foreignUse.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} foreignUse were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all foreignUse."
                });
            });

    },

}