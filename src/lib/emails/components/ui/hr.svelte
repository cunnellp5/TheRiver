<script lang="ts">
  import styleToString from "$lib/utils/style-to-string";

  const { style = {}, ...rest } = $props();
  const styleDefault = {
    width: "100%",
    border: "none",
    borderTop: "1px solid #eaeaea",
    ...style,
  };
</script>

<hr
  style={styleToString(styleDefault)}
  {...rest} />
