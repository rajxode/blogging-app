
import React from 'react';
import Comments from '../components/Comments';

const Post = {
    image:'https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg',
    heading:'How I Won Singapore’s GPT-4 Prompt Engineering Competition',
    content:"Last month, I had the incredible honor of winning Singapore’s first ever GPT-4 Prompt Engineering competition, which brought together over 400 Science & AI team, is a handy template for structuring prompts. It considers all the key aspects that influence the effectiveness and relevance of an LLM’s response, leading to more optimal responses. Delimiters are special tokens that help the LLM distinguish which parts of your prompt it should consider as a single unit of meaning. This is important because your entire prompt arrives to the LLM as a single long sequence of tokens. Delimiters provide structure to this sequence of tokens by fencing specific parts of your prompt to be treated differently. It is noteworthy that delimiters may not make a difference to the quality of an LLM’s response for straightforward tasks. However, the more complex the task, the more impact the usage of delimiters for sectioning has on the LLM’s response.Last month, I had the incredible honor of winning Singapore’s first ever GPT-4 Prompt Engineering competition, which brought together over 400 prompt-ly brilliant participants, organised by the Government Technology Agency of Singapore (GovTech). Prompt engineering is a discipline that blends both art and science — it is as much technical understanding as it is of creativity and strategic thinking. This is a compilation of the prompt engineering strategies I learned along the way, that push any LLM to do exactly what you need and more!. In writing this, I sought to steer away from the traditional prompt engineering techniques that have already been extensively discussed and documented online. Instead, my aim is to bring fresh insights that I learned through experimentation, and a different, personal take in understanding and approaching certain techniques. I hope you’ll enjoy reading this piece!. Effective prompt structuring is crucial for eliciting optimal responses from an LLM. The CO-STAR framework, a brainchild of GovTech Singapore’s Data Science & AI team, is a handy template for structuring prompts. It considers all the key aspects that influence the effectiveness and relevance of an LLM’s response, leading to more optimal responses. Delimiters are special tokens that help the LLM distinguish which parts of your prompt it should consider as a single unit of meaning. This is important because your entire prompt arrives to the LLM as a single long sequence of tokens. Delimiters provide structure to this sequence of tokens by fencing specific parts of your prompt to be treated differently. It is noteworthy that delimiters may not make a difference to the quality of an LLM’s response for straightforward tasks. However, the more complex the task, the more impact the usage of delimiters for sectioning has on the LLM’s response.Last month, I had the incredible honor of winning Singapore’s first ever GPT-4 Prompt Engineering competition, which brought together over 400 prompt-ly brilliant participants, organised by the Government Technology Agency of Singapore (GovTech). Prompt engineering is a discipline that blends both art and science — it is as much technical understanding as it is of creativity and strategic thinking. This is a compilation of the prompt engineering strategies I learned along the way, that push any LLM to do exactly what you need and more!. In writing this, I sought to steer away from the traditional prompt engineering techniques that have already been extensively discussed and documented online. Instead, my aim is to bring fresh insights that I learned through experimentation, and a different, personal take in understanding and approaching certain techniques. I hope you’ll enjoy reading this piece!. Effective prompt structuring is crucial for eliciting optimal responses from an LLM. The CO-STAR framework, a brainchild of GovTech Singapore’s Data Science & AI team, is a handy template for structuring prompts. It considers all the key aspects that influence the effectiveness and relevance of an LLM’s for sectioning has on the ",
    author:'Ravi Singh',
    summary:'A deep dive into the strategies I learned for harnessing the power of Large Language Models (LLMs)',
    createdAt:'December 14, 2023'
};

function SingleBlogPage() {
  return (
    <div className='w-1/2 py-[3%] min-h-[92vh] flex flex-col mx-auto justify-between'>
        <div className='w-full my-3 h-auto flex flex-col'>
          <h1 className="text-5xl font-bold">
            {Post.heading}
          </h1>
          <div className='text-xl my-3 font-semibold text-slate-500'>
            {Post.summary}
          </div>
          <div className='my-3 font-semibold text-slate-500'>
            {Post.author}, {Post.createdAt}
          </div>
        </div>

        <div className='w-full flex justify-center items-center h-[65vh] my-3'>
            <img src={Post.image} alt="image" className='h-full w-auto rounded' />
        </div>

        <div className='mt-2 text-xl'>
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