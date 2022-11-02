*Oct 26, 2022 - Franky Jr Blondeel*


# Oldagram - Instagram Clone


## Overview

I'm currently refreshing my entire JavaScript knowledge through a course on [Scrimba](https://scrimba.com/allcourses)

The assignment was to make an Instagram clone called 'Oldagram'. We all like selfies. Some famous painters in the past were way ahead of the curve and made their own classic hand-painted selfies. Hence: Oldagram.

The assignment was mostly an exercise in CSS. But I definitly decided to keep on practicing my Javascript and applied a lot of the functionality we practiced in some of the previous lessons.

The following were the base requirements of the assignment:
* Create the first post
* Use semantic HTML
* Add hover effects on the icons (Like, Comment, Share)
<p align="center">
<img src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/oldagram/requirements.png">
</p>

The following were the Stretch goals:
* Use Javascript to render out all three posts
* Increase the likes when double clicking the post
<p align="center">
<img src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/oldagram/stretch-goals.png">
</p>


It was a given that I wanted to immediately render all posts using Javascript... All posts are coming from an array of Objects.

Given some of the previous lessons, I borrowed some stuff from the chrome extension class
Extra goals that I achieved:
* The like system is extended:
    - When clicking the heart- icon, the system shows a string 'You and XXX others like this' and later revert to the sum of all Like
    - 'Over-liking' is not possible. It is possible to unlike a picture when clicking the heart again
    <p align="center">
    <img src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/oldagram/like-system1.jpg">
    </p>
    <p align="center">
    <img src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/oldagram/like-system2.jpg">
    </p>
    <p align="center">
    <img src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/oldagram/like-system3.jpg">
    </p>
* The posts themselves are initially loaded in from an array of Objects. However, the first thing I do is store all posts inside the LocalStorage. 
    - I actually wanted to extend the initial array to allow people to add extra posts or comments or something. I left this behind, and did not implement it.
    - The second time you load the page, the posts are loaded from LocalStorage.
* The data in the Objects were extended to hold the Likes. This was necessary to have some place to actually store the likes you have given (which the app will do).
* Double-click eventlistener on the pics: It is possible to like the pics by double-clicking or double-tapping. Unliking is not possible via double-tap, which is by design.
* Added some extra posts, not that this is a notable achievement.

<p align="center">
<img src="https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/oldagram/app_screen.jpg">
</p>


## Conclusion

This was by far the most fun application to build. Both from a technical as a creative perspective. I feel like I'm quickly improving on many different fronts, further proving it is important to program every day, even if it's just a couple of lines ;)