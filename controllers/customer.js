const Sequelize = require('sequelize');
const customer = require('../models').customer;

module.exports = {

    /**
     * Create a new customer validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.documentId) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save customer in the database.
        customer.create({
            documentId: req.body.documentId,
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            secondLastName: req.body.secondLastName,
            address: req.body.address,
            birthday: req.body.birthday,
            phoneNumber: req.body.phoneNumber,
            landlineNumber: req.body.landlineNumber,
            email: req.body.email,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the customer."
                });
            });
            
    },

    /**
     * Read all customer into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all customer.
        customer.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving customer."
            });

    },

    /**
     * Find a single customer with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        customer.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving customer with id = " + req.params.id
            });

    },

    /**
     * Update a customer identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        customer.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "customer was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update customer with id=${id}. Maybe customer was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating customer with id = " + id
                });
            });

    },

    /**
     * Delete a customer with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        customer.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "customer was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete customer with id=${id}. Maybe customer was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete customer with id = " + id
                });
            });

    },

    /**
     * Delete all customer from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        customer.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} customer were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all customer."
                });
            });

    },

}