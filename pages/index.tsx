import * as React from "react";
import Layout from "../components/layout";

import { UndrawDesigner, UndrawOuterSpace, UndrawAccount } from 'react-undraw-illustrations';
import { Row, Col } from "react-bootstrap";

interface CardProps {
    Title: string
    Image: string
    Body: string
}

const Card: React.FC<CardProps> =
    () => (
        <Layout>
            <Row>
                <Col>
                    <UndrawAccount primaryColor="#a8ff3e"/>
                </Col>
                <Col>
                    <UndrawDesigner/>
                </Col>
                <Col>
                    <UndrawOuterSpace />
                </Col>
            </Row>
            <div>index</div>
        </Layout>
    )

export default Card
