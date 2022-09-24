import supabase from "../utils/supabase";

const BlogList = ({ posts }) => {
  const blogs = posts.map((post) =>
    <a href={'/'+post.slug} key={post.id}>{post.title}  <br /></a>
  );
  return (
      <div>{blogs}</div>
  );
};

export const getStaticProps = async () => {
  const { data: posts } = await supabase.from("posts").select("id, slug, title");

  return {
    props: {
      posts,
    },
    revalidate: 86400,
  };
};

export default BlogList;
