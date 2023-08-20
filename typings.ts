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
      'policy:customer:customer_id': number;
      'policy:customer:first_name': string;
      'policy:customer:last_name': string;
      'policy:customer:date_of_birth': string;
      'policy:customer:email_address': string;
      'policy:customer:phone_number': string;
      'policy:customer:address': string;
      'policy:customer:assigne ': string;
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
      'assigne ': string;
    };
    nested: {};
    flat: {};
  };
  'documents': {
    plain: {
      'file reference': number;
      'type': string;
      'is_verified': boolean;
      'document': string;
      'customer ': number;
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
      'customer:assigne ': string;
    };
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
      'policy:customer:customer_id': number;
      'policy:customer:first_name': string;
      'policy:customer:last_name': string;
      'policy:customer:date_of_birth': string;
      'policy:customer:email_address': string;
      'policy:customer:phone_number': string;
      'policy:customer:address': string;
      'policy:customer:assigne ': string;
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
      'customer:assigne ': string;
    };
  };
  'vehicles': {
    plain: {
      'vehicle_id': number;
      'customer_id': number;
      'make': string;
      'model': string;
      'year': string;
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
      'customer:assigne ': string;
    };
  };
};
