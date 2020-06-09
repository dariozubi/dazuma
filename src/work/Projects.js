import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useTransition, a } from 'react-spring';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

import useMedia from './useMedia';
import useMeasure from './useMeasure';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  list: {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& > div': {
      position: 'absolute',
      willChange: 'transform, width, height, opacity',
      padding: '15px',
      '& > div': {
        margin: '0',
        padding: '0',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        boxShadow: '0px 10px 50px -10px rgba(0, 0, 0, 0.2)'
      },
      '& div > div': {
        display: 'none',
        height: '100%',
        textAlign: 'center',
        paddingTop: '16px'
        
      },
      '&:hover': {
        '& div > div': {
          display: 'block',
          backgroundColor: '#ffffffd6',
          cursor: 'pointer'
        }
      }
    }
  }
}));  

export default function Projects(){
  const router = useRouter();
  const styles = useStyles();
  const [type, setType] = useState('all');
  const columns = useMedia(['(min-width: 1280px)', '(min-width: 960px)', '(min-width: 600px)'], [5, 4, 3], 2)
  const [bind, { width }] = useMeasure()
  const [items, setItems] = useState(data)

  let heights = new Array(columns).fill(0)
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights))
    const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
    return { ...child, xy, width: width / columns, height: child.height / 2 }
  })

  useEffect(() => {
    const type = router.query.type;
    if (type !== undefined){
      setType(type);
      setItems(data.filter(d => d.type === type));
    }
    else
      setItems(data);
  }, [])

  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })

  const handleClick = (e) => {
    e.preventDefault();
    const type = e.currentTarget.id
    setType(type);
    if (type === 'all')
      setItems(data);
    else
      setItems(data.filter(d => d.type === type));
  }

  return(
    <React.Fragment>

      <Box mt={12}>
        <div className={styles.root}>
          <Chip onClick={handleClick} label="All"  color="primary" variant={type === 'all' ? 'default' : 'outlined'} id='all' />
          <Chip onClick={handleClick} label="Web"  color="primary" variant={type === 'web' || type === 'all' ? 'default' : 'outlined'} id='web' />
          <Chip onClick={handleClick} label="Multimedia"  color="primary" variant={type === 'multimedia' || type === 'all' ? 'default' : 'outlined'} id='multimedia' />
          <Chip onClick={handleClick} label={router.pathname.substring(1,3) == 'en' ? 'VR' : 'RV'}  color="primary" variant={type === 'vr' || type === 'all' ? 'default' : 'outlined'} id='vr' />
          <Chip onClick={handleClick} label={router.pathname.substring(1,3) == 'en' ? 'More' : 'Más'}  color="primary" variant={type === 'more' || type === 'all' ? 'default' : 'outlined'} id='more' />
        </div>
      </Box>

      <div {...bind} className={styles.list} style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>

            <Link href={router.pathname + '/' + item.link}>
              <div style={{ backgroundImage: item.css }}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{router.pathname.substring(1,3) === 'en' ? item.description : item.descripcion}</p>
                </div>
              </div>
            </Link>
          </a.div>
        ))}
      </div>

    </React.Fragment>
  );
}