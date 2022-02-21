import React from "react";
import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  Text,
  Font,
  View,
} from "@react-pdf/renderer";
import { Invoice, InvoiceRecord } from "../../types/profile";
// @ts-ignore
import fontRegular from "../../fonts/Nasu-Regular.ttf"; //ttfファイル参照
// @ts-ignore
import fontBold from "../../fonts/Nasu-Bold.ttf"; //ttfファイル参照
import {
  DataTableCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from "@david.kucsai/react-pdf-table";

export const Preview = ({ invoice }: { invoice: Invoice }) => {
  // ttfファイルのフォント定義
  // フォント「ナス レギュラー」
  Font.register({
    family: "Nasu-Regular",
    src: fontRegular,
  });

  // フォント「ナス 太字」
  Font.register({
    family: "Nasu-Bold",
    src: fontBold,
  });

  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: "100%",
          height: "95%",
        }}
      >
        <Template invoice={invoice} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template invoice={invoice} />}
        fileName="sample.pdf"
      >
        {({ loading }) => (loading ? "ダウンロード中" : "ダウンロード")}
      </PDFDownloadLink>
    </div>
  );
};

// Create Document Component
const Template = ({ invoice }: { invoice: Invoice }) => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Nasu-Regular",
        }}
      >
        <View
          style={{
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 30, marginTop: 10 }}>
            請求書（下にダウンロードボタン）
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text>{invoice.partnerName}</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text>{invoice.number}</Text>
            <Text>{invoice.createdAt}</Text>
            <Text>{invoice.companyName}</Text>
            <Text>{invoice.companyAddress}</Text>
            <Text>{invoice.companyTel}</Text>
            <Text>{invoice.companyFax}</Text>
            <Text>{invoice.companyManager}</Text>
          </View>
        </View>
        <View>
          <Table data={invoice.records}>
            <TableHeader>
              <TableCell>商品名</TableCell>
              <TableCell>数量</TableCell>
              <TableCell>単位</TableCell>
              <TableCell>単価</TableCell>
              <TableCell>内容</TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell getContent={(r: InvoiceRecord) => r.itemName} />
              <DataTableCell getContent={(r: InvoiceRecord) => r.quantity} />
              <DataTableCell getContent={(r: InvoiceRecord) => r.unit} />
              <DataTableCell getContent={(r: InvoiceRecord) => r.unitPrice} />
              <DataTableCell getContent={(r: InvoiceRecord) => r.description} />
            </TableBody>
          </Table>
        </View>
      </Page>
    </Document>
  );
};
