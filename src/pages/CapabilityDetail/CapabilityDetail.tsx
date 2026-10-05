import {
  Container,
  Typography,
} from '@mui/material';

export default function CapabilityDetail() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 16,
      }}
    >
      <Typography variant="h1">
        Üretim Kabiliyetleri Detayı
      </Typography>
    </Container>
  );
}