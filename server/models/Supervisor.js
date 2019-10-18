import mongoose from 'mongoose';

const SupervisorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  } ,
  secondName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

const Supervisor = mongoose.model('Supervisor', SupervisorSchema);

export default Supervisor;