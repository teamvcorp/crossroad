import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Adjust path as necessary for your setup
import { BlogPost } from '@prisma/client'; // Import the BlogPost type from Prisma

export async function GET() {
  try {
    // Fetch all blog posts from the database
    const blogPosts: BlogPost[] = await prisma.blogPost.findMany({
      orderBy: {
        author: 'asc', // Sort by author in ascending order
      },
    });
console.log(blogPosts)
    // Group blog posts by author
    const groupedByAuthor: { [author: string]: BlogPost[] } = blogPosts.reduce((acc, post) => {
      if (!acc[post.author]) {
        acc[post.author] = [];
      }
      acc[post.author].push(post);
      return acc;
    }, {} as { [author: string]: BlogPost[] });

    // Convert grouped object into an array of arrays
    const result: BlogPost[][] = Object.values(groupedByAuthor);

    // Return the response as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
