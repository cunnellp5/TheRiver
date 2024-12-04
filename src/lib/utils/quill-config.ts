export const QuillConfig = {
  modules: {
    toolbar: [
      [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["clean"],
    ],
  },
  theme: "snow",
  placeholder: `Write about it...`,
};

export const QuillConfigReadonly = {
  modules: { toolbar: null },
  readOnly: true,
};

// TODO check if this will be needed in the future
// Could render plain text or a _Delta_ object (for now)
export function quillContentInit(content: string) {
  let data = null;

  try {
    data = JSON.parse(content);
  }
  catch {
    data = [{ insert: content }];
  }

  return data;
}
