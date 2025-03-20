
import { Astro } from "astro";
import React from "react";

const PageColour = "text-green";

import { getCollection } from "astro:content";
import BlogPost from './BlogPost.astro';

export async function getStaticPaths() {
  const allPosts = await getCollection("blog");

  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return {
      filteredPosts
    };
  });
}



//posts.map((post) => {console.log(post.id)});
export const NumberOfTag = ({ tag, posts }) => {
<p>{getStaticPaths()}</p>
"<p>balls</p>"
};

export default NumberOfTag;