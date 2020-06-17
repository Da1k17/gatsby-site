import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Style from "./footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
      <div className={Style.footer}>
            <div className={Style.footerText}>
            <Container>
                  <Row>
                        <Col>
                              <p>
                                    <FontAwesomeIcon icon={faPhoneSquareAlt} className={Style.contact} /> 
                                          お問い合わせ
                              </p>
                              <p>©︎Furukawa Daiki</p>
                        </Col>
                  </Row>
            </Container>
            </div>
      </div>
    )
}

export default Footer