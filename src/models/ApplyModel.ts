import mongoose from "mongoose";

const ApplySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      default: "No Name",
      min: 2,
      max: 25,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10,
    },
    loanAmount: {
      type: Number,
      min: 1000,
      max: 1000000,
    },
    loanPurpose: {
      type: String,
    },
    employmentStatus: {
      type: String,
    },
    annualIncome: {
      type: Number,
    },
    creditScore: {
      type: Number,
      min: 300,
      max: 800,
    },
    hasCollateral: {
      type: Boolean,
      default: false,
    },
    agreeToTerms: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Apply = mongoose.models.Apply || mongoose.model("Apply", ApplySchema);
export default Apply;
