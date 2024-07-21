import { useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();

    useEffect(() => {
        if (activityStore.activityRegistry.size <= 1) activityStore.loadActivities();
    }, [activityStore.activityRegistry, activityStore.loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading Activities'></LoadingComponent>

    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                    <ActivityList />
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})