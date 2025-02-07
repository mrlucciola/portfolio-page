import { type FC } from "react";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
// mui
import Grid from "@mui/material/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";
// components
import ResumePdfLayout from "./ResumePdfLayout";

/** ###  */
const ResumePdf: FC = () => {
  // @note `updateInstance` is the second prop in the returned array - unused because the info is static
  const [pdfInstance] = usePDF({ document: <ResumePdfLayout /> });

  return (
    <Grid container direction="column">
      <PDFViewer width="100%" showToolbar={false}>
        <ResumePdfLayout />
      </PDFViewer>

      <LoadingButton
        variant="contained"
        onClick={() => {
          pdfInstance.url && window.open(pdfInstance.url, "_blank", "noopener,noreferrer");
        }}
        disabled={pdfInstance.loading}
        loading={pdfInstance.loading}
      >
        Download PDF
      </LoadingButton>
    </Grid>
  );
};

export default ResumePdf;
