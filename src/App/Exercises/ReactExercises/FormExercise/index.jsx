import { useForm } from 'react-hook-form';
// import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';

import './Style/style.css';

import InputField from './Components/Field';
import SelectField from './Components/SelectField';
import RadioButtons from './Components/RadioButtons';
import CheckboxField from './Components/CheckboxField';
import TextArea from './Components/TextArea.jsx';

import { SCHEMA } from './schema';
import {
  FIELDS,
  DEFAULT_VALUES,
  LABELS,
  FIELDS_DESCRIPTION,
  PLACE_HOLDER,
} from './data';

// Errors errors.firstName?.message
const Error = ({ error }) => {
  return <p className="error">{error}</p>;
};

export function FormExercise() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(SCHEMA),
  });

  const isNewAccount = watch(FIELDS.IS_NEW_ACCOUNT);

  const onSubmit = (data) => console.log(data);
  console.log(watch(Object.values(FIELDS)));

  return (
    <div className="order-wrapper">
      <NavLink to="/exercises" className="backBtn">
        {'<'}Formularz zamówienia
      </NavLink>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h2 className="order-section-title">Zamównienie produktu</h2>
          <fieldset>
            <SelectField
              register={register}
              fieldName={FIELDS.PRODUCT}
              label={LABELS[FIELDS.PRODUCT]}
              required
              options={FIELDS_DESCRIPTION[FIELDS.PRODUCT].ELEMENTS}
              errors={errors[FIELDS.PRODUCT]?.message}
            />
            <Error error={errors[FIELDS.PRODUCT]?.message} />
          </fieldset>
          <fieldset>
            <RadioButtons
              register={register}
              fieldName={FIELDS.PAYMENT_METHOD}
              label={LABELS[FIELDS.PAYMENT_METHOD]}
              required
              options={FIELDS_DESCRIPTION[FIELDS.PAYMENT_METHOD].ELEMENTS}
              errors={errors[FIELDS.PAYMENT_METHOD]?.message}
            />
            <Error error={errors[FIELDS.PAYMENT_METHOD]?.message} />
          </fieldset>
          <fieldset>
            <legend>Opcje dodatkowe do zamówienia</legend>
            <CheckboxField
              register={register}
              fieldName={FIELDS.IS_ENVIRONMENT}
              label={LABELS[FIELDS.IS_ENVIRONMENT]}
            />
            <CheckboxField
              register={register}
              fieldName={FIELDS.IS_GIT}
              label={LABELS[FIELDS.IS_GIT]}
            />
            <CheckboxField
              register={register}
              fieldName={FIELDS.IS_ADDITIONAL}
              label={LABELS[FIELDS.IS_ADDITIONAL]}
            />
          </fieldset>
        </section>
        <section>
          <h2 className="order-section-title">Dane do realizacji zamówienia</h2>
          <fieldset>
            <InputField
              register={register}
              fieldName={FIELDS.FULL_NAME}
              label={LABELS[FIELDS.FULL_NAME]}
              required
              placeholder={PLACE_HOLDER[FIELDS.FULL_NAME]}
              errors={errors[FIELDS.FULL_NAME]?.message}
            />
            <Error error={errors[FIELDS.FULL_NAME]?.message} />
          </fieldset>
          <fieldset>
            <InputField
              register={register}
              fieldName={FIELDS.NICKNAME}
              label={LABELS[FIELDS.NICKNAME]}
              required
              placeholder={PLACE_HOLDER[FIELDS.NICKNAME]}
              errors={errors[FIELDS.NICKNAME]?.message}
            />
            <Error error={errors[FIELDS.NICKNAME]?.message} />
          </fieldset>
          <fieldset>
            <InputField
              register={register}
              fieldName={FIELDS.ADDRESS}
              label={LABELS[FIELDS.ADDRESS]}
              required
              placeholder={PLACE_HOLDER[FIELDS.ADDRESS]}
              errors={errors[FIELDS.ADDRESS]?.message}
            />
            <Error error={errors[FIELDS.ADDRESS]?.message} />
          </fieldset>
          <fieldset>
            <InputField
              register={register}
              fieldName={FIELDS.EMAIL}
              label={LABELS[FIELDS.EMAIL]}
              required
              placeholder={PLACE_HOLDER[FIELDS.EMAIL]}
              errors={errors[FIELDS.EMAIL]?.message}
            />
            <Error error={errors[FIELDS.EMAIL]?.message} />
          </fieldset>
          <fieldset>
            <InputField
              register={register}
              fieldName={FIELDS.PHONE_NUMBER}
              label={LABELS[FIELDS.PHONE_NUMBER]}
              required
              placeholder={PLACE_HOLDER[FIELDS.PHONE_NUMBER]}
              errors={errors[FIELDS.PHONE_NUMBER]?.message}
            />
            <Error error={errors[FIELDS.PHONE_NUMBER]?.message} />
          </fieldset>
          <fieldset>
            <TextArea
              register={register}
              fieldName={FIELDS.ADDITIONAL_DETAILS}
              label={LABELS[FIELDS.ADDITIONAL_DETAILS]}
              placeholder={PLACE_HOLDER[FIELDS.ADDITIONAL_DETAILS]}
            />
          </fieldset>
        </section>
        <section>
          <h2 className="order-section-title">Zakładanie konta</h2>
          <fieldset>
            <legend>Chcę załozyć konto razem z zamóweiniem</legend>
            <CheckboxField
              register={register}
              fieldName={FIELDS.IS_NEW_ACCOUNT}
              label={LABELS[FIELDS.IS_NEW_ACCOUNT]}
            />
          </fieldset>

          {/* hasła */}
          {isNewAccount ? (
            <>
              <fieldset>
                <InputField
                  register={register}
                  fieldName={FIELDS.PASSWORD}
                  label={LABELS[FIELDS.PASSWORD]}
                  type="password"
                  errors={errors[FIELDS.PASSWORD]?.message}
                />
                <Error error={errors[FIELDS.PASSWORD]?.message} />
              </fieldset>
              <fieldset>
                <InputField
                  register={register}
                  fieldName={FIELDS.CONFIRM_PASSWORD}
                  label={LABELS[FIELDS.CONFIRM_PASSWORD]}
                  type="password"
                  errors={errors[FIELDS.CONFIRM_PASSWORD]?.message}
                />
                <Error error={errors[FIELDS.CONFIRM_PASSWORD]?.message} />
              </fieldset>
            </>
          ) : null}

          {/* hasla koniec */}
        </section>
        <section>
          <h2 className="order-section-title">Zgody i newsletter</h2>
          <fieldset>
            <legend>
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </legend>
            <CheckboxField
              register={register}
              required
              fieldName={FIELDS.IS_ACCEPT_REGULATIONS}
              label={LABELS[FIELDS.IS_ACCEPT_REGULATIONS]}
              errors={errors[FIELDS.IS_ACCEPT_REGULATIONS]?.message}
            />
            <Error error={errors[FIELDS.IS_ACCEPT_REGULATIONS]?.message} />
          </fieldset>
          <fieldset>
            <legend>
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </legend>
            <CheckboxField
              register={register}
              fieldName={FIELDS.IS_NEWSLETTER}
              label={LABELS[FIELDS.IS_NEWSLETTER]}
            />
          </fieldset>
        </section>
        <input
          className="submit_button"
          type="submit"
          value="Składam zamówienie"
        />
      </form>
    </div>
  );
}
