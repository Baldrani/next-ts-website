import Link from 'next/link';
import Layout from "../../components/layout";
import * as React from "react";

interface PostInterface {
    title: string
}

const PostLink: React.FC<PostInterface> = ({ title }) => (
    <li>
        <Link href={`/post?title=${title}`}>
        <a>{title}</a>
        </Link>
    </li>
);

const Blog: React.FC = () => (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    )

export default Blog