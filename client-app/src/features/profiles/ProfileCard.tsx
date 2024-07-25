import { Card, CardContent, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { Link } from "react-router-dom";

interface Props{
    profile: Profile;
}

export default function ProfileCard({profile}: Props){
    return (
        <Card as={Link} to={`/profile/${profile.username}`}>
            <Image src={profile.image || '/assets/user.png'}></Image>
            <CardContent>
                <Card.Header>
                    {profile.displayName}
                </Card.Header>
                <Card.Description>Bio goes here</Card.Description>
            </CardContent>
            <CardContent extra>
                <Icon name='user'/>
                20 followers
            </CardContent>
        </Card>
    );
}