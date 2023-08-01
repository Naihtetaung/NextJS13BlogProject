import { NextResponse, NextRequest } from "next/server";
import React from "react"
//import connect from "../../../utils/db";
import mongoose from "mongoose";
import Post from "../../../../models/Post";

export async function GET(request, {params}) {
  const {id} = params;
  const MONGODB_URL =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.9ciyzpl.mongodb.net/?retryWrites=true&w=majority`
  let client;
  try {
    client = await mongoose.connect(MONGODB_URL)
    console.log("DB connected!")
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), {status: 200})
  } catch(error) {
    console.log("DB ERROR!", error)
  }
}

export async function DELETE(request, {params}) {
  const {id} = params;
  const MONGODB_URL =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.9ciyzpl.mongodb.net/?retryWrites=true&w=majority`
  let client;
  try {
    client = await mongoose.connect(MONGODB_URL)
    console.log("DB connected!")
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted.", {status: 200})
  } catch(error) {
    console.log("DB ERROR!", error)
  }
}