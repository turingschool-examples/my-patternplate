module.exports = {
  html: () => '<p class="medium-text">Over 91% of graduates are working as professional software developers. Another 4% are working in related technical roles and 2% are teaching programming.</p>',
  css: () => `
  .medium-text {
    font-family: sans-serif;
    color: #929292;
    max-width: 60%;
    padding: 0 1rem;
    font-size: 16px;
  }`,
  default: function() {
    var el = document.querySelector("[data-hello-world]");
    var count = 0;
    el.addEventListener("click", function(e) {
      e.target.textContent = "Hello World, " + (++count);
    });
  }
};
