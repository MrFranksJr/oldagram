const mainContainer = document.getElementById("main-container")
const hardRefresh = document.getElementById("refresh-btn")
let likeButtons = []
let pageContent = ""
const defaultPosts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        userlike: false,
        recentlyLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh 🧟‍♂️",
        likes: 4,
        userlike: false,
        recentlyLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "GM friends! ☀️ which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        userlike: false,
        recentlyLiked: false
    },
        {
        name: "Franky Blondeel",
        username: "MrFranks",
        location: "Knokke, Belgium",
        avatar: "images/user-avatar.png",
        post: "images/post-franky.jpg",
        comment: "Just me and my sister and brother, enjoying some goodies on the beach, a looong time ago 🍦",
        likes: 87,
        userlike: false,
        recentlyLiked: false
    },
    {
        name: "Leonardo Da Vinci",
        username: "realLeo",
        location: "Turin, Italy",
        avatar: "images/avatar-leo.jpg",
        post: "images/post-leo.jpg",
        comment: "Slow day at the office, decided to make a quick doodle",
        likes: 2653,
        userlike: false,
        recentlyLiked: false
    },
    {
        name: "Claude Monet",
        username: "mrCloClo",
        location: "Giverny, France",
        avatar: "images/avatar-monet.jpg",
        post: "images/post-monet.jpg",
        comment: "Hah! Found this oldie in the attic!",
        likes: 1563,
        userlike: false,
        recentlyLiked: false
    },
]
let posts = []

//onload
checkLocalStorage()


function checkLocalStorage() {
    if (localStorage.getItem("postStorage") === null) {
        console.log("Loading hardcoded posts")
        localStorage.setItem("postStorage", JSON.stringify(defaultPosts))
        posts = JSON.parse(localStorage.getItem("postStorage"))
        loadPosts()
    }
    else {
        console.log("Loading LocalStorage posts")
        posts = JSON.parse(localStorage.getItem("postStorage"))
        loadPosts()
    }
}

function loadPosts() {
    pageContent = ""
    for (i=0; i < posts.length; i++) {
        let name = posts[i].name
        let username = posts[i].username
        let location = posts[i].location
        let avatar = posts[i].avatar
        let post = posts[i].post
        let comment = posts[i].comment
        let likes = posts[i].likes

        let postStructurePt1 = `
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
        `

        let postStructurePt2 = `
                            <img class="comment-btn" src="images/icon-comment.png">
                            <img class='dm-btn' src="images/icon-dm.png">
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

        let alternatePostStructure = `
            <img class="comment-btn" src="images/icon-comment.png">
                <img class='dm-btn' src="images/icon-dm.png">
                    </div>
                    <div class="likes-number">
                    <p class="strong">You and ${likes-1} others liked this</p>
                    </div>
                    <div class="comments">
                    <p><span class="poster-name strong">${username}</span> ${comment}</p>
                    </div>
                </section>
            </article>
        `
        
        if (posts[i].userlike === false) {
            pageContent += postStructurePt1 + `<img class="like-btn" src="images/icon-heart.png">` + postStructurePt2
        }
        else if (posts[i].userlike === true && posts[i].recentlyLiked === true) {
            pageContent += postStructurePt1 + `<img class="like-btn" src="images/liked-icon.png">` + alternatePostStructure
            posts[i].recentlyLiked = false
        }
        else if (posts[i].userlike === true && posts[i].recentlyLiked === false) {
            pageContent += postStructurePt1 + `<img class="like-btn" src="images/liked-icon.png">` + postStructurePt2
        }
    }

    mainContainer.innerHTML = pageContent
    initLikeButtons()
    setTimeout(() => {
        let likedStatements = document.querySelectorAll(".likes-number")
        likedStatements.forEach((statement, index) => {
            let textContent = statement.innerHTML
            if (textContent.includes("You and")) {
                textContent = `<p class="strong">${posts[index].likes} likes<p>`
                statement.innerHTML = textContent
            }
        })
    }, 5000);
}

function initLikeButtons() {
    let likeIcons = document.querySelectorAll(".like-btn")
    let likeCount = []
    for (i = 0; i < posts.length; i++) {
        likeCount.push(posts[i].likes)
    }
    likeIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
        if (posts[index].userlike === false) {
            likeCount[index] += 1
            posts[index].likes = likeCount[index]
            posts[index].userlike = true
            posts[index].recentlyLiked = true
            localStorage.setItem("postStorage", JSON.stringify(posts))
            loadPosts()
        }
        else if (posts[index].userlike === true) {
            likeCount[index] -= 1
            posts[index].likes = likeCount[index]
            posts[index].userlike = false
            localStorage.setItem("postStorage", JSON.stringify(posts))
            loadPosts()
        }
        })
      })
}

hardRefresh.addEventListener("click", function() {
    localStorage.clear()
    document.location.reload(true)
})