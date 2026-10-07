import { connectDB } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define what a Project looks like in MongoDB
const projectSchema = new mongoose.Schema({
  title: String,                    // Project name: "LED Sign for Dubai Mall"
  description: String,              // Project details
  category: String,                 // 'indoor', 'outdoor', 'led', 'vinyl', '3d'
  images: [String],                 // Array of image URLs
  clientName: String,               // Client name
  completedDate: Date,              // When project was finished
  featured: Boolean,                // Show on homepage? true/false
  createdAt: { type: Date, default: Date.now },
});

// Create or get the Project model
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// GET - Retrieve all featured projects (for portfolio/homepage)
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    // Get only featured projects, sorted by newest first
    const projects = await Project.find({ featured: true }).sort({ completedDate: -1 });
    
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST - Admin creates new project
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json(); // Get project data from request
    
    // Save new project to database
    const newProject = await Project.create(body);
    
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}