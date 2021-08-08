import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { EventsContext } from '../../App';

const useStyles = makeStyles({
  root: {
    width: 270,
    marginBottom: 20,
    marginLeft: 7,
    marginRight: 7,
  },
  media: {
    height: 220,
  },
});

function VolunteerOption(props) {
  const classes = useStyles();
  const { taskName, img, color, id } = props.data;
  const [events, setEvents] = useContext(EventsContext);

  const handleAddEvents = (id) => {
    fetch(`http://localhost:3001/eventById/${id}`)
      .then((res) => res.json())
      .then((data) => setEvents([...events, data]));
  };

  return (
    <Link
      style={{ textDecoration: 'none' }}
      onClick={() => handleAddEvents(id)}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={taskName} />
          <CardContent
            style={{
              backgroundColor: color,
              color: '#fff',
              textAlign: 'center',
            }}
          >
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
