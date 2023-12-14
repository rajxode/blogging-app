
import React from 'react';
import SinglePost from './SinglePost';

const posts = [
  {
    image:'https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg',
    heading:'Spiritual machines: Redefining spirituality in age of artificial intelligence',
    content:'Google recently introduced its latest AI model, Gemini, which is tipped to outperform ChatGPT on most parameters. This launch is just one example of the ongoing AI race that has gained momentum over the past year. Big tech companies are investing heavily in AI to maintain their competitive edge and relevance in the rapidly evolving technological landscape. At this pace, the growth of AI is poised to be exponential, potentially leading to the emergence of superintelligent AI systems in the near future.',
    author:'Ravi Singh',
    createdAt:'December 14, 2023'
  },
  {
    image:'https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg',
    heading:'Spiritual machines: Redefining spirituality in age of artificial intelligence',
    content:'Google recently introduced its latest AI model, Gemini, which is tipped to outperform ChatGPT on most parameters. This launch is just one example of the ongoing AI race that has gained momentum over the past year. Big tech companies are investing heavily in AI to maintain their competitive edge and relevance in the rapidly evolving technological landscape. At this pace, the growth of AI is poised to be exponential, potentially leading to the emergence of superintelligent AI systems in the near future.',
    author:'Ravi Singh',
    createdAt:'December 14, 2023'
  },
  {
    image:'https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg',
    heading:'Spiritual machines: Redefining spirituality in age of artificial intelligence',
    content:'Google recently introduced its latest AI model, Gemini, which is tipped to outperform ChatGPT on most parameters. This launch is just one example of the ongoing AI race that has gained momentum over the past year. Big tech companies are investing heavily in AI to maintain their competitive edge and relevance in the rapidly evolving technological landscape. At this pace, the growth of AI is poised to be exponential, potentially leading to the emergence of superintelligent AI systems in the near future.',
    author:'Ravi Singh',
    createdAt:'December 14, 2023'
  },
  {
    image:'https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg',
    heading:'Spiritual machines: Redefining spirituality in age of artificial intelligence',
    content:'Google recently introduced its latest AI model, Gemini, which is tipped to outperform ChatGPT on most parameters. This launch is just one example of the ongoing AI race that has gained momentum over the past year. Big tech companies are investing heavily in AI to maintain their competitive edge and relevance in the rapidly evolving technological landscape. At this pace, the growth of AI is poised to be exponential, potentially leading to the emergence of superintelligent AI systems in the near future.',
    author:'Ravi Singh',
    createdAt:'December 14, 2023'
  }
]


function Posts() {
  return (
    <div className='flex flex-col justify-between items-center'>
      { posts.map((post,i) => <SinglePost key={i} post={post} />)}
    </div>
  )
}

export default Posts;