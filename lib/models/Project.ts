import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  title: string;
  description: string;
  category: string;
  images: string[];
  clientName: string;
  completedDate: Date;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: [String], default: [] },
    clientName: { type: String, required: true },
    completedDate: { type: Date, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);