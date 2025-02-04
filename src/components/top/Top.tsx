import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import card1 from '../../assets/images/top/card-1.png';
import card2 from '../../assets/images/top/card-2.png';
import card3 from '../../assets/images/top/card-3.png';
import card4 from '../../assets/images/top/card-4.png';
import card5 from '../../assets/images/top/card-5.png';
import './Top.scss';

type IFeatureCardProps = {
  image: any;
  imageTitle: string;
  title: string;
  description: string;
};

const FeatureCard = (props: IFeatureCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="card">
        <CardMedia
          className="card-media"
          image={props.image}
          title={props.imageTitle}
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

class Top extends React.Component<RouteComponentProps, any> {
  onClickStartRemap = () => {
    this.props.history.push('/configure');
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Remap
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className="hero-content">
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Remap
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Remap allows you to customize a keymap assign of your keyboard
                directly in Web Browser.
              </Typography>
              <div className="hero-buttons">
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.onClickStartRemap}
                    >
                      Start Remap for your keyboard!
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" disabled={true}>
                      For Keyboard Developers
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <div className="hero-footer">
                <a
                  href="https://docs.google.com/document/d/1Fo2-cbPcTNkckwJOl-YqnBuVeyREuYtyoY8mecdiUxE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Use
                </a>
              </div>
            </Container>
          </div>
          <Container className="card-grid" maxWidth="md">
            <Grid container spacing={4}>
              <FeatureCard
                key={1}
                image={card1}
                imageTitle="card-1"
                title="Direct Access"
                description="Remap allows you to customize your keyboard from Web
                      Browser directly without installing app."
              />
              <FeatureCard
                key={2}
                image={card2}
                imageTitle="card-2"
                title="Key Layout"
                description="Intuitive customization according to the actual key
                      layout."
              />
              <FeatureCard
                key={3}
                image={card3}
                imageTitle="card-3"
                title="Show Difference"
                description="Easy-to-understand display of keymap changes."
              />
              <FeatureCard
                key={4}
                image={card5}
                imageTitle="card-5"
                title="Pre-defined Keys"
                description="Provide many Pre-defined keys to enable remap your key
                      mapping easily."
              />
              <FeatureCard
                key={5}
                image={card4}
                imageTitle="card-4"
                title="Define Own Key"
                description="Direct definition of keycode for complex keybindings with
                      a free label."
              />
            </Grid>
          </Container>
        </main>
        <footer className="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Remap
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Allow to customize your keyboard more easily.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://twitter.com/yoichiro">
              @yoichiro
            </Link>
            ,{' '}
            <Link color="inherit" href="http://twitter.com/adamrocker">
              @adamrocker
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            {'All rights reserved.'}
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(Top);
