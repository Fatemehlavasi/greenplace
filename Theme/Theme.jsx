import {  createTheme, Shadows } from '@mui/material/styles';


export const theme = createTheme({
    // direction:'rtl',
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                boxSizing:'border-box',
                body:{
                    a:{
                        textDecoration:'none'
                    },
                    
                },
                
            },
        },
        MuiButton:{
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        color: '#fff',
                        border: "0.09375rem solid rgba(255, 0, 166, 0.06)",
                        backgroundColor: '#40513b',
                        borderRadius: '5px',
                        textAlign: 'center',
                        // width: "auto",
                        minWidth:" 40px",
                        // boxShadow:"rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 20%) 0px 4px 16px -8px" ,
                        lineheight: 1.75,
                        '&:hover': {
                            backgroundColor: '#40513b',
                            color: '#FFf',
                        }
                    }
                },
                // {
                //     props: {variant: 'secondaryButton'},
                //     style: {

                //     }
                // }
            ]
        },
    },
  palette:{
    primary: {
      main:'#FF00A6',
      light:'#FF38AC',
      dark:'#E00096',
    },
    error:{
        main:'#FA284B',
        light:'#FF3D5D',
        dark:'#E00025'
    },
    warning:{
        main:'#FACB0F',
        light:'#FFD83D',
        dark:'#9E6900'
    },
    success:{
        main:'#00B862',
        light:'#18C775',
        dark:'#008542'
    }
  },
//   shadows:[
//     'none',
//     'rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 30%) 0px 8px 32px -16px',
//     " 0px 1px 0pxrgba(58,61,66,0.06),0px 2px 8px -2pxrgba(0,0,0,0.05)",
//     "0px 1px 0pxrgba(58,61,66,0.06),0px 4px 16px -8pxrgba(0,0,0,0.2)",
//     "0px 1px 0pxrgba(58,61,66,0.06),0px 8px 32px -16pxrgba(0,0,0,0.3)",
//     "0px 2px 8pxrgba(0,0,0,0.08),0px 8px 32pxrgba(0,0,0,0.16)",
//     //tedad shadow
//     ...Array(19).fill('none'),
//   ] as Shadows,
  typography:{
    fontFamily:'IranSansMobile',
    //title app section
    h1:{
        fontSize:'23px',
        fontWeight:700,
        color:'#00000',
        lineHeight:'23px',
    },

    //title container
   lable:{
        fontSize:'12px',
        fontWeight:500,
        color:'#171717',
        lineHeight:'23px'
    },
    
    //card description
    subtitle1:{
        fontSize:'0.75rem',
        fontWeight:400,
        color:'rgb(166, 170, 173)',
        lineHeight:'1rem'
    },
    //card resturant page description
    subtitle2:{
        fontSize:'1rem',
        fontWeight:700,
        color:'rgb(58,61,66)',
        lineHeight:'1.5rem'
    },
    //city section,location
    body2:{
        fontSize:'0.625rem',
        fontWeight:400,
        color:'rgb(166,170,173)',
        lineHeight:'0.75rem'
    },

    body1:{
        fontSize:'0.875rem',
        fontWeight:400,
        color:'rgb(58, 61, 66)',
        lineHeight:'1.25rem'
    }
  }
});
