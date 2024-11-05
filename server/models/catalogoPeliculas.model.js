import mongoose from "mongoose";

const CatalogoCineSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    productora: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    url:{
      type: String,
      required: true,
    },
    fechaEstreno: {
      type: Date,
      default: Date.now,
    }
  }, {
    timestamps: true,
    versionKey: false
  })

export default mongoose.model('Products', CatalogoCineSchema);
