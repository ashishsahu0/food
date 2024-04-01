import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food Ordering
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
      <Container sx={{ marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="my-ecommerce-app/src/assets/foood.jpg" // Insert image URL
                alt="Food Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Burger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Delicious burger with fries.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Order Now</Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Add more product cards as needed */}
        </Grid>
      </Container>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
        <p>&copy; {new Date().getFullYear()} Food Ordering. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
