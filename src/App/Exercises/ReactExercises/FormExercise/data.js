export const FIELDS = {
  // 1 section
  PRODUCT: 'product',
  PAYMENT_METHOD: 'paymentMethod',
  IS_ENVIRONMENT: 'isEnvironment',
  IS_GIT: 'isGit',
  IS_ADDITIONAL: 'isAdditional',
  // 2 section
  FULL_NAME: 'fullName',
  NICKNAME: 'nickname',
  ADDRESS: 'address',
  EMAIL: 'email',
  PHONE_NUMBER: 'phoneNumber',
  ADDITIONAL_DETAILS: 'additionalDetails',
  // 3 section
  IS_NEW_ACCOUNT: 'isNewAccount',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  // 4 section
  IS_ACCEPT_REGULATIONS: 'isAcceptRegulations',
  IS_NEWSLETTER: 'isNewsletter',
};

export const DEFAULT_VALUES = {
  // 1 section
  [FIELDS.PRODUCT]: '',
  [FIELDS.PAYMENT_METHOD]: '',
  [FIELDS.IS_ADDITIONAL]: false,
  [FIELDS.IS_ENVIRONMENT]: false,
  [FIELDS.IS_GIT]: false,
  // 2 section
  [FIELDS.FULL_NAME]: '',
  [FIELDS.NICKNAME]: '',
  [FIELDS.ADDRESS]: '',
  [FIELDS.EMAIL]: '',
  [FIELDS.PHONE_NUMBER]: '',
  [FIELDS.ADDITIONAL_DETAILS]: '',
  // 3 section
  [FIELDS.IS_NEW_ACCOUNT]: false,
  [FIELDS.PASSWORD]: '',
  [FIELDS.CONFIRM_PASSWORD]: '',
  // 4 section
  [FIELDS.IS_ACCEPT_REGULATIONS]: false,
  [FIELDS.IS_NEWSLETTER]: false,
};

export const LABELS = {
  // 1 section
  [FIELDS.PRODUCT]: 'Wybierz produkt',
  [FIELDS.PAYMENT_METHOD]: 'Wybierz formę płatności',
  [FIELDS.IS_ENVIRONMENT]: 'ustawienie środowiska',
  [FIELDS.IS_GIT]: 'intro do GitHub',
  [FIELDS.IS_ADDITIONAL]: 'Opcje dodatkowe do zamówienia',
  // 2 section
  [FIELDS.FULL_NAME]: 'Imię i nazwisko',
  [FIELDS.NICKNAME]: 'Twój pseudonim',
  [FIELDS.ADDRESS]: 'Adres do wysyłki',
  [FIELDS.EMAIL]: 'Adres e-mail',
  [FIELDS.PHONE_NUMBER]: 'Numer kontaktowy',
  [FIELDS.ADDITIONAL_DETAILS]: 'Dodatkowe informacje do zamówienia',
  // 3 section
  [FIELDS.IS_NEW_ACCOUNT]: 'Zakładam konto',
  [FIELDS.PASSWORD]: 'Moje hasło',
  [FIELDS.CONFIRM_PASSWORD]: 'Powtórz hasło',
  // 4 section
  [FIELDS.IS_ACCEPT_REGULATIONS]: 'Akceptuję regulamin',
  [FIELDS.IS_NEWSLETTER]: 'Zapisuję się na listę mailingową',
};

export const PLACE_HOLDER = {
  [FIELDS.FULL_NAME]: 'wpisz swoje imię i nazwisko',
  [FIELDS.NICKNAME]: 'login do sklepu',
  [FIELDS.ADDRESS]: 'adres, na który mamy wysłać zamóweinie',
  [FIELDS.EMAIL]: 'jan.kowalski@gmail.com',
  [FIELDS.PHONE_NUMBER]: '+ 48 888 888 888',
  [FIELDS.ADDITIONAL_DETAILS]: 'jeśli masz jakieś uwagi, wpisz je tutaj...',
};

export const FIELDS_DESCRIPTION = {
  [FIELDS.PRODUCT]: {
    LEGEND: '',
    LABEL: 'Wybierz produkt',
    REQUIRED: true,
    ELEMENTS: [
      {
        VALUE: 'frontend',
        LABEL: 'kurs front-end',
      },
      {
        VALUE: 'backend',
        LABEL: 'kurs back-end',
      },
      {
        VALUE: 'ux/ui',
        LABEL: 'kurs ux-ui',
      },
    ],
  },
  [FIELDS.PAYMENT_METHOD]: {
    ELEMENTS: [
      {
        VALUE: 'blik',
        LABEL: 'blik',
      },
      {
        VALUE: 'paypal',
        LABEL: 'paypal',
      },
      {
        VALUE: 'moneyTransfer',
        LABEL: 'przelew',
      },
    ],
  },
};
