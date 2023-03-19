export const htmlAutodisplay = (section) => {
  const htmlSrc = section.querySelector("[data-html-src]");
  const cssSrc = section.querySelector("[data-css-src]");
  const sink = section.querySelector("[data-html-sink]");
  if (htmlSrc && sink) {
    const url = URL.createObjectURL(
      new Blob(
        [
          `
      <!DOCTYPE html>
      <html>
          <head>
          ${cssSrc ? `<style>${cssSrc.textContent}</style>` : ""}

          </head>
          <body>
          ${htmlSrc.textContent}  

          </body>
      </html>
    `,
        ],
        { type: "text/html" }
      )
    );
    sink.src = url;
  }
};
