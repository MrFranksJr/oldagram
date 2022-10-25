const mainContainer = document.getElementById("main-container")
let likeButtons = []
let pageContent = ""
let emoji = String.fromCodePoint(0x1F600)
const defaultPosts = [
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
    },
        {
        name: "Franky Blondeel",
        username: "MrFranks",
        location: "Knokke, Belgium",
        avatar: "images/user-avatar.png",
        post: "images/post-franky.jpg",
        comment: "just me and my sister and brother, enjoying some goodies on the beach, a looong time ago 🍦",
        likes: 87
}
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
    for (i=0; i < posts.length; i++) {
        let name = posts[i].name
        let username = posts[i].username
        let location = posts[i].location
        let avatar = posts[i].avatar
        let post = posts[i].post
        let comment = posts[i].comment
        let likes = posts[i].likes

        
        pageContent += `
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
                <img class="like-btn" src="images/icon-heart.png">
                <img class="comment-btn" src="images/icon-comment.png">
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
    mainContainer.innerHTML = pageContent
    initLikeButtons()
}

function initLikeButtons() {
    let likeIcons = document.querySelectorAll(".like-btn")
    let likeCount = []
    for (i = 0; i < posts.length; i++) {
        likeCount.push(posts[i].likes)
    }
    console.log(likeCount)
    likeIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
          likeCount[index] += 1
          posts[index].likes.push(likeCount[index])
          console.log(posts[index].likes)
        })
      })
}


removeBtn = document.getElementsByTagName("span")
    i = 0
    for (i = 0; i < removeBtn.length; i++) {
        removeBtn[i].onclick = function() {
        let a = this.previousSibling
        let index = myShopping.indexOf(a.textContent)
        myShopping.splice(index, 1)
        localStorage.setItem("myShopping", JSON.stringify(myShopping))
        renderShoppingItems(myShopping)
        lineRemoval()
      } 
    }