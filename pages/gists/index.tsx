import * as Next from 'next';
import { fetchUsers } from '../../rest-api/github';
import { User } from '../../models/user';
import Layout from "../../components/layout";

interface Props {
   users: User[];
}

const Gists<Props> = ({user}) => (
    <Layout>
        <ul>
            { props.users.map((user) => <li>{user.id}</li>) }
            {/* GistsList.map((gist: any) => console.log(gist)) */}
        </ul>
    </Layout>
)

Gists.getInitialProps = async () => {
    const users = await fetchUsers();
    console.log(users);
    return {
        users,
    }
}


export default Gists
