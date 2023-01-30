/*
    state = {
	    loading:
	    data:
	    error:
    }
    포스트 여러개 조회하기 
    const GET_POST
    const GET_POSTS_SUCCESS
    const GET_POSTS_ERROR
    포스트 하나 조회하기
    const GET_POST
    const GET_POSTS_SUCCESS
    const GET_POSTS_ERROR
*/ 
// import {getPosts,getPostById} from '../api/posts' // postsAPI.getPosts , postsAPI.getPostById
import * as postsAPI from '../api/posts' // * 는 내보내기한 함수를 다 받아옴


//액션타입
const GET_POSTS = "GET_POST";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR ="GET_POSTS_ERROR";
const GET_POST ="GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR ="GET_POST_SUCCESS";

//thunk함수

const getPost = () =>async(dispatch)=>{
    dispatch({type:GET_POSTS}); //요청이 시작됨
    try{
        const post = await postsAPI.getPosts();
        dispatch({ type:GET_POSTS_SUCCESS})
    }
    catch(e){ 
        dispatch({type:GET_POSTS_ERROR , error: e})
    }
}
