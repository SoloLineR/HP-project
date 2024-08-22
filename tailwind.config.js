/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend:{
      colors:{
        "GriffindorDarkRed":"#740001",
        "GryffindorRed":"#ae0001",
        "GriffindorYellow":"#eeba30",
        "GriffindorGold":"#d3a625",
        "SlytherinDarkGreen": "#1a472a",
    "SlytherinGreen": "#2a623d",
    "SlytherinDarkSilver": "#5d5d5d",
    "SlytherinLightSilver": "#aaaaaa",
    "RavenclawDarkBlue": "#0e1a40",
    "RavenclawBlue": "#222f5b",
    "TheGreyLady": "#bebebe",
    "RavenclawGold": "#946b2d",
    "HufflepuffCanary": "#ecb939",
    "HufflepuffLightCanary": "#f0c75e",
    "HufflepuffLightBrown": "#726255",
    "HufflepuffDarkBrown": "#372e29",
     "BackGround":"#FFF8F0",
     "black":"#000000",
     "forUnknownBorderNText":"#6CC551",
     "forUnknownBg":"#22031F"
      },
      fontFamily:{
        'HarryPotter':['Harry Potter']
      },
      width:{
        1240:"77.5rem"
      },
      padding:{
        60:"3.75rem"
      },
      fontSize:{
        30:"1.875rem",
        40:"2.5rem"
      },
      borderRadius:{
        45:"2.8125rem"
      },
      gridTemplateColumns:{
        "info":"repeat(4,1fr)"
      },
      gridColumn:{
        span2:"span 2"
      }
      ,
      screens:{
        'tall': { 'raw': '(min-width: 1050px)' },
        'infoq': { 'raw': '(max-width: 600px)' },
      },
      gridRow:{
        "infoa":"1 / span 2"
      }
    }
  },
  plugins: [],
}

