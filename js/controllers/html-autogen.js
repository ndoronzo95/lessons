export const htmlAutodisplay = (section) => {
  const src = section.querySelector("[data-html-src]");
  const sink = section.querySelector("[data-html-sink]");
  if (src && sink) {
    const url = URL.createObjectURL(
      new Blob(
        [
          `
      <!DOCTYPE html>
      ${src.textContent}  
    `,
        ],
        { type: "text/html" }
      )
    );
    sink.src = url;
  }
};
