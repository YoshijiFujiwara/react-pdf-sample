export type ProfileType = {
  type: string;
  name: string;
  profession: string;
  profileImageURL: string;
  display: boolean;
  about: string;
};

export type InvoiceRecord = {
  itemName: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  description: string;
};

export type Invoice = {
  number: string;
  createdAt: string;
  partnerName: string;
  companyName: string;
  companyAddress: string;
  companyTel: string;
  companyFax: string;
  companyManager: string;
  records: InvoiceRecord[];
};
