// Login POST
export interface LoginPost {
  email: string;
  password: string;
}

//register
export interface IUser {
  country: string;
  businessName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  businessType: string;
}

// Commission

export enum CHARGE_TYPE {
  FLAT = "FLAT",
  PERCENTAGE = "PERCENTAGE",
  RANGE = "RANGE",
}

export interface IRange {
  min: number;
  max: number;
  value: number;
  chargeType: CHARGE_TYPE.FLAT | CHARGE_TYPE.PERCENTAGE;
}

export interface ICommission {
  id: string;
  accountName: string;
  accountNumber: string;
  currencyCode: string;
  chargeType: CHARGE_TYPE;
  value: number | string;
  name: string;
  ranges?: IRange[];
  description?: string;
}

//Bank
export interface IBank {
  currencyCode: string;
  accountCurrency: string;
  name: string;
  value: string;
  accountName: string;
  bankId: number;
  branchCode: string;
  accountNumber: string;
}

// Payment Link

export interface IProduct {
  id: number;
  name: string;
  image_url?: string;
  currency: string;
  price: string;
  tax?: number;
  description?: string;
}

export interface IPaymentLink {
  status: string;
  ref: string;
  created_at: string;
  product: IProduct;
}

//Customer
export interface ICustomer {
  _id: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

//Compliance Profile
export interface IComplianceProfile {
  id: number;
  country: string;
  industry: string;
  category: string;
  tradingName: string;
  size: string;
  description: string;
  businessType: string;
  legalName: string;
  registrationType: string;
}

//Compliance Contact
export interface IBusinessAddress {
  id: number;
  generalEmail: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  streetAddress: string;
}

// Compliance Bank
export interface IBankAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  nameOnAccount: string;
}

// Transactions
export interface ITransaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  channel: string;
  customer: string;
  status: string;
}
