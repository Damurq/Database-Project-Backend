const Sequelize = require('sequelize');
const voucher = require('../models').voucher;

module.exports = {

    /**
     * Create a new voucher validate before if not exists.
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

        // Save voucher in the database.
        voucher.create({
            requestId: req.body.requestId,
            voucherNumber: req.body.voucherNumber,
            date: req.body.date,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the voucher."
                });
            });
            
    },

    /**
     * Read all voucher into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all voucher.
        voucher.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving voucher."
            });

    },

    /**
     * Find a single voucher with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        voucher.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving voucher with id = " + req.params.id
            });

    },

    /**
     * Update a voucher identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        voucher.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "voucher was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update voucher with id=${id}. Maybe voucher was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating voucher with id = " + id
                });
            });

    },

    /**
     * Delete a voucher with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        voucher.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "voucher was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete voucher with id=${id}. Maybe voucher was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete voucher with id = " + id
                });
            });

    },

    /**
     * Delete all voucher from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        voucher.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} voucher were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all voucher."
                });
            });

    },

}