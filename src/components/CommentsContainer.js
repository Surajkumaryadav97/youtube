import React from "react";
const commentsData=[
    {
        name:"Suraj yadav",
        text:"I am a Coder",
        replies:[

        ]
    },
    
]
const Comment=({data})=>{
    const {name,text,replies}=data;
  return (
  <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img className="w-12 h-12" 
      alt="user" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>Comment</p>
      </div>
  </div>)
}
const CommentsList=({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}>
          <Comment data={comment}/>
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}/>
          </div>
        </div>
    ));
}
const CommentsContainer=()=>{
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentsList comments={commentsData}/>
        </div>
    )
}
export default CommentsContainer;