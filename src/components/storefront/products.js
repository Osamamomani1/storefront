import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
// import makeStyles from 'mui/styles'
import { connect } from "react-redux";

const Products = (props) => {
  // const useStyle = makeStyles({
  //   root: {
  //     maxWidth: 345,
  //   },
  //   media: {
  //     height: 140,
  //   },
  // });

  // const classes = useStyle();
console.log(props);
  return (
    <>
    </>
    // <section>
    //   {props.products.map((el) => {
    //     return (
    //       <Card  key={el.name}>
    //         <CardActionArea>
    //           <CardMedi
    //             image="/static/images/cards/contemplative-reptile.jpg"
    //             title={el.name}
    //           />
    //           <CardContent>
    //             <Typography gutterBottom variant="h5" component="h2">
    //               {el.name}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary" component="p">
    //               {el.discription}
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //         <CardActions>
    //           <Button size="small" color="primary">
    //             ADD TO CARD
    //           </Button>
    //           <Button size="small" color="primary">
    //             VIEW DETAILS
    //           </Button>
    //         </CardActions>
    //       </Card>
    //     );
    //   })}
    // </section>
  );
};

const mapStateToProps = (state) => ({
  // products: state.products,
  activeCategory: state.categoriesReducer.active
});

export default connect(mapStateToProps)(Products);