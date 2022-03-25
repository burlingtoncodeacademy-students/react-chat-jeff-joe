module.exports = mongoose => {
    const Message = mongoose.model(
        "message",
        mongoose.Schema(
        {
            when: Date,
            user: String,
            roomone: Boolean,
            roomtwo: Boolean,
            roomthree: Boolean,
            roomfour: Boolean,
            body: String
        }))
    return Message;
};