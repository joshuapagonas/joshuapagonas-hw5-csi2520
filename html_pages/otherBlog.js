let button = document.getElementById('btn');
let textInput = document.getElementsByClassName('textField')[0];
let postButton = document.getElementById('post');
let newDiv = document.getElementById('postButton');
let replyButton = document.createElement('button');
let textBox = document.getElementsByClassName('replyTextField')[0];

btn.onclick = function createComment(){
    button.style.display = 'none';
    document.getElementsByClassName('textField')[0].style.display = 'block';
    postButton.style.display = 'inline';
}

postButton.onclick = function displayComment(){

    let commentDiv = document.getElementById('commentSection');
    let comment = document.createElement('p');
    replyButton.setAttribute('id', 'replyBtn');
    comment.setAttribute('id', 'userComment');
    let textValue = document.getElementsByClassName('textField')[0].value;
    textInput.style.display = 'none';
    postButton.style.display = 'none';
    button.style.display = 'inline';
    comment.style.fontSize = '26px';
    comment.style.disply = 'inline';
    commentDiv.style.textAlign = 'center';
    replyButton.style.textAlign = 'center';
    replyButton.style.cursor = 'pointer';
    replyButton.style.fontSize = '17px';
    replyButton.style.display = 'inline';
    replyButton.style.marginBottom = '10px';
    replyButton.innerHTML = 'Reply';

    replyButton.onclick = function replyToComment(){
        replyButton.style.display = 'none';
        let replyDiv = document.getElementById('replySection');
        let replyComment = document.createElement('p');
        let postReply = document.createElement('button');
        
        replyComment.setAttribute('id', 'repliedComment');
        postReply.setAttribute('id', 'replyPosted');
        textBox.style.width = '250px';
        textBox.style.height = '50px';
        textBox.style.display = 'block';
        postReply.innerHTML = 'Post Reply';
        postReply.style.display = 'inline';
        postReply.style.backgroundColor = 'blue';
        postReply.style.cursor = 'pointer';
        postReply.style.fontSize = '17px';
        replyDiv.style.textAlign = 'center';
        postReply.textAlign = 'center';
        postReply.style.marginBottom = '20px';
        let textBoxValue = document.getElementsByClassName('replyTextField')[0].value;

        postReply.onclick = function postReplyComment(){
            postReply.style.display = 'none';
            textBox.style.display = 'none';
            replyButton.style.display = 'inline';
            replyComment.append(textBoxValue);
            commentDiv.append(replyComment);
            commentDiv.append(replyButton);
        }
        replyDiv.append(postReply);
    }
    replyButton.style.display = 'inline';
    comment.append(textValue);
    commentDiv.append(comment);
    commentDiv.append(replyButton);
}
