import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MainNav() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/artwork?title=true&q=${search}`);
  }

  return (
    <>
      <Navbar bg="light" className="fixed-top" expand="lg">
        <Container>
          <Navbar.Brand>Rahul Bajaj</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced</Nav.Link>
              </Link>
            </Nav>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
