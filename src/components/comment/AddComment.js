import React from "react";

const AddComment = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('hi')
    }

  return (
    <form action="" onSubmit={(e) => submitHandler(e)}>
      <input type="text" placeholder="username" />
      <textarea cols="30" rows="10" placeholder="comment title"></textarea>
      <button>Add Comment</button>
    </form>
  );
};

export default AddComment;
