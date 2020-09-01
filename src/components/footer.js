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
                              <button className={Style.btnSquareRaised}onClick={() => {
                                    alert("お問い合わせフォーム")
                              }}>
                                    <FontAwesomeIcon icon={faPhoneSquareAlt} className={Style.contact} /> 
                                          お問い合わせ
                              </button>
                              <p className={Style.copyRight} > ©︎Furukawa Daiki</p>
                        </Col>
                  </Row>
            </Container>
            </div>
      </div>
    )
}

export default Footer