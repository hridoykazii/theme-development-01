import { Box, useTheme } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CopyButton from "./CopyButton";

export default function CodeBlock({ code }) {
    const theme = useTheme();
  return (
    <Box className="CodeBlockClass">
      <CopyButton code={code} />
      
      <SyntaxHighlighter
        language={"javascript"}
        style={vs2015}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        showInlineLineNumbers={false}
        customStyle={{
          border: `1px solid ${theme.palette.primary.border}`,
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.main
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}
