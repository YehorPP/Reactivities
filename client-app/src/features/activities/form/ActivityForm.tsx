import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { loading } = activityStore;


    const initialState = activityStore.selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        if (activity.id) {
            activityStore.updateActivity(activity);
        } else {
            activityStore.createActivity(activity);
        }
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleOnChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleOnChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleOnChange} />
                <Form.Input type="date" placeholder='Date' value={activity.date} name='date' onChange={handleOnChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleOnChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleOnChange} />
                <Button loading={loading} floated="right" positive type="submit" content="Submit" />
                <Button floated="right" type="button" content="Cancel" onClick={activityStore.closeForm} />
            </Form>
        </Segment>
    )
})