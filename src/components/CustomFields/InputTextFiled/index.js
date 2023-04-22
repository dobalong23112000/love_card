import { useController, useFormContext } from 'react-hook-form';
import { Input } from 'reactstrap';
// import globalStyles from '~/assets/styles/stylesGlobal';
// import GetFormErrorMessageFE from '../validate-text/GetFormErrorMessageFE';
// import GetFormErrorMessageBE from '../validate-text/GetFormErrorMessageBE';

const ControlledInput = (props) => {
    const { name, label, required, rules, formError, defaultValue, disabled, onBlur, ...inputProps } = props;
    // const formContext = useFormContext();

    const { field } = useController({ name, rules, defaultValue });

    const handleOnBlur = (event) => {
        field.onBlur(event)
        onBlur && onBlur()
    }


    return (
        <div >
            {label && (
                <div >
                    {label}
                    {/* {required && <Text style={globalStyles.textDanger}> *</Text>} */}
                </div>
            )}
            <div >
                <Input
                    // style={[stylesInputTextField.input, disabled ? globalStyles.inputDisabled : '']}
                    onChange={field.onChange}
                    onBlur={handleOnBlur}
                    value={field.value}
                    {...inputProps}
                // editable={!disabled}
                />
                {/* {GetFormErrorMessageFE(hasError, formState, name)}
                {GetFormErrorMessageBE(formError, name)} */}
            </div>
        </div>
    );
};

export const InputTextField = (props) => {
    const { name } = props;

    const formContext = useFormContext();

    // Placeholder until input name is initialized
    if (!formContext || !name) {
        const msg = !formContext ? 'InputTextField must be wrapped by the FormProvider' : 'Name must be defined';
        throw new Error(msg);
    }

    return <ControlledInput {...props} />;
};
