import { connectDB } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define Project schema (same as Step 6)
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  images: [String],
  clientName: String,
  completedDate: Date,
  featured: Boolean,
  createdAt: { type: Date, default: Date.now },
});

// Create or get the Project model
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// GET - Retrieve a single project by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    // Get project by ID
    const project = await Project.findById(params.id);
    
    // If project doesn't exist
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

// PUT - Update a project (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json(); // Get updated data
    
    // Update the project and return updated version
    const project = await Project.findByIdAndUpdate(params.id, body, { new: true });
    
    // If project doesn't exist
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a project (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    // Delete the project
    const result = await Project.findByIdAndDelete(params.id);
    
    // If project doesn't exist
    if (!result) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}