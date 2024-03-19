import { Stack } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
        <>
        <div>
        <h1>
          Example heading
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
      </div>

      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;
        </>

  );
}

export default Home;