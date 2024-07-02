// dependencies
const { Op } = require('sequelize')
const stages = require('express').Router()
const db = require('../models')
const { Stage,  } = db

// Find All Stages, index route
stages.get('/', async (req,res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                stage_name: { [Op.like]: `%${req.query.stage_name ? req.query.stage_name : ''}%` }
                
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Find a Specific Stage, show route
stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.name },
            include: [
                {
                    model: db.Event,
                    as: 'events',
                    through: db.Stage_Events,
                    attributes: ['event_id', 'event_name', 'start_time', 'end_time']
                }
            ]
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create a Stage
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Update a Stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${ updatedStage } stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete a Stage
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${ deletedStage } stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// export
module.exports = stages; 
