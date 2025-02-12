// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

/**
 * Handles showing and hiding the comments section.
 */
showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

/**
 * Submit handler for the comments form.
 */
form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

/**
 * Handles adding comments to the comments section.
 */
function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}

const transcriptButton = document.querySelector(".transcript-container button");
const transcriptContent = document.querySelector(".transcript");

/**
 * Handles showing and hiding the audio transcript.
 */
transcriptButton.onclick = () => {
  const isShowing = transcriptButton.getAttribute("showing") === "true";

  if (!isShowing) {
    transcriptContent.style.height = "60px";
    transcriptButton.textContent = "Hide Transcript";
    transcriptButton.setAttribute("showing", "true");
  } else {
    transcriptContent.style.height = "0";
    transcriptButton.textContent = "Show Transcript";
    transcriptButton.setAttribute("showing", "false");
  }
};