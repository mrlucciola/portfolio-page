import type { FC } from "react";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
// mui
import Grid from "@mui/material/Grid2";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import LoadingButton from "@mui/lab/LoadingButton";
// components
import MarkdownText from "../../util/MarkdownBlock";
import ResumePdfLayout from "../Resume/ResumePdfLayout";

const description = `
## Senior Fullstack Engineer

### Specializations
- Webapp development (React, ReST & GraphQL APIs)
- web3 development
- Distributed systems
- DevOps
- System architecture

### Tools & Technologies
- Main languages: TypeScript, Rust
- Other languages: Solidity, C#

### Domains
- Finance
- Blockchain (dApps)
`;

/** ###  */
const AboutCard: FC = () => {
  const [pdfInstance, _updateInstance] = usePDF({ document: <ResumePdfLayout /> });

  return (
    <ListItem
      direction="column"
      component={Grid}
      disableGutters
      disablePadding
      divider
      className="#about"
      id="about"
      sx={{ px: 2 }}
    >
      <Card sx={{ borderRadius: 0, flex: 1 }}>
        <CardContent>
          <MarkdownText>{description}</MarkdownText>

          <PDFViewer>
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
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default AboutCard;
