"use client"
import client from "../lib/sanityClient";
import { useState } from "react";

export default async function Home() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };

  // Sanity query
  const query = `*[_type == "post"]{
    _id,
    title,
    "imageURL": image.asset._ref
  }`;

  // Fetch data from Sanity
  const posts = await client.fetch(query);
  console.log(posts)

  function formatImageString(imageString: string): string {
    // Remove 'image-' from the start of the string
    const withoutPrefix = imageString.replace(/^image-/, '');
    // Replace '-jpg' at the end of the string with '.jpg'
    const formattedString = withoutPrefix.replace(/-jpg$/, '.jpg');
    return formattedString;
  }

  return (
    <div className={isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}>
      
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div>
          <a href="/" className="text-2xl font-bold hover:text-gray-300">UH Blogs</a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded-md hover:bg-gray-700 hover:text-gray-300"
          >
            {isDarkTheme ? "Light Theme" : "Dark Theme"}
          </button>
          <a
            href="https://studio-uh-blogs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-700 hover:text-gray-300"
          >
            Admin
          </a>
        </div>
      </header>

      <div className="text-center p-6">
          <h2 className="text-2xl font-bold mb-2">Latest Blog</h2>
          <p className="text-lg">Discover the latest updates and insights in our newest blog post.</p>
        </div>
    <main className="p-4">
        <div>
        {posts.map((post: { _id: string; title: string; imageURL: string }) => (
            <a key={post._id} href={`/post/${post._id}`}>
              <a className="block p-4 border rounded-lg hover:shadow-lg">
                <img src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${formatImageString(post.imageURL)}`} alt={post.title} />
                <h3 className="text-lg font-bold mt-2">{post.title}</h3>
              </a>
            </a>
          ))}
        </div>
    </main>

    <footer className="flex justify-center items-center p-4 border-t border-gray-700">
        <p>2024 UH Blogs</p>
      </footer>

    </div>
  );
}
