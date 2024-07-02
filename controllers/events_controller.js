// dependencies
const events = require('express').Router()
const db = require('../models')
const { Event, Stage, MeetGreets } = db
const { Op } = require('sequelize')

// Find All Events, index route
events.get('/', async (req,res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
                
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Find a Specific Event, show route
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id },
            include: [
                {model: Stage },
                { model: MeetGreets }
            ]
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create a Event
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Update a event
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${ updatedEvents } event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete a Event
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${ deletedEvent } event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// export
module.exports = events; 
