
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import AddCommentForm from './AddCommentForm';
import { blogSelector } from '../reducers/blogReducer';

function CommentListAndForm() {

    const { singleBlog } = useSelector(blogSelector);

    return (
        <div className='w-full mt-4 flex flex-col items-center 
                p-3 rounded h-full'>
            
            <AddCommentForm />

            <div className='w-full flex flex-col justify-between items-center mt-5'>
                {
                    singleBlog.comments.length === 0 && <h1>No comments</h1>
                }
                {
                    singleBlog.comments.map((comment,i) => <SingleComment key={i} comment={comment} />)
                }
            </div>
        </div>
    )
}

export default CommentListAndForm;