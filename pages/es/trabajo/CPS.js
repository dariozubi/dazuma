import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../../src/components/Layout';
import cps from '../../../src/images/cps.jpg';
import cps1 from '../../../src/images/cps1.jpg';
import cps2 from '../../../src/images/cps2.jpg';
import cps3 from '../../../src/images/cps3.jpg';
import cps4 from '../../../src/images/cps4.jpg';
import cps5 from '../../../src/images/cps5.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 164,
  },
});

function Text(){
  const classes = useStyles();

  return(
    <React.Fragment>
    <Box mt={8}>
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={cps}
            title="CPS"
          />
      </Card>
    </Box>
    <Box mx={8} my={4}>
      
      <Typography variant="h4" component="h1" gutterBottom>
        Desarrollo de software para CPS
      </Typography>
      
      <p>Centricity Practice Solution (CPS) es un software desarrollado por GE (mantenido ahora por Athena) para manejar contenido clínico. Permite a doctores y enfermeras manejar datos sobre los pacientes como alergias, problemas, citas, etc. Generalmente las enfermeras llenan la información del paciente (nombre, domicilio, teléfono, etc.) en su primera cisita y después se pueden guardar valores de diferentes variables cada vez que el paciente tiene una visita con el doctor. Para llenar estas variables se utilizan formas. Estas formas son creadas principalmente con dos programas: Visual Form Editor (VFE) y Clinical Forge.</p> 

      <p>Por un poco más de dos años trabaje creando formas para CPS en <a href="https://optumus.com/" target="_blank" rel="noopener">Optumus</a>. Al principio aprendí a utilizar VFE que es como volver a usar Windows 95. Para ser un programa dedicado a crear interfaces de usuario se ve bastante viejo. Después de aprender todos los pormenores de VFE, CPS y MEL (un lenguaje de programación un poco raro), mi jefe quiso empezar a construir formas con HTML. Clinical Forge hace esto utilizando un editor en línea. Checamos el código y vimos que utiliza una librería de AngularJS creada por la gente de CPS. </p>
      
      <p>Antes de empezar a trabajar en <a href="https://optumus.com/" target="_blank" rel="noopener">Optumus</a> ya tenía experiencia con JS y jQuery pero no había utilizado ninguno de los nuevos frameworks. Contratamos a una programadora para que nos explicara las ventajas de cada framework y se decidió que usaríamos Angular ya que la librería en la que nos íbamos a basar estaba hecha en AngularJS. Dado que hay muchos ejemplos de proyectos que migraron de uno a otro creímos que era la mejor decisión. Nadie en mi equipo de trabajo sabía algo de tecnologías web asi que yo tomé el proyecto solo. Después de pelearme unas semanas aprendiendo Angular y haciendolo trabajar con CPS (que utiliza IE10 para la interfaz web), finalmente conseguí crear un formulario.</p>
      
      <p>Después de eso empecé a crear varios formularios para diferentes clientes con este nuevo framework. En general a los clientes les gustaban los nuevos formularios porque estaban acostumbrados a los hechos por VFE que parecen de hace 20 años. Los míos tenían un mejor diseño y eran capaces de hacer cosas que los anteriores no podían hacer. Una de los principales motivos por los que los doctores preferían estos formularios era que se podía escribir mucho más texto en un sólo campo. Y ¿por qué eso es un problema? te podrás preguntar, los doctores necesitan escribir mucho acerca de sus pacientes, ¿no?. El problema está en que CPS sólo permite guardar máximo 2000 caracteres por cada variable y en VFE uno no puede asignar dos variables a un solo campo. Esto provoca que los usuarios tengan que picar algún botón o cambiarse de campo cada que se llega al límite. Con el framework que yo hice esto se solucionaba fácilmente realizando este proceso de fondo sin que el usuario se percatara. Esta fue la principal razón por la que los usuarios preferían los formularios realizados con Angular pero habían varias cosas que mejoraban la experiencia del usuario. Ahora había más componentes con los que trabajar, alertas, animaciones y hasta un canvas para dibujar. Este framework sigue siendo usado para crear formularios para cientos de doctores en Estados Unidos.</p>
    </Box>
    </React.Fragment>
  )
}

export default function CPS() {
	return (
		<Layout
      title="Software para CPS con MEL"
      description="Desarrollo de software para Centricity Practice Solution con MEL"
    >
      <Text/>
		</Layout>
	)
}