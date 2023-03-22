import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MainNav() {
  const [search, setSearch] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setIsExpanded(false);
    router.push(`/artwork?title=true&q=${search}`);
  }

  return (
    <>
      <Navbar
        bg="light"
        className="fixed-top"
        expand="lg"
        expanded={isExpanded}
      >
        <Container>
          <Navbar.Brand>Rahul Bajaj</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsExpanded(!isExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)}>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)}>
                  Advanced
                </Nav.Link>
              </Link>
            </Nav>
            &nbsp;
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
            &nbsp;
            <Nav>
              <NavDropdown title="Rahul Bajaj" id="basic-nav-dropdown">
                <Link href="/favourites" passHref legacyBehavior>
                  <NavDropdown.Item
                    href="/favourites"
                    onClick={() => {
                      setIsExpanded(false);
                    }}
                  >
                    Favourites
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
