import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const employeeSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	fname: {
	 	type: String,
		required: true
	},
	lname: {
	 	type: String,
		required: true
	}
}, { collection: 'employee', timestamps: true } );

export default mongoose.model('employee', employeeSchema);
