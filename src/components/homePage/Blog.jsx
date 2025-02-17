import BlogCard from "./BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      image: "assets/img/blog1.jpg",
      date: "March 15, 2024",
      title: "Essential Speech Development Tips",
      description: "Discover effective strategies to support your child's speech development journey.",
    },
    {
      image: "assets/img/blog2.jpg",
      date: "March 10, 2024",
      title: "Fun Language Learning Games",
      description: "Engaging activities that make speech therapy practice enjoyable for kids.",
    },
    {
      image: "assets/img/blog3.jpg",
      date: "March 5, 2024",
      title: "Parent's Guide to Speech Therapy",
      description: "Everything you need to know about supporting your child through speech therapy.",
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-container p-2 m-2">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
