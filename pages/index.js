import supabase from "../utils/supabase";

const BlogList = ({ posts }) => {
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      {
        posts.map(({ slug,content,title }) => {
          <a href={'/'+slug}>{title} <br /> {content}</a>
        })
      }
    </div>
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
