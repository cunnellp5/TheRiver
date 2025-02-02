export default function (style: { [x: string]: string | number }) {
  return Object.keys(style).reduce(
    (acc, key) =>
      `${
        acc
        + key
          .split(/(?=[A-Z])/)
          .join("-")
          .toLowerCase()
      }:${style[key]};`,
    "",
  );
}
