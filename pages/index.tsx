import * as React from "react";
import Layout from "../components/layout";

import { UndrawDesigner, UndrawOuterSpace, UndrawAccount, UndrawEther, UndrawProductTour, UndrawProgramming, UndrawWorkingLate, UndrawStaticAssets } from 'react-undraw-illustrations';
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
                <Col>
                    <UndrawEther primaryColor="#a8ff3e"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <UndrawProductTour primaryColor="#a8ff3e"/>
                </Col>
                <Col>
                    <UndrawProgramming primaryColor="#2144df"/>
                </Col>
                <Col>
                    <UndrawStaticAssets primaryColor="#a8ff3e"/>
                </Col>
                <Col>
                    <UndrawWorkingLate primaryColor="#002eff"/>
                </Col>
            </Row>
            <div>index</div>
        </Layout>
    )

export default Card
