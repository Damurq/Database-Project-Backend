const Sequelize = require('sequelize');
const account = require('../models').account;

module.exports = {

    /**
     * Create a new account validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.customerId) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save account in the database.
        account.create({
            customerId: req.body.customerId,
            number: req.body.number,
            type: req.body.type,
            amount: req.body.amount,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the account."
                });
            });
            
    },

    /**
     * Read all account into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all account.
        account.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving account."
            });

    },

    /**
     * Find a single account with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        account.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving account with id = " + req.params.id
            });

    },

    /**
     * Update a account identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        account.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "account was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update account with id=${id}. Maybe account was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating account with id = " + id
                });
            });

    },

    /**
     * Delete a account with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        account.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "account was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete account with id=${id}. Maybe account was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete account with id = " + id
                });
            });

    },

    /**
     * Delete all account from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        account.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} account were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all account."
                });
            });

    },

}