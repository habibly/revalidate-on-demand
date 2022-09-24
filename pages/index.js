import supabase from "../utils/supabase";

const BlogList = ({ posts }) => {
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
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
