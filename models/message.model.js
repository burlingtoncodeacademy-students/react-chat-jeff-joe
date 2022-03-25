module.exports = mongoose => {
    const Message = mongoose.model(
        "message",
        mongoose.Schema(
        {
            when: Date,
            user: String,
            room1: { type: Boolean, default: false },
            room2: { type: Boolean, default: false },
            room3: { type: Boolean, default: false },
            room4: { type: Boolean, default: false },
            body: String
        }))
    return Message;
};