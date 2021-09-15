const Sequelize = require('sequelize');
const document = require('../models').document;

module.exports = {

    /**
     * Create a new document validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.number || !req.body.type) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save Document in the database.
        document.create({
            type: req.body.type,
            number: req.body.number,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the Document."
                });
            });
            
    },

    /**
     * Read all document into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all document.
        document.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving document."
            });

    },

    /**
     * Find a single document with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        document.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving document with id = " + req.params.id
            });

    },

    /**
     * Find document by number.
     * 
     * @param {*} req 
     * @param {*} res 
     */
     findByNumber(req, res) {

        const number = req.params.number;

        document.findAll({
            where: {
                number: number,
            }
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while retrieving the document."
                });
            });

    },


    /**
     * Update a document identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        document.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Document was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update document with id=${id}. Maybe document was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating document with id = " + id
                });
            });

    },

    /**
     * Delete a document with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        document.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Document was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete document with id=${id}. Maybe document was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete document with id = " + id
                });
            });

    },

    /**
     * Delete all document from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        document.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} document were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all document."
                });
            });

    },

}