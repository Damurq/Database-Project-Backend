const Sequelize = require('sequelize');
const state = require('../models').state;

module.exports = {

    /**
     * Create a new state validate before if not exists.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

        // Validate request.
        if (!req.body.name) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Save state in the database.
        state.create({
            name: req.body.name,
        })
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while creating the state."
                });
            });
            
    },

    /**
     * Read all state into database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findAll(req, res) {

        // Retrieve all state.
        state.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    error.message || "Some error occurred while retrieving state."
            });

    },

    /**
     * Find a single state with an id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    findOne(req, res) {

        state.findByPk(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                message:
                    "Error retrieving state with id = " + req.params.id
            });

    },

    /**
     * Update a state identified by the id in the request.
     *      
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

        const id = req.params.id;

        state.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "state was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update state with id=${id}. Maybe state was not found or req.body is empty!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Error updating state with id = " + id
                });
            });

    },

    /**
     * Delete a state with the specified id.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

        const id = req.params.id;

        state.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "state was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete state with id=${id}. Maybe state was not found!`
                    });
                }
            })
            .catch(error => {
                res.status(500).send({
                    message: "Could not delete state with id = " + id
                });
            });

    },

    /**
     * Delete all state from the database.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAll(req, res) {

        state.destroy({
            where: {},
            truncate: false,
        })
            .then(nums => {
                res.send({ message: `${nums} state were deleted successfully!`});
            })
            .catch(error => {
                res.status(500).send({
                    message:
                        error.message || "Some error occurred while removing all state."
                });
            });

    },

}