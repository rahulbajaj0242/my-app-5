import useSWR from 'swr';
import Error from 'next/error';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function ArtworkCard(props) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`
  );
  if (error) {
    return <Error statusCode={404} />;
  }
  if (data) {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={
            data.primaryImageSmall
              ? data.primaryImageSmall
              : 'https://via.placeholder.com/375x375.png?text=[+Not+Available+]'
          }
        />
        <Card.Body>
          <Card.Title>{data.title ? data.title : 'N/A'}</Card.Title>
          <Card.Text>
            <div>Date: {data.objectDate ? data.objectDate : 'N/A'}</div>
            <div>
              Classification:{' '}
              {data.classification ? data.classification : 'N/A'}
            </div>
            <div>Medium: {data.medium ? data.medium : 'N/A'}</div>
          </Card.Text>
          <Link href={`/artwork/${props.objectID}`} passHref>
            <Button variant="btn btn-outline-dark">ID: {props.objectID}</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  } else {
    return null;
  }
}
