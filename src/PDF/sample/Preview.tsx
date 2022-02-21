import React from "react";
import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import styles from "../../styles";
import { ProfileType } from "../../types/profile";

export const Preview = ({ profile }: { profile: ProfileType }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: "100%",
          height: "95%",
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName="sample.pdf"
      >
        {({ loading }) => (loading ? "ダウンロード中" : "ダウンロード")}
      </PDFDownloadLink>
    </div>
  );
};
// Create Document Component
const Template = ({ profile }: { profile: ProfileType }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <LeftSection profile={profile} />
        <RightSection about={profile.about} />
      </Page>
    </Document>
  );
};
