import {
  Container,
  Typography,
} from '@mui/material';

export default function NotFound() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 16,
      }}
    >
      <Typography variant="h1">
        Sayfa Bulunamadı
      </Typography>
    </Container>
  );
}