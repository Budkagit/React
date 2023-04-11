import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import '../style/product.css'
import { useEffect, useState } from "react";


export default function Product() { 
  const [data, setData]: any = useState([]);

  useEffect(() => {
    axios.post("http://localhost:4000/auth/product").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      {data.map((item: any) => (
        <Card className="Card" sx={{ maxWidth: 345 }} key={item.id}>
          <CardMedia className="CardMedia" sx={{ height: 140 }} title="coffee"  image={item.image} />
          <CardContent className="CardContent">
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.vendor_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.rating}
            </Typography>
          </CardContent>
          <CardActions className="CardActons">
            <Button className="Button"size="small">Buy</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
