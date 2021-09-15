const Sequelize = require('sequelize');
const request = require('../models').request;

module.exports = {

    /**
     * Create a new request validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.accountId || !req.body.officeId) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save request in the database.
        request.create({
            accountId: req.body.accountId,
            officeId: req.body.officeId,
            estimatedAmount: req.body.estimatedAmount,
            averageTransactions: req.body.averageTransactions,
            fundSource: req.body.fundSource,
            fundArrival: req.body.fundArrival,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the request."
                });
            });
            
    },

    /**
     * Read all request into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all request.
        request.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving request."
            });

    },

    /**
     * Find a single request with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        request.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving request with id = " + req.params.id
            });

    },

    /**
     * Update a request identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        request.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "request was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update request with id=${id}. Maybe request was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating request with id = " + id
                });
            });

    },

    /**
     * Delete a request with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        request.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "request was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete request with id=${id}. Maybe request was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete request with id = " + id
                });
            });

    },

    /**
     * Delete all request from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        request.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} request were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all request."
                });
            });

    },

}