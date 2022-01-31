import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://apilayer.net/api/',
});

export const phoneAPI = {
  validatePhone: (accessKey: string, number: string, countryCode: string) =>
    instance.get<ValidatePhoneResponseType>(
      `validate?access_key=${accessKey}&number=${number}&country_code=${countryCode}`,
    ),
};

export type ValidateRequestType = {
  access_key: string;
  number: string;
  country_code: string;
};

export type ValidatePhoneResponseType = {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type: string;
};
