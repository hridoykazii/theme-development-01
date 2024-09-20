import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSnackbar } from "notistack";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyButton({ code }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <CopyToClipboard
      text={code}
      onCopy={() => enqueueSnackbar("Copied component", { variant: "success" })}
      className='CopyButtonClass'
    >
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <ContentCopyIcon sx={{color: 'var(--icon-color)'}}/>
      </div>
    </CopyToClipboard>
  );
}

export default CopyButton;
