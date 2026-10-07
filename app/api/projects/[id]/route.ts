import { connectDB } from '@/lib/db';
import Project from '@/lib/models/Project';
import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

export const dynamic = 'force-dynamic';

// GET: Retrieve a single project by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    // Validate MongoDB ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Project GET error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}

// PUT: Update a project by ID (admin)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    // Validate MongoDB ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    const project = await Project.findByIdAndUpdate(id, body, { new: true });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Project PUT error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}

// DELETE: Delete a project by ID (admin)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    // Validate MongoDB ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
    }

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Project deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Project DELETE error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}