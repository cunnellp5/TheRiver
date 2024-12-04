<script lang="ts">
  import styleToString from "$lib/utils/styleToString";

  const { style = {}, children, ...rest } = $props();

  const styleDefaultTable = {
    width: "100%",
    ...style,
  };

  const styleDefaultTr = {
    display: "grid",
    gridAutoColumns: "minmax(0, 1fr)",
    gridAutoFlow: "column",
  };
</script>

<table
  style={styleToString(styleDefaultTable)}
  align="center"
  border={0}
  cellPadding={0}
  cellSpacing={0}
  role="presentation"
  {...rest}>
  <tbody>
    <tr style={styleToString(styleDefaultTr)}>
      {@render children?.()}
    </tr>
  </tbody>
</table>
