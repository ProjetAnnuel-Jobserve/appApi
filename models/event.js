const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            value: ""
        },
        description: {
            type: String,
            value: ""
        },
        dateInscription: {
            type: Date,
            value: "2022/03/23"
        },
        dateEnded: {
            type: Date
        },
        location: {
            type: String,
            value: ""
        },
        status: {
            type: String,
            value: ""
        },
        participant: {
            type: Array,
            value: []
        },
        review: {
            type: Array,
            value: []
        },
        image: {
            type: String,
            value: ""
        },
        fk_company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company"
        }
    }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;