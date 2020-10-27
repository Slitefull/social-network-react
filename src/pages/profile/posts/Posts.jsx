import React from "react";

const Post = ({content}) => (<div>{content}</div>)

export const Posts = ({posts}) => posts.map(p => <Post key={p.id} {...p}/>)