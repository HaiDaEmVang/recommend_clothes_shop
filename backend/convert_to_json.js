const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Đọc tệp Excel
const workbook = XLSX.readFile(path.join(__dirname, '../../../../data.xlsx'));

// Lấy tên các sheet trong workbook
const sheetNames = workbook.SheetNames;

for(let i = 0; i<=5; i++){
    // Lấy dữ liệu từ sheet đầu tiên
const sheet = workbook.Sheets[sheetNames[i]];

// Chuyển dữ liệu sheet thành định dạng JSON
const data = XLSX.utils.sheet_to_json(sheet);

// Xuất dữ liệu ra tệp JSON
const jsonFilePath = path.join(__dirname, `data_${i}.json`);

fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error('Error writing JSON to file:', err);
  } else {
    console.log('JSON data has been written to', jsonFilePath);
  }
});
}