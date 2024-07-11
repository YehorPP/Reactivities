import { useField } from "formik"
import { useState } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import { Form, Label } from "semantic-ui-react";

export default function MyDateInput(props: Partial<DatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                name={props.name}
                placeholderText={props.placeholderText}
                showTimeSelect={props.showTimeSelect}
                timeCaption={props.timeCaption}
                dateFormat={props.dateFormat}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color="red" content={meta.error} />) : null}
        </Form.Field>
    )
}