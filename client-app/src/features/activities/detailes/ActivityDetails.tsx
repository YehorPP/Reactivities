import React from "react";
import { Card, Image, CardHeader, CardContent, CardMeta, CardDescription, Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDefault() {
    const { activityStore } = useStore();
    const activity = activityStore.selectedActivity;

    if (!activity) return <LoadingComponent />;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button.Group widths='2'>
                    <Button basic color="blue" content='Edit' onClick={() => activityStore.openForm(activity.id)}></Button>
                    <Button basic color="grey" content='Cancel' onClick={activityStore.cancelSelectedActivity}></Button>
                </Button.Group>
            </CardContent>
        </Card>
    )
})