import * as React from "react"
import Layout from "../../components/layout"

fetch(`${process.env.GIT_API}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
    .catch(error => console.error(error));

const Gists: React.FC =
    () => (
        <Layout>
            <ul>
                {/* GistsList.map((gist: any) => console.log(gist)) */}
            </ul>
        </Layout>
    )

export default Gists