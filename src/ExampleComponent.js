import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
} from '@mui/material';

// PixelLabel uses your Tiny5 font for that retro blocky flair
export function PixelLabel() {
  return (
    <Typography variant="pixel" sx={{ mt: 2 }}>
      ▶️ READY
    </Typography>
  );
}

// A simple header bar
export function HeaderBar() {
  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontFamily: '"Bodoni Moda", serif' }}
        >
          MySite
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

// Hero section with big Bodoni heading
export function HeroSection() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Welcome to MySite
      </Typography>
      <Typography variant="body1" paragraph>
        This is my personal website. Let me show you something awesome!
      </Typography>
      <Button variant="contained" size="large">
        Get Started
      </Button>
    </Container>
  );
}

// A card feature with a pixel accent
export function FeatureCard({ title, description }) {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', my: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <PixelLabel />
      </CardContent>
    </Card>
  );
}

// Example page assembling all components
export default function ExampleComponents() {
  return (
    <>
      <HeaderBar />
      <HeroSection />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <FeatureCard
              title="Sleek Design"
              description="Clean, modern, and responsive."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FeatureCard
              title="Playful Vibes"
              description="A touch of personality with pixel art."
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
