
export function renderListElement(data) {
    let itemElement = document.createElement('li');
    if(data.class) {
        itemElement.classList.add(data.class)
    }
    itemElement.innerHTML = `<a href="${data.href}">${data.content}</a>`;
    data.parentElement.append(itemElement);
}
export function toUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}   

 export function renderStudentData(data) {
  
    let userItem = document.createElement('div')
    userItem.classList.add('user-item')

    let pageName = document.createElement('h1')
    pageName.textContent = 'User page'

    let userPostsTitle = document.createElement('h2')
    userPostsTitle.textContent = 'User posts:'

    let userAlbumTitle = document.createElement('h2')
    userAlbumTitle.textContent = 'User albums:'

    let ulElement = document.createElement('ul')

    let userName = document.createElement('li')
    userName.classList.add('user-name')
    userName.innerHTML = `<strong>Name:</strong> <a href="./user.html?user_id=${data.id}"> ${data.name} </a>(${data.username})`

    let userEmail = document.createElement('li')
    userEmail.classList.add('user-email')
    userEmail.innerHTML = `<strong>Email:</strong> ${data.email}`

    let userPhone = document.createElement('li')
    userPhone.classList.add('user-phone')
    userPhone.innerHTML = `<strong>User phone:</strong> ${data.phone}`

    let usersWebsite = document.createElement('li')
    usersWebsite.classList.add('users-website')
    usersWebsite.innerHTML = `<strong>Users website:</strong> ${data.website}`

    let usersCompany = document.createElement('li')
    usersCompany.classList.add('users-company')
    usersCompany.innerHTML = `users.company.name`

    let userAddress = document.createElement('li')
    userAddress.classList.add('user-address')
    userAddress.innerHTML = `<strong>User address: </strong>${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`
    let userAddressLocation = document.createElement('li')
    userAddressLocation.classList.add('user-address-location')
    userAddressLocation.innerHTML = `<a href="https://www.google.com/maps/search/google+maps/@${data.address.geo.lat},${data.address.geo.lnt}">User Location map</a>`

    ulElement.append(userName,userEmail,userAddress,userAddressLocation,userPhone,usersWebsite)
    userItem.append(ulElement)
    userWrapper.append(userItem,userPosts,userAlbums)
}
export function renderStudentAlbums() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=albums`)
    .then(res => res.json())
    .then(albums => {
      albums.albums.map(album => {  
                renderListElement({
                 content: album.title,
                 href: `./albums.html?user_id=${userId}&album_title=${album.title}&user_name=${userName}`,
                 parentElement: userAlbums,
                 class: 'user-album',
                })
      })
    })
   } 
export function renderStudentPosts(data) {
    
    data.posts.map(post => {
    renderListElement({
            content: toUpperCase(post.title),
            href: `./post.html?post_id=${post.id}&post_title=${post.title}&user_name=${userName}&post_body=${post.body}`,
            class: 'title-element',
            parentElement: userPosts,
        })
})
}
