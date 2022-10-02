import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      date: post.printDate,
      tags: post.tags,
      cta: post.cta,
      readingTime: post.printReadingTime,
      description: post.description,
      image: post.image,
      unsplashImage: post.unsplashImage,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
