import { useState } from "react";

const AddCommentForm = ({addComment, id}) => {
  const [userName, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim() !== "" && comment.trim() !== "") {
      addComment(id, {user:userName, msg:comment})
      setUsername('');
      setComment(''); 
    }
  };

  return (
    <div className="comments-form">
       <form action="" onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        placeholder="comment title"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button>Add Comment</button>
    </form>
    </div>
  );
};

export default AddCommentForm;
