const mongoose = require("mongoose");
const authRoles = require("../constants/roles");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoosePaginate = require("mongoose-paginate");
const { isEmail } = require("validator");
const i18n = require("../../config/i18n");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String },
  content: { type: String },
  category: {
    type: String,
    lowercase: true,
    required: true,
  },
  parentCategory: {
    type: String,
    lowercase: true,
    required: true,
  },
  image: { type: String },
  titleTag: { type: String },
  metaDescription: { type: String },
  url: { type: String },
});

// PostSchema.methods = {
//     resPostData: function () {
//         return {
//             email: this.email,
//             id: this._id,
//             role: this.role,
//             verified: this.verified,
//         };
//     },
// };

// UserSchema.statics = {

// };

PostSchema.plugin(mongoosePaginate);
mongoose.model("Post", PostSchema);
