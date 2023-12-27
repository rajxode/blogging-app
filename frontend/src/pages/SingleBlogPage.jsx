
import React from 'react';
import Comments from '../components/Comments';

const Post = {
    image:'https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg',
    heading:'Spiritual machines: Redefining spirituality in age of artificial intelligence',
    content:'Google recently introduced its latest AI model, Gemini, which is tipped to outperform ChatGPT on most parameters. This launch is just one example of the ongoing AI race that has gained momentum over the past year. Big tech companies are investing heavily in AI to maintain their competitive edge and relevance in the rapidly evolving technological landscape. At this pace, the growth of AI is poised to be exponential, potentially leading to the emergence of superintelligent AI systems in the near future.',
    author:'Ravi Singh',
    createdAt:'December 14, 2023'
};

function SingleBlogPage() {
  return (
    <div className='w-full px-[5%] py-[3%] min-h-[92vh] flex flex-col justify-between'>
        <div className='w-full flex justify-center items-center px-[5%] h-[65vh]'>
            <img src={Post.image} alt="image" className='h-full w-auto rounded' />
        </div>
        <div className='w-full h-auto flex flex-col items-center'>
          <h1 className="text-4xl font-bold">
            {Post.heading}
          </h1>
          <div className='mt-2 font-semibold text-slate-500'>
            {Post.author}, {Post.createdAt}
          </div>
        </div>
        <div className='mt-2'>
          {Post.content}
        </div>
        <div className='w-full mt-2 flex flex-col justify-center items-center'>
          <div className='text-2xl font-semibold text-slate-700 underline'>
            Comments
          </div>
          <div className='w-full'>
            <Comments />
          </div>
        </div>
    </div>
  )
}

export default SingleBlogPage;