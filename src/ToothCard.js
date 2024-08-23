import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Col,
  Row,
} from "reactstrap";

const ToothCard = ({ cardData }) => {
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState("");

  const toggleModal = () => setModal(!modal);

  const toggleAccordion = (id) => {
    setOpen(open === id ? "" : id);
  };
  return (
    <div>
      {cardData && (
        <Card className="bg-white text-start">
          <CardBody>
            <h5 className="d-flex align-items-center gap-2">
              {cardData?.title}{" "}
              <span
                className={"badge"}
                style={{
                  backgroundColor: cardData?.badgeColor,
                  borderRadius: "12px",
                }}
              >
                {cardData?.badgeText}
              </span>
            </h5>
            <p>{cardData?.body}</p>
            <Button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: cardData?.btnColor,
              }}
              className="rounded-pill w-100 py-2 text-white"
              onClick={toggleModal}
            >
              {cardData?.btnText}
            </Button>
          </CardBody>
        </Card>
      )}

      <Modal isOpen={modal} toggle={toggleModal} size="md">
        <ModalHeader toggle={toggleModal} className="text-center">
          {cardData?.title}
        </ModalHeader>
        <ModalBody>
          <div className="text-center">
            <img
              src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/sensodyne-v2/en_US/Articles/is_it_a_cavity/desktop/article-cavity-tooth.png?auto=format"
              alt="Tooth X-Ray"
              style={{ width: "20rem", marginBottom: "20px" }}
            />
            {(cardData?.title === "Tooth #8" ||
              cardData?.title === "Tooth #11") && (
              <>
                <h5 className="fw-bold text-start">Pending Treatment</h5>
                <Row>
                  <Col className="text-center">
                    <Button
                      className="rounded-pill w-100 py-2"
                      style={{
                        backgroundColor: "#FF6B6B",
                        color: "#fff",
                        border: "none",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      Schedule your appointment
                    </Button>
                  </Col>
                </Row>
              </>
            )}
            {cardData?.title === "Tooth #4" && (
              <>
                <h5 className="fw-bold text-start">On Watch</h5>
              </>
            )}
            {cardData?.title === "Tooth #19" && (
              <>
                <h5 className="fw-bold text-start">Pre-existing treatment</h5>
              </>
            )}
          </div>

          {(cardData?.title === "Tooth #8" ||
            cardData?.title === "Tooth #11") && (
            <>
              <Accordion flush open={open} toggle={toggleAccordion}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <i className="bi bi-file-earmark-text"></i> DIAGNOSIS
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    Dental caries - occur when bacteria in the mouth produce
                    acids that erode tooth surface, leading to the formation of
                    cavities.
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="2">
                    <i className="bi bi-file-earmark-medical"></i> PROPOSED
                    TREATMENT
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    2 surface resin restoration (dental filling) - Resin
                    restoration fills cavities with tooth-colored material,
                    fixing damage and blending with your natural teeth.
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="3">
                    <i className="bi bi-clock-history"></i> TREATMENT HISTORY
                  </AccordionHeader>
                  <AccordionBody accordionId="3">None</AccordionBody>
                </AccordionItem>
              </Accordion>
              <div className="text-start mt-4">
                <h6>X-Ray Images</h6>
                <img
                  style={{ width: "100%", height: "20rem" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxMrNGre1CQeu8Rwa635Y3tO7AgpTiX7Wjg&s"
                  alt="X-Ray"
                />
              </div>
            </>
          )}

          {cardData?.title === "Tooth #19" && (
            <>
              <Accordion flush open={open} toggle={toggleAccordion}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <i className="bi bi-file-earmark-text"></i> DIAGNOSIS
                  </AccordionHeader>
                  <AccordionBody accordionId="1">None</AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="2">
                    <i className="bi bi-file-earmark-medical"></i> PROPOSED
                    TREATMENT
                  </AccordionHeader>
                  <AccordionBody accordionId="2">None</AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="3">
                    <i className="bi bi-clock-history"></i> TREATMENT HISTORY
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <span>1. Bone level implant on 02/01/2019</span>
                    <br /> <span>2. Ceramic and metal crown on 08/01/2019</span>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
              <div className="text-start mt-4">
                <h6>X-Ray Images</h6>
                <img
                  style={{ width: "100%", height: "20rem" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxMrNGre1CQeu8Rwa635Y3tO7AgpTiX7Wjg&s"
                  alt="X-Ray"
                />
              </div>
            </>
          )}

          {cardData?.title === "Tooth #4" && (
            <>
              <Accordion flush open={open} toggle={toggleAccordion}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <i className="bi bi-file-earmark-text"></i> DIAGNOSIS
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    Normal wear of existing dental filling. Monitor tooth for
                    future filling replacement.
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="2">
                    <i className="bi bi-file-earmark-medical"></i> PROPOSED
                    TREATMENT
                  </AccordionHeader>
                  <AccordionBody accordionId="2">None</AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="3">
                    <i className="bi bi-clock-history"></i> TREATMENT HISTORY
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <span>1. Amalgam filling on 01/01/2002</span>
                    <br /> <span>2. Root Canal Therapy on 01/01/2002</span>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
              <div className="text-start mt-4">
                <h6>X-Ray Images</h6>
                <img
                  style={{ width: "100%", height: "20rem" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxMrNGre1CQeu8Rwa635Y3tO7AgpTiX7Wjg&s"
                  alt="X-Ray"
                />
              </div>
            </>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ToothCard;
