import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { useEffect } from "react";
import { getPost } from "../modules/posts";

const PostContainer = () => {
    const {id} = useParams()
    const {data,loading,error} = useSelector(state=>state.posts.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(Number(id)))
    },[dispatch,id])
    if(loading) return <div>로딩중입니다</div>
    if(error) return <div>에러가발생했습니다</div>
    if(!data) return null
    return(
        <div>
            <Post post={data}></Post>
        </div>
    )
}


export default PostContainer