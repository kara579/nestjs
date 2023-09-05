/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});