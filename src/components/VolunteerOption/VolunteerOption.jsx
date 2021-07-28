import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    width: 270,
    marginBottom: 20,
  },
  media: {
    height: 220,
  },
});

function VolunteerOption(props) {
  const classes = useStyles();

  const { taskName, img, color } = props.data;

  return (
    <Link style={{ textDecoration: 'none' }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={taskName} />
          <CardContent style={{ backgroundColor: color, color: '#fff' }}>
            <Typography
              style={{ height: '50px' }}
              gutterBottom
              variant='h6'
              component='h2'
            >
              {taskName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default VolunteerOption;
