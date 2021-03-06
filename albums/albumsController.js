async function getAllAlbums() {
    let urlParams = document.location.search
    let serachParams = new URLSearchParams(urlParams)
    let limit = serachParams.get('limit') ? serachParams.get('limit') : 25;
    let page = serachParams.get('page') ? serachParams.get('page') : 1

    let res = await fetch(`https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_page=${page}&_limit=${limit}`);
    let allAlbums  = await res.json();
    return allAlbums;
   }
   
async function getAlbumById() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums?_embed=photos&_expand=user`)
    let albumById = await res.json()
    return albumById
}

async function getAlbumPhotos() {
    let queryParams = document.location.search;
    let urlParams = new URLSearchParams(queryParams);
    let albumId = urlParams.get('album_id');
    let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=20`)
    let albumPhotos = await res.json()
    return albumPhotos
}

async function getAlbumsByIdPhoto(id) {
    let res = await  fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_embed=photos&_limit=1`)
    let albumsPhotos = await res.json()
    return albumsPhotos
}


async function getUsersAlbums() {
    let res = await  fetch(`https://jsonplaceholder.typicode.com/users?_embed=albums`)
    let userAlbums = res.json()
    return userAlbums
}


export{getAllAlbums, getAlbumById, getAlbumPhotos,getUsersAlbums,getAlbumsByIdPhoto}
