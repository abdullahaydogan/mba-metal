import {
  Container,
  Typography,
} from '@mui/material';

export default function Quote() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 16,
      }}
    >
      <Typography variant="h1">
        Teklif
      </Typography>
    </Container>
  );
}