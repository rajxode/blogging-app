
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import AddCommentForm from './AddCommentForm';
import { blogSelector } from '../reducers/blogReducer';
import { authSelector } from '../reducers/authReducer';

function CommentListAndForm() {

    const { loggedInUser } = useSelector(authSelector);
    const { singleBlog } = useSelector(blogSelector);

    const comments = singleBlog.comments.slice(0).reverse();

    return (
        <div className='w-full mt-4 flex flex-col items-center 
                p-3 rounded h-full'>
            
            {
                loggedInUser && <AddCommentForm />
            }

            <div className='w-full flex flex-col justify-between items-center mt-5'>
                {
                    comments.length === 0 && <h1>No comments</h1>
                }
                {
                    comments.map((comment,i) => <SingleComment key={i} comment={comment} />)
                }
            </div>
        </div>
    )
}

export default CommentListAndForm;