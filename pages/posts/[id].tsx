import Layout from '../../components/layout';
import Axios from 'axios';
import { getAllContent, getAllIds } from '../../lib/posts';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.name}</title>
        </Head>
        {`${postData.id} >> ${postData.name} >> ${postData.website}`} 
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
    const paths = await getAllIds();
    console.log(`PATHS: ${paths}`)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getAllContent(params.id);
  return {
    props: {
        postData
    }
  }
}
