import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

export default function FooterComponent() {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Col lg={2} className="text-center text-muted">
          <div>
            {fullYear}-{fullYear + 1}, Beyza Yüksel
          </div>
        </Col>

        <form className="d-flex my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Beyza Yüksel CV
          </button>
        </form>
      </Container>
    </Navbar>
  );
}
