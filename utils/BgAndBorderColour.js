const colourCode = ['red', 'blue', 'yellow', 'green', 'neutral', 'purple', 'lime', 'amber'];

const getBorderColor = (color) => {
    // console.log(color)
    const map = {
      red: '#ffe2e2', // 100
      blue: '#dbeafe',
      yellow: '#fef9c2',
      green: '#dcfce7',
      neutral: '#f5f5f5',
      purple: '#f3e8ff',
      amber: '#fef3c6',
      lime: '#ecfcca',
    }
    return map[color]
  }

  const getBodyColor = (color) => {
    const map = {
      red: '#ffc9c9',  // 200   
      blue: '#bedbff',
      yellow: '#fff085',
      green: '#b9f8cf',
      neutral: '#e5e5e5',
      purple: '#e9d4ff',
      amber: '#fee685',
      lime: '#d8f999',
    }
    return map[color]
  }

  export { colourCode, getBodyColor, getBorderColor };
