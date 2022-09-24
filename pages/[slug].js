import supabase from "../utils/supabase";

const BlogDetails = ({ post }) => {
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
};

export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("posts").select("*");

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .match({ slug })
    .single();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};

export default BlogDetails;
