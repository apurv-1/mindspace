import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { withFirebase } from "../Firebase/index";
import Fade from "react-reveal/Fade";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./home.css";
// import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: 60,
    marginTop: 40,
  },
  media: {},
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Fade>
          <center>
            <h1>MindSpace</h1>
            <h2>Your Mental Wellness tracker</h2>
          </center>
        </Fade>
        <Fade>
          <div className="card-container">
            {" "}
            <Link className="tags" to="/Writeyourmood">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    maxWidth="300"
                    image="https://image.freepik.com/free-vector/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg"
                    title="Write your mood"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      align="center"
                      variant="h5"
                      component="h2"
                    >
                      Write Your Mood
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <Button size="small" color="primary">
                  Open
                </Button>
              </CardActions> */}
              </Card>
            </Link>
            <Link className="tags" to="/CognitiveCorrections">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    maxWidth="300"
                    image="https://image.freepik.com/free-vector/business-idea-generation-plan-development-pensive-man-with-lightbulb-cartoon-character-technical-mindset-entrepreneurial-mind-brainstorming-process_335657-2104.jpg"
                    title="Cognitive Corrections"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      align="center"
                      component="h2"
                    >
                      Cognitive Corrections
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <Button size="small" color="primary">
                  Open
                </Button>
              </CardActions> */}
              </Card>
            </Link>
            <Link className="tags" to="/Facesnap">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image="https://image.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg"
                    title="Face Snap"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      align="center"
                      component="h2"
                    >
                      Face Snap
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                <Button size="small" color="primary">
                  Open
                </Button>
              </CardActions> */}
              </Card>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default withFirebase(Home);
