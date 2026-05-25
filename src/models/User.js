import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 30,
        },
        email:{
            type: String,
            required:[ true, "Email is required.."],
            lowercase: true,
            unique: true,
            validate: {
                validator:(value) =>{
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return emailRegex.test(value);
                 },
                 message: "Invalid email address",
            },
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            minLength: [6, "Password must be longer than 6 letter"],
            // validate: {
            //     validator:(value) => {
            //         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            //         return passwordRegex.test(value);
            //     },
            //     message: "Password must contain uppercase, lowercase and special character"
            // },
        },
        phone: {
            type: String,
            required:[true,"Phone number is required."],
            minLength: 8,
            maxLength: 13,
            unique: true,
        },
        createdAt:{
            type: Date,
            default: Date.now(),
        },
        isActive:{
            type:Boolean,
            default:true,
        },
          address: {
    city: {
      required: true,
      type: String,
    },
    province: String,
    street: String,
    country: {
      type: String,
      default: "Nepal",
    },
  },
        roles:{ 
            type:[String],
            enum: ["CUSTOMER", "MERCHANT", "ADMIN", "SUPER_ADMIN"],
            default:["CUSTOMER"],
        },

        profileImageUrl:{
            type: String,
        }
});

export default mongoose.model("User", userSchema);