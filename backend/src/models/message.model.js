import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // ID of the user who sends the message
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Links this ID to the 'User' model
      required: true,
    },
    // ID of the user who receives the message
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Links this ID to the 'User' model
      required: true,
    },
    // Message content (optional if an image is sent instead)
    text: {
      type: String,
    },
    // URL or path to an image (optional if text is sent instead)
    image: {
      type: String,
    },
  },
  { timestamps: true }, // Automatically creates 'createdAt' and 'updatedAt' fields
);

export const Message = mongoose.model("Message", messageSchema);
