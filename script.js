const postFiles = [
    'text/post1.txt',
    'text/post2.txt'
];

async function loadPost(file) {
    const response = await fetch(file);
    const text = await response.text();
    const [header, content] = text.split('---');
    
    const title = header.match(/제목: (.*)/)[1].trim();
    const date = header.match(/날짜: (.*)/)[1].trim();
    
    return {
        title,
        date,
        content: content.trim(),
        file
    };
}

async function loadAllPosts() {
    const posts = await Promise.all(postFiles.map(loadPost));
    return posts;
}
