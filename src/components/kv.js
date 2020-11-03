import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Style from "./kv.module.scss"

function Kv () {
    return (
        <div className={Style.wrap}>
            <div className={Style.overlay}></div>
            <Container className={Style.content}>
                <Row>
                    <Col sm={12} className="mx-auto">
                        <div className={Style.siteHeading}>
                            <h1>エアマット販売・レンタル</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Kv
