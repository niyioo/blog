import React from 'react';
import { useRouter } from 'next/router';

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    maxWidth: '800px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  postList: {
    listStyle: 'none',
    padding: '0',
  },
  postItem: {
    marginBottom: '10px',
  },
  postLink: {
    textDecoration: 'none',
    color: '#007bff',
    cursor: 'pointer',
  },
};

const Posts = ({ posts }) => {
  const router = useRouter();

  const handleViewPost = (postId) => {
    // Navigate to the individual post page
    router.push(`/post/${postId}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Blog Posts</h1>
      <ul style={styles.postList}>
        {posts && posts.map((post) => (
          <li key={post.ID} style={styles.postItem}>
            <a style={styles.postLink} onClick={() => handleViewPost(post.ID)}>
              {post.Title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  // Fetch data from your API
  const response = await fetch('http://localhost:8080/api/blogposts');
  const posts = await response.json();

  return { props: { posts } };
};

export default Posts;
