import { ApiBase } from "../shared/ApiBase"

class AuthorFetch {
    fetchAuthors() {
        const userEndpoint = `${ApiBase}users`;
        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then((response) => {


                return response
            })
    }
    fetchAutor(postId) {
        const userEndpoint = `${ApiBase}users/${postId}`;
        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then((response) => {

                console.log(response)
                return response
            })
    }
}




const authorService = new AuthorFetch();

export { authorService };