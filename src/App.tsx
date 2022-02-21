import React, { useState } from "react";
import "./App.css";
import { Invoice } from "./types/profile";
import { Input } from "./components/Input";
import { Preview } from "./PDF/invoice/Preview";

const sampleRecord = {
  itemName: "サンプルデザイン",
  quantity: 1,
  unit: "式",
  unitPrice: 100000,
  description: "説明",
};

function App() {
  const [invoice, setInvoice] = useState<Invoice>({
    number: "請求書番号",
    createdAt: "２０２１年１０月１１日",
    partnerName: "株式会社丸々",
    companyName: "ホゲホゲ株式会社",
    companyAddress: "東京都品川区",
    companyTel: "123-4567-8900",
    companyFax: "123-4567-8900",
    companyManager: "山田太郎",
    records: [sampleRecord],
  });

  const handleChange = (name: string, value: any) => {
    setInvoice({ ...invoice, [name]: value });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <div style={{ width: "50%" }}>
        <Input
          label="請求書番号"
          defaultValue={invoice.number}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("number", e.target.value);
          }}
        />
        <Input
          label="作成日時"
          defaultValue={invoice.createdAt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("createdAt", e.target.value);
          }}
        />
        <Input
          label="取引先"
          defaultValue={invoice.partnerName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("partnerName", e.target.value);
          }}
        />
        <Input
          label="弊社の名前"
          defaultValue={invoice.companyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.name, e.target.value);
          }}
        />
        <Input
          label="弊社の住所"
          defaultValue={invoice.companyAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("companyAddress", e.target.value);
          }}
        />
        <Input
          label="担当者"
          defaultValue={invoice.companyManager}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("companyManager", e.target.value);
          }}
        />
        <div>
          <label>サンプルレコード数</label>
          <input
            name="records"
            type="number"
            defaultValue={invoice.records.length}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(
                "records",
                [...Array(Number(e.target.value))].map(() => sampleRecord)
              );
            }}
          />
        </div>
      </div>
      <Preview invoice={invoice} />
    </div>
  );
}

export default App;
