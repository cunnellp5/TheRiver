<script lang="ts">
  import styleToString from "$lib/utils/styleToString";

  interface Props {
    preview?: string;
    [key: string]: any;
  }

  const { preview = "", ...rest }: Props = $props();

  const renderWhiteSpace = (text: string) => {
    const whiteSpaceCodes = "\xA0\u200C\u200B\u200D\u200E\u200F\uFEFF";
    return whiteSpaceCodes.repeat(150 - text.length);
  };
</script>

<div
  id="__preview"
  style={styleToString({
    display: "none",
    overflow: "hidden",
    lineHeight: "1px",
    opacity: 0,
    maxHeight: 0,
    maxWidth: 0,
  })}
  {...rest}>
  {preview}
  <div>
    {renderWhiteSpace(preview)}
  </div>
</div>
