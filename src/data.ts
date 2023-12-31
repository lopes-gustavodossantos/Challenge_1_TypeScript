interface Posts {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    comments: Comments[];
}

interface Comments {
    id: number;
    postId: number;
    user: string;
    email: string;
    body: string;
}

function showPosts() {
    let posts: Posts[] = [
        {
            id: 1,
            title: "HTML",
            imageUrl: "assets/card_image.png",
            body: "HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.",
            comments: [
                {
                    id: 1,
                    postId: 1,
                    user: "html_hater",
                    email: "html_hater2023@gmail.com",
                    body: "I really don't know how u all like this!",
                },
                {
                    id: 2,
                    postId: 1,
                    user: "html_lover",
                    email: "html_lover2023@outlook.com",
                    body: "I love everything on this Markup Language!",
                },
                {
                    id: 3,
                    postId: 1,
                    user: "html_noob",
                    email: "html_noob2023@yahoo.com",
                    body: "I'm trying to learn this Progamming Language.",
                },
            ]
        },
        {
            id: 2,
            title: "CSS",
            imageUrl: "assets/card_image.png",
            body: "CSS was developed by W3C (World Wide Web Consortium) in 1996 for a rather simple reason. HTML element was not designed to have tags that would help format the page. You were only supposed to write the markup for the web page.",
            comments: [
                {
                    id: 1,
                    postId: 2,
                    user: "css_hater",
                    email: "css_hater2023@gmail.com",
                    body: "I really don't know how u all like this!",
                },
                {
                    id: 2,
                    postId: 2,
                    user: "css_lover",
                    email: "css_lover2023@outlook.com",
                    body: "I love everything in CSS!",
                },
                {
                    id: 3,
                    postId: 2,
                    user: "css_noob",
                    email: "css_noob2023@yahoo.com",
                    body: "I'm trying to learn this Progamming Language.",
                },
            ]
        },
        {
            id: 3,
            title: "TypeScript",
            imageUrl: "assets/card_image.png",
            body: "TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. It is a superset of the JavaScript language, designed to give you better tooling at any scale. The lead architect behind TypeScript is Anders Hejlsberg, designer of C# at Microsoft. TypeScript is open source, backed by Microsoft, and considered both a language and a set of tools.",
            comments: [
                {
                    id: 1,
                    postId: 3,
                    user: "typescript_hater",
                    email: "typescript_hater2023@gmail.com",
                    body: "I really don't know how u all like this!",
                },
                {
                    id: 2,
                    postId: 3,
                    user: "typescript_lover",
                    email: "typescript_lover2023@outlook.com",
                    body: "I love everything on this Programming Language!",
                },
                {
                    id: 3,
                    postId: 3,
                    user: "typescript_noob",
                    email: "typescript_noob2023@yahoo.com",
                    body: "I'm trying to learn this Progamming Language.",
                },
            ]
        },
        {
            id: 4,
            title: "JavaScript",
            imageUrl: "assets/card_image.png",
            body: "JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages, applications, servers, and or even games. Developers generally use JavaScript alongside HTML and CSS The scripting language works well with CSS in formatting HTML elements. However, JavaScript still maintains user interaction, something that CSS cannot do by itself.",
            comments: [
                {
                    id: 1,
                    postId: 4,
                    user: "javascript_hater",
                    email: "javascript_hater2023@gmail.com",
                    body: "I really don't know how u all like this!",
                },
                {
                    id: 2,
                    postId: 4,
                    user: "javascript_lover",
                    email: "javascript_lover2023@outlook.com",
                    body: "I love everything on this Programming Language!",
                },
                {
                    id: 3,
                    postId: 4,
                    user: "javascript_noob",
                    email: "javascript_noob2023@yahoo.com",
                    body: "I'm trying to learn this Progamming Language.",
                },
            ] 
        },
        {
            id: 5,
            title: "Git",
            imageUrl: "assets/card_image.png",
            body: "Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel. A staggering number of software projects rely on Git for version control, including commercial projects as well as open source.",
            comments: [
                {
                    id: 1,
                    postId: 5,
                    user: "git_hater",
                    email: "git_hater2023@gmail.com",
                    body: "I really don't know how u all like this!",
                },
                {
                    id: 2,
                    postId: 5,
                    user: "git_lover",
                    email: "git_lover2023@outlook.com",
                    body: "I love who created Git!",
                },
                {
                    id: 3,
                    postId: 5,
                    user: "git_noob",
                    email: "git_noob2023@yahoo.com",
                    body: "I'm trying to learn all the commands.",
                },
            ] 
        },
        {
            id: 6,
            title: "GitHub",
            imageUrl: "assets/card_image.png",
            body: "GitHub is a for-profit company that offers a cloud-based Git repository hosting service. Essentially, it makes it a lot easier for individuals and teams to use Git for version control and collaboration. GitHub’s interface is user-friendly enough so even novice coders can take advantage of Git. Without GitHub, using Git generally requires a bit more technical savvy and use of the command line.",
            comments: [
                {
                    id: 1,
                    postId: 6,
                    user: "github_hater",
                    email: "github_hater2023@gmail.com",
                    body: "BitBucket is better",
                },
                {
                    id: 2,
                    postId: 6,
                    user: "github_lover",
                    email: "github_lover2023@outlook.com",
                    body: "I love who created GitHub!",
                },
                {
                    id: 3,
                    postId: 6,
                    user: "github_noob",
                    email: "github_noob2023@yahoo.com",
                    body: "I'm trying to clone a repository.",
                },
            ] 
        },
    ];

    const postList = document.getElementById("postCard");

    if (postList) {
        postList.innerHTML = "";

        posts.map((post) => {
            const postContent = document.createElement("div");
            postContent.className = "card";

            const postData = `
                <img src="${post.imageUrl}" alt="post">
                <h2>${post.title}</h2>
                <div>
                    <p>${post.body}</p>
                </div>
                <span class="expand">Expand...</span>
            `;
            postContent.innerHTML = postData;

            const expandSpan = postContent.querySelector('.expand');
            if (expandSpan) {
                expandSpan.addEventListener('click', () => {
                    localStorage.setItem('selectedPost', JSON.stringify(post));
                    window.location.href = `post_details.html?id=${post.id}`;
                });
            }

            postList.appendChild(postContent);
        });
    }
}