import * as React from "react";
import Layout from "../components/layout"

interface CardProps {
    Title: string
    Image: string
    Body: string
}

const Card: React.FC<CardProps> =
    () => (
        <Layout>
            <div>test</div>
        </Layout>
    )

export default Card