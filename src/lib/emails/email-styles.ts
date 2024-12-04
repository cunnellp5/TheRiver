export const fontFamily = "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif";

export const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

export const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

export const logoImage = {
  margin: "0 auto",
  marginBottom: "16px",
  width: "100%",
};

export const heading = {
  fontFamily,
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

export const paragraph = {
  fontFamily,
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

export const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

export const button = {
  fontFamily,
  backgroundColor: "#ca485c",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

export const link = {
  ...paragraph,
  color: "#ca485c",
  marginInline: "12px",
  fontSize: "14px",
  // display: 'block'
};

export const postScripts = {
  ...paragraph,
  fontSize: "14px",
};

export const reportLink = {
  fontFamily,
  fontSize: "12px",
  color: "#9ca299",
  textDecoration: "underline",
};

export const hr = {
  borderColor: "#cccccc",
  margin: "36px 0",
  opacity: "0.5",
};

export const footer = {
  fontFamily,
  color: "#9ca299",
  fontSize: "12px",
  marginBottom: "10px",
};

export const unsubscribe = {
  fontFamily,
  // color: '#9ca299',
  fontSize: "10px",
};
export const fullWidth = {
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

export const bold = {
  fontWeight: "700",
};
