import { useField } from "formik"
import { Form, Label } from "semantic-ui-react";

interface Props {
    label?: string,
    placeholder: string,
    name: string,
    type?: string
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color="red" content={meta.error} />) : null}
        </Form.Field>
    )
}