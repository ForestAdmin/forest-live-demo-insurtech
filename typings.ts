/* eslint-disable */
export type Schema = {
  'agents': {
    plain: {
      'agent_id': number;
      'first_name': string;
      'last_name': string;
      'email_address': string;
      'phone_number': string;
      'address': string;
    };
    nested: {};
    flat: {};
  };
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
      'policy:agent_id': number;
      'policy:customer:customer_id': number;
      'policy:customer:first_name': string;
      'policy:customer:last_name': string;
      'policy:customer:date_of_birth': string;
      'policy:customer:gender': string;
      'policy:customer:email_address': string;
      'policy:customer:phone_number': string;
      'policy:customer:address': string;
      'policy:agent:agent_id': number;
      'policy:agent:first_name': string;
      'policy:agent:last_name': string;
      'policy:agent:email_address': string;
      'policy:agent:phone_number': string;
      'policy:agent:address': string;
    };
  };
  'customers': {
    plain: {
      'customer_id': number;
      'first_name': string;
      'last_name': string;
      'date_of_birth': string;
      'gender': string;
      'email_address': string;
      'phone_number': string;
      'address': string;
    };
    nested: {};
    flat: {};
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
      'agent_id': number;
    };
    nested: {
      'customer': Schema['customers']['plain'] & Schema['customers']['nested'];
      'agent': Schema['agents']['plain'] & Schema['agents']['nested'];
    };
    flat: {
      'customer:customer_id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:date_of_birth': string;
      'customer:gender': string;
      'customer:email_address': string;
      'customer:phone_number': string;
      'customer:address': string;
      'agent:agent_id': number;
      'agent:first_name': string;
      'agent:last_name': string;
      'agent:email_address': string;
      'agent:phone_number': string;
      'agent:address': string;
    };
  };
  'ratings': {
    plain: {
      'rating_id': number;
      'policy_id': number;
      'customer_id': number;
      'rating_score': number;
      'review_text': string;
      'date': string;
    };
    nested: {
      'policy': Schema['policies']['plain'] & Schema['policies']['nested'];
      'customer': Schema['customers']['plain'] & Schema['customers']['nested'];
    };
    flat: {
      'policy:policy_id': number;
      'policy:policy_type': string;
      'policy:coverage_amount': number;
      'policy:premium_amount': number;
      'policy:start_date': string;
      'policy:end_date': string;
      'policy:customer_id': number;
      'policy:agent_id': number;
      'policy:customer:customer_id': number;
      'policy:customer:first_name': string;
      'policy:customer:last_name': string;
      'policy:customer:date_of_birth': string;
      'policy:customer:gender': string;
      'policy:customer:email_address': string;
      'policy:customer:phone_number': string;
      'policy:customer:address': string;
      'policy:agent:agent_id': number;
      'policy:agent:first_name': string;
      'policy:agent:last_name': string;
      'policy:agent:email_address': string;
      'policy:agent:phone_number': string;
      'policy:agent:address': string;
      'customer:customer_id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:date_of_birth': string;
      'customer:gender': string;
      'customer:email_address': string;
      'customer:phone_number': string;
      'customer:address': string;
    };
  };
  'transactions': {
    plain: {
      'transaction_id': number;
      'policy_id': number;
      'transaction_type': string;
      'transaction_amount': number;
      'date': string;
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
      'policy:agent_id': number;
      'policy:customer:customer_id': number;
      'policy:customer:first_name': string;
      'policy:customer:last_name': string;
      'policy:customer:date_of_birth': string;
      'policy:customer:gender': string;
      'policy:customer:email_address': string;
      'policy:customer:phone_number': string;
      'policy:customer:address': string;
      'policy:agent:agent_id': number;
      'policy:agent:first_name': string;
      'policy:agent:last_name': string;
      'policy:agent:email_address': string;
      'policy:agent:phone_number': string;
      'policy:agent:address': string;
    };
  };
  'underwriters': {
    plain: {
      'underwriter_id': number;
      'first_name': string;
      'last_name': string;
      'email_address': string;
      'phone_number': string;
      'address': string;
    };
    nested: {};
    flat: {};
  };
};
