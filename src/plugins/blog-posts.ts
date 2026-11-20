import { BlogContent } from "@docusaurus/plugin-content-blog";
import { Plugin } from "@docusaurus/types";

export default function blogPostPlugin() : Plugin {
  return {
    name: 'blog-posts',

    allContentLoaded({allContent, actions}) {
      const { blogPosts } = allContent['docusaurus-plugin-content-blog'].default as BlogContent;

      const posts = blogPosts
        .filter(({metadata}) => !metadata.unlisted)
        .slice(0, 3)
        .map(({metadata}) => ({
          title: metadata.title,
          description: metadata.description,
          permalink: metadata.permalink
        }));

      actions.setGlobalData({posts});
    }
  }
}