import * as yup from 'yup';
import { FIELDS } from './data';

export const SCHEMA = yup
  .object({
    [FIELDS.PRODUCT]: yup.string().required('Pole jest wymagane!'),
    [FIELDS.PAYMENT_METHOD]: yup.string().required('Pole jest wymagane!'),
    [FIELDS.FULL_NAME]: yup.string().required('Musisz podać imię i nazwisko!'),
    [FIELDS.NICKNAME]: yup.string().required('Musisz podać pseudonim!'),
    [FIELDS.ADDRESS]: yup.string().required('Musisz podać adres!'),
    [FIELDS.EMAIL]: yup.string().email().required('Musisz podać adres e-mail!'),
    [FIELDS.PHONE_NUMBER]: yup
      .string()
      .matches(/^\d{9}$/, 'Numer telefonu musi zawierać 9 cyfr')
      .required('Musisz podać numer telefonu!'),
    [FIELDS.IS_NEW_ACCOUNT]: yup.boolean(),
    [FIELDS.IS_ACCEPT_REGULATIONS]: yup
      .boolean()
      .oneOf([true], 'Pole obowiązkowe!'),
    [FIELDS.IS_NEWSLETTER]: yup.boolean(),
    [FIELDS.PASSWORD]: yup.string().when(FIELDS.IS_NEW_ACCOUNT, {
      is: (value) => {
        return value;
      },
      then: () =>
        yup
          .string()
          .min(6, 'Hasło musi zawierać 6 znaków')
          .matches(/[a-z]/, 'Hasło musi zawierać małe litery')
          .matches(/[A-Z]/, 'Hasło musi zawierać duże litery')
          .matches(/d/, 'Hasło musi zawierać cyfry'),
    }),
    [FIELDS.CONFIRM_PASSWORD]: yup.string().when(FIELDS.IS_NEW_ACCOUNT, {
      is: (value) => {
        return value;
      },
      then: () =>
        yup
          .string()
          .min(6, 'Hasło musi zawierać 6 znaków')
          .matches(/[a-z]/, 'Hasło musi zawierać małe litery')
          .matches(/[A-Z]/, 'Hasło musi zawierać duże litery')
          .matches(/d/, 'Hasło musi zawierać cyfry')
          .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
    }),
  })
  .required();
