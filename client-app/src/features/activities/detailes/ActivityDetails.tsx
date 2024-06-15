import { useEffect } from "react";
import { Card, Image, CardHeader, CardContent, CardMeta, CardDescription, Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const activity = activityStore.selectedActivity;
    const {id} = useParams();

    useEffect(()=>{
        if(id) activityStore.loadActivity(id);

    }, [id, activityStore.loadActivity])

    if (activityStore.loadingInitial || !activity) return <LoadingComponent />;

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
                    <Button as={Link} to={`/manage/${activity.id}`} basic color="blue" content='Edit'></Button>
                    <Button as={Link} to='/activities' basic color="grey" content='Cancel'></Button>
                </Button.Group>
            </CardContent>
        </Card>
    )
})