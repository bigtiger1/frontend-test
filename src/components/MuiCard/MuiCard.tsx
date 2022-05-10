import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CardProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}

/**
 * Primary UI component for user interaction
 */
const MuiCard = ({ checked, onChange, label }: CardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 230,
        border: checked ? '1px solid #177F75' : 'none',
        borderRadius: '10px',
        boxShadow: checked ? '0px 0px 0px 2px #65E9D9' : 'none',
        '&:hover': {
          boxShadow: '0px 0px 0px 2px #65E9D9'
        }
      }}
      variant='outlined'
    >
      <CardMedia
        component="img"
        height="100"
        image="https://amymhaddad.s3.amazonaws.com/morocco-blue.png"
        alt="green iguana"
      />
      <CardActions sx={{ paddingX: 2, paddingY: 0, minHeight: 50 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={onChange}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                color: 'rgba(0, 0, 0, 0.6)',
                '&.Mui-checked': {
                  color: '#21B6A8',
                },
              }}
            />
          }
          label={label}
        />
      </CardActions>
    </Card>
  );
};

export default MuiCard;