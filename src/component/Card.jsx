import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { data } from "../utils/static";
import { Box, Button, Grid } from "@mui/material";

export default function MenuCard({ onShowDetail }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.image}
                height="260"
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom  component="div" sx={{fontFamily:'cursive', fontWeight:500 , fontSize:19}}>
                 Aj Kya Kahana h: {item.foodName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={{ padding: 2 }}>
              <Button variant="outlined" fullWidth onClick={() => onShowDetail(item)} sx={{fontFamily:'cursive'}}>
                Show Detail
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
