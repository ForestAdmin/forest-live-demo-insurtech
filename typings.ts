/* eslint-disable */
export type Schema = {
  'claims': {
    plain: {
      'claim_id': number;
      'policy_id': number;
      'claim_type': string;
      'claim_amount': number;
      'claim_status': string;
      'date_submitted': string;
      'date_resolved': string;
    };
    nested: {
      'policy': Schema['policies']['plain'] & Schema['policies']['nested'];
    };
    flat: {
      'policy:policy_id': number;
      'policy:policy_type': string;
      'policy:coverage_amount': number;
      'policy:premium_amount': number;
      'policy:start_date': string;
      'policy:end_date': string;
      'policy:customer_id': number;
      'policy:policy_coverage:policy_id': number;
      'policy:policy_coverage:coverage_details': string;
    };
  };
  'customers': {
    plain: {
      'customer_id': number;
      'first_name': string;
      'last_name': string;
      'date_of_birth': string;
      'email_address': string;
      'phone_number': string;
      'address': string;
    };
    nested: {};
    flat: {};
  };
  'insurance_agents': {
    plain: {
      'agent_id': number;
      'first_name': string;
      'last_name': string;
      'email_address': string;
      'phone_number': string;
    };
    nested: {};
    flat: {};
  };
  'insurers': {
    plain: {
      'insurer_id': number;
      'insurer_name': string;
      'address': string;
      'phone_number': string;
    };
    nested: {};
    flat: {};
  };
  'payments': {
    plain: {
      'payment_id': number;
      'policy_id': number;
      'payment_amount': number;
      'payment_date': string;
    };
    nested: {
      'policy': Schema['policies']['plain'] & Schema['policies']['nested'];
    };
    flat: {
      'policy:policy_id': number;
      'policy:policy_type': string;
      'policy:coverage_amount': number;
      'policy:premium_amount': number;
      'policy:start_date': string;
      'policy:end_date': string;
      'policy:customer_id': number;
      'policy:policy_coverage:policy_id': number;
      'policy:policy_coverage:coverage_details': string;
    };
  };
  'policies': {
    plain: {
      'policy_id': number;
      'policy_type': string;
      'coverage_amount': number;
      'premium_amount': number;
      'start_date': string;
      'end_date': string;
      'customer_id': number;
    };
    nested: {
      'policy_coverage': Schema['policy_coverage']['plain'] & Schema['policy_coverage']['nested'];
    };
    flat: {
      'policy_coverage:policy_id': number;
      'policy_coverage:coverage_details': string;
    };
  };
  'policy_categories': {
    plain: {
      'category_id': number;
      'category_name': string;
    };
    nested: {};
    flat: {};
  };
  'policy_coverage': {
    plain: {
      'policy_id': number;
      'coverage_details': string;
    };
    nested: {
      'policy': Schema['policies']['plain'] & Schema['policies']['nested'];
    };
    flat: {
      'policy:policy_id': number;
      'policy:policy_type': string;
      'policy:coverage_amount': number;
      'policy:premium_amount': number;
      'policy:start_date': string;
      'policy:end_date': string;
      'policy:customer_id': number;
    };
  };
  'vehicles': {
    plain: {
      'vehicle_id': number;
      'customer_id': number;
      'make': string;
      'model': string;
      'year': number;
      'vin': string;
    };
    nested: {
      'customer': Schema['customers']['plain'] & Schema['customers']['nested'];
    };
    flat: {
      'customer:customer_id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:date_of_birth': string;
      'customer:email_address': string;
      'customer:phone_number': string;
      'customer:address': string;
    };
  };
};
