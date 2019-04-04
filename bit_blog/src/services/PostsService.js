import { ApiBase } from "../shared/ApiBase"
import { Post } from "../entites/PostEntitet"

class PostService {
    fetchPost(postId) {
        const userEndpoint = `${ApiBase}posts/${postId}`;

        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then((apiPost) => {
                const { userId, title, id, body } = apiPost
                return new Post(userId, title, id, body);
            });
    }

    fetchPosts() {
        const userEndpoint = `${ApiBase}posts`;

        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then(apiPosts => {
                return apiPosts
                    .map(({ userId, title, id, body }) => {
                        return new Post(userId, title, id, body);
                    });
            })
    }

    fetchPostsList(postId){
        const userEndpoint=`${ApiBase}posts?userId=${postId}`;
        return fetch(userEndpoint)
        .then(respons=>{
            // console.log(respons)
            return respons.json();
        }).then((apiUser)=>{
            return apiUser
            
            
        })
    }
}




const postDetail = new PostService();

export { postDetail };