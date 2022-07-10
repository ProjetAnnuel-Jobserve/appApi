const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            value: ""
        },
        description: {
            type: String,
            value: ""
        },
        dateEnded: {
            type: Date,
            value: "2022/03/23"
        },
        status: {
            type: String,
            value: ""
        },
        userVoters: {
            type: Array,
            value: []
        },
        numberVoteYes: {
            type: Number,
            value: 0
        },
        numberVoteNo: {
            type: Number,
            value: 0
        },
        image: {
            type: String,
            value: ""
        },
        fk_userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        fk_company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company"
        }
    }
);

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;