import mongoose from "mongoose";


const defaultOpts = {
    type: String,
    required: true
}

const AdminSchema = new mongoose.Schema({
    fullname: defaultOpts,
    email: {
        ...defaultOpts,
        unique: true,
    },
    role: defaultOpts,
    password: defaultOpts,
});


export const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
