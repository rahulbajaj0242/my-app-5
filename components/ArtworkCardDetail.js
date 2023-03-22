import useSWR from 'swr';
import Error from 'next/error';
import Card from 'react-bootstrap/Card';

export default function ArtworkCardDetail(props) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`
  );
  if (error) {
    return <Error statusCode={404} />;
  }
  return data ? (
    <Card>
      {data.primaryImage ? (
        <Card.Img variant="top" src={data.primaryImage} />
      ) : (
        <></>
      )}

      <Card.Body>
        <Card.Title>{data.title ? data.title : 'N/A'}</Card.Title>
        <Card.Text>
          <div>Date: {data.objectDate ? data.objectDate : 'N/A'}</div>
          <div>
            Classification: {data.classification ? data.classification : 'N/A'}
          </div>
          <div>Medium: {data.medium ? data.medium : 'N/A'}</div>
          <br />
          <br />
          <div>
            Artist: {data.artistDisplayName ? data.artistDisplayName : 'N/A'}
            {data.artistDisplayName && (
              <span>
                {' '}
                (
                <a
                  href={data.artistWikidata_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  wiki
                </a>
                )
              </span>
            )}
          </div>
          <div>Credit Line: {data.creditLine ? data.creditLine : 'N/A'}</div>
          <div>Dimensions: {data.dimensions ? data.dimensions : 'N/A'}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  ) : null;
}
