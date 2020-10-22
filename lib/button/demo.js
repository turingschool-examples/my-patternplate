module.exports = {
  html: () => '<button class="cta-button">My first button</button>',
  css: () => `
   .cta-button {
      border: none;
      border-radius: 50px;
      font-size: 14px;
      letter-spacing: .5px;
      line-height: 17px;
      text-transform: uppercase;
      padding: 18px 40px;
      display: inline-block;
      background-color: #12f1fc;
      color: #036575;
      cursor: pointer;
   }',
  `,
  default: function() {
    const el = document.querySelector("button");

    let count = 0;
    el.addEventListener("click", () => {
      el.textContent = "Clicked " + (++count) + " times."
    });
  }
}
