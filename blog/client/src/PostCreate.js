import React from 'react';

const PostCreate = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Title</label>
                    <input className='form-control' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;