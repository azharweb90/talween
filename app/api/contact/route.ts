import { connectDB } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define what a Contact looks like in MongoDB
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Create or get the Contact model
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// POST - Handle form submissions
export async function POST(request: NextRequest) {
  try {
    await connectDB(); // Connect to MongoDB

    const body = await request.json(); // Get form data
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    const newContact = await Contact.create({
      name,
      email,
      phone,
      company,
      message,
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: newContact._id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

// GET - Retrieve all contacts (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}