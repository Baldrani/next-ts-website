import * as React from "react";
import Layout from "../components/layout";
import Starships from "../components/starship";

interface CardProps {
    Title: string
    Image: string
    Body: string
}

const Card: React.FC<CardProps> =
    () => (
        <Layout>
            {Starships}
            <div>test</div>
        </Layout>
    )

export default Card