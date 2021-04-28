import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import * as MI_API from "../Api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
      height: '100%', 
      width: '100%',
    },
    button: {
        margin: theme.spacing(1),
      },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

export default function Tarjeta(props) {
    const classes = useStyles();
    const history = useHistory();

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <p>{props.Par.name + " " + props.Par.last}</p>
                <p>{props.Par.phone}</p>
                <p>{props.Par.email}</p>
            </CardContent>
            <CardActions>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => 
                  { 
                    MI_API.deleteTodos(props.Par.id);
                    history.push("/"); 
                  }
                  }
            >
              Eliminar
            </Button>
            <Button
               variant="contained"
               color="primary"
               size="large"
               className={classes.button}
               startIcon={<SaveIcon />}
               onClick={() => { history.push("/Crear", props.Par) }}
            >
              Editar
            </Button>
            </CardActions>
        </Card>
    );
}