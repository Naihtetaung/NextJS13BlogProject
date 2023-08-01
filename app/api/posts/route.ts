import { NextResponse, NextRequest } from "next/server";
import React from "react"
import connect from "../../../utils/db";
import Post from "../../../models/Post";
import mongoose from "mongoose";

export async function GET(req:NextRequest, res: NextResponse) {
  const MONGODB_URL =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.9ciyzpl.mongodb.net/?retryWrites=true&w=majority`
  let client;
  const url = new URL(req.url)
  const username = url.searchParams.get("username")
  try {
    client = await mongoose.connect(MONGODB_URL)
    console.log("DB connected!")
    const posts = await Post.find( username && {username} );
    return new NextResponse(JSON.stringify(posts), {status: 200})
  } catch(error) {
    console.log("DB ERROR!", error)
  }
}

export async function POST(req:NextRequest, res: NextResponse) {
  const MONGODB_URL =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.9ciyzpl.mongodb.net/?retryWrites=true&w=majority`
  let client;
  const body = await req.json();
  const newPost = new Post(body);
  try {
    client = await mongoose.connect(MONGODB_URL)
    console.log("DB connected!")
    await newPost.save()
    return new NextResponse("Post has been created.", {status: 201})
  } catch(error) {
    console.log("DB ERROR!", error)
  }
}