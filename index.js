const mainContainer = document.getElementById("main-container")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (i=0; i < posts.length; i++) {
    let name = posts[i].name
    let username = posts[i].username
    let location = posts[i].location
    let avatar = posts[i].avatar
    let post = posts[i].post
    let comment = posts[i].comment
    let likes = posts[i].likes

    mainContainer.innerHTML += `
    <article>
    <section class="user-topbar">
        <img class="poster-avatar" src="${avatar}">
        <div class="user-info">
            <p class="username strong">${name}</p>
            <p class="user-location">${location}</p>
        </div>
    </section>
    <section class="user-post">
        <img class="post-img" src="${post}">
    </section>
    <section class="interactions">
        <div class="btn-row">
            <img src="images/icon-heart.png">
            <img src="images/icon-comment.png">
            <img src="images/icon-dm.png">
        </div>
        <div class="likes-number">
            <p class="strong">${likes} likes</p>
        </div>
        <div class="comments">
            <p><span class="poster-name strong">${username}</span> ${comment}</p>
        </div>
    </section>
    </article>
    `
}