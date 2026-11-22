// ==UserScript==
// @name        Reddit: Comment collapse
// @match       https://www.reddit.com/*
// @version     2026-11-22
// @downloadURL https://raw.githubusercontent.com/heussd/userscript-reddit-comment-collapse/refs/heads/main/reddit-comment-collapse.user.js
// ==/UserScript==

// Taken from: https://www.reddit.com/r/GreaseMonkey/comments/1u99jaa/are_there_any_userscripts_to_collapse_child/

window.addEventListener('load', function() {
    document.querySelectorAll('shreddit-comment[depth]').forEach(el => {
    const depth = parseInt(el.getAttribute('depth'));
    if (depth > 0) {
      const summary = el.querySelector('summary');
      if (summary) summary.click();
    }
  });
}, false);
