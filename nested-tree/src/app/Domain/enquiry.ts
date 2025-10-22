export interface TariffOption {
  id: number;
  vendor_code: string;
  vendor_name: string;
  vendor_type: string;
  mode: string;
  from_location: string;
  to_location: string;
  charges: string | number;
  effective_date: string;
  expiry_date: string;
  mandatory: boolean;
}

export interface SourcingOption {
  id: number;
  vendor_code: string;
  vendor_name: string;
  vendor_type: string;
  mode: string;
  from_location: string;
  to_location: string;
  currency: string;

  basis: string;
  charges: string | number;
  start_date: string;
  end_date: string;
  effective_date: string;
}

export interface SourcingSummary {
  id?: number;
  enquiry_line_item_id?: number;
  source_type: string;
  sourced_no: number;
  sourced_list: SourcingOption[] | TariffOption[];
}

export interface EnquiryLineItem {
  id?: number;
  s_no: number;
  quantity: number;
  type: string;
  service_area: string;
  basis: string;
  remarks: string;
  sourcing_summary: SourcingSummary[];
  status: string;
}

export interface Enquiry {
  id?: number;
  enquiry_no?: string;
  code?: string;
  date: string;
  customer_id?: number;
  customer_name: string;
  name?: string;
  email: string;
  mobile: string;
  landline: string;
  company_name: string;
  from_location: string;
  to_location: string;
  location_type_from: string;
  location_type_to: string;
  effective_date_from: string;
  effective_date_to: string;
  department: string;
  service_type: string;
  basis: string;
  status: string;
  remarks: string;
  line_items: EnquiryLineItem[];
  isNew?: boolean;
  is_new_customer?: boolean;
  source_sales_code?: string;
  service_area?: string;
}
