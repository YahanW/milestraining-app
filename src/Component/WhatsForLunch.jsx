import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { Button, Box, Typography, Paper } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const sectors = [
  { color: '#f44336', label: '馅食' },
  { color: '#4caf50', label: '麻辣烫' },
  { color: '#2196f3', label: '山下' },
  { color: '#ffeb3b', label: '铁板' },
  { color: '#00bcd4', label: 'SUBWAY' },
  { color: '#e91e63', label: '西安' },
  { color: '#2196f3', label: 'Wokin' },
  { color: '#ffeb3b', label: 'Bravo' },
];

const LuckyWheel = () => {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // 使用 react-spring 的动画 hook
  const { rotate } = useSpring({
    rotate: angle,
    config: { tension: 200, friction: 50 }
  });

  // 使用 use-gesture 处理拖拽
  const bind = useDrag(({ movement: [mx], dragging }) => {
    if (isSpinning) return;
    setAngle(mx);
  });

  const spinWheel = () => {
    if (isSpinning) return;

    const newAngle = angle + 360 * 8 + Math.floor(Math.random() * 360);
    setAngle(newAngle);
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      const selectedIndex = sectors.length - 1 - Math.floor((newAngle % 360) / (360 / sectors.length));
      alert(`中午吃 ${sectors[selectedIndex].label}!`);
      console.log(`${angle%360}, ${newAngle%360}, ${selectedIndex}, ${sectors[selectedIndex].label}`)
    }, 2300); // 假设转盘旋转动画持续3秒
    
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        < ArrowDownwardIcon />
      <Box
        {...bind()}
        sx={{ width: 300, height: 300, position: 'relative', borderRadius: '50%', overflow: 'hidden', margin: '0 0 20px 0' }}
      >
        <animated.div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            left: 0,
            transform: rotate.to(r => `rotate(${r}deg)`),
          }}
        >
          {sectors.map((sector, i) => (
            <Box
              key={i}
              component={Paper}
              sx={{
                backgroundColor: sector.color,
                transform: `rotate(${(i * 360) / sectors.length}deg) skewY(${(360/sectors.length)-90}deg)`,
                transformOrigin: '0% 100%',
                width: '50%',
                height: '50%',
                position: 'absolute',
                left: '50%',
                display: 'flex',
                flexDirection:'row',
                padding:'5% 5%',
                justifyContent: 'start',
                alignItems: 'end',
                color: 'white',
                fontWeight: 'bold',
              }}
              elevation={3}
            >
                {sector.label}
              
            </Box>
          ))}
        </animated.div>
      </Box>
      <Button variant="contained" color="primary" onClick={spinWheel} disabled={isSpinning}>
        中午吃什么呢
      </Button>
    </Box>
  );
};

export default LuckyWheel;