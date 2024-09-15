import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma"; // Ensure the correct path to prisma client

export async function POST(request: Request) {
  const data = await request.json();
  
  const { title, content, author } = data;

  try {
    // Perform the Prisma query on the server side
    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        content,
        author,
      },
    });

    return NextResponse.json({ blogPost });
  } catch (error) {
    console.error("Failed to add blog post:", error);
    return NextResponse.json({ error: "Failed to add blog post" }, { status: 500 });
  }
}
