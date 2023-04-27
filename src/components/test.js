// Example CSV data
const csvData = [
    { id: 1, employeeName: 'Sam', assignment: '2 assignments', payPeriod: 'Jan 01 - Feb 15, 2023', rate: 100, hours: 21, grossPay: 1457,  },
    { id: 1.1, employeeName: 'Sam', assignment: '2 assignments', payPeriod: 'Jan 01 - Feb 15, 2023', rate: 100, hours: 8, grossPay: 500 },
    { id: 2, employeeName: 'Kaliesar', assignment: 'Roger Ferdnagds', payPeriod: 'Jan 12 - Feb 20, 2023', rate: 100, hours: 78, grossPay: 1245 },
    { id: 3, employeeName: 'Elon Musk', assignment: 'Duke Mardrid', payPeriod: 'Jan 25 - Feb 10, 2023', rate: 100, hours: 114, grossPay: 4758 },
    { id: 4, employeeName: 'Alan Walker', assignment: 'Jamica Fruits', payPeriod: 'Jan 14 - Feb 15, 2023', rate: 100, hours: 124, grossPay: 2478 },
  ];
  
  // Function to group CSV data by id and employeeName
  const groupCSVData = (data) => {
    const groupedData = {};
    data.forEach((row) => {
      const id = row.id === 1.1 ? 1 : row.id; // Convert 1.1 to 1
      const key = id + row.employeeName;
      if (!groupedData.hasOwnProperty(key)) {
        groupedData[key] = [];
      }
      groupedData[key].push(row);
    });
    return groupedData;
  };
  
  // Usage
  const groupedData = groupCSVData(csvData);
  console.log(groupedData);