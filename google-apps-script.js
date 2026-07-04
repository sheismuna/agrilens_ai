// AgriLens AI: Pilot Application Form Handler
// Paste this into Google Apps Script (Extensions > Apps Script, opened FROM this sheet)
// Then click Deploy > New Deployment > Web App

// This must be the ID of the sheet in the URL:
// https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
const SPREADSHEET_ID = '1VJTpfT4QLRsYxJQKBR3eZeKPTnuIcFY4y2Em-iKtf7I';
const SHEET_NAME = 'Pilot Applications';

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the target spreadsheet explicitly by ID.
    // openById() works regardless of how/where this script is deployed,
    // unlike getActiveSpreadsheet() which only works if the script is
    // bound to this exact sheet.
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get or create the sheet
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers if sheet is new
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Organization',
        'Email',
        'Phone',
        'Role',
        'Location',
        'Crop Type',
        'Feedback',
        'Message'
      ]);
      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setBackground('#1B5E20');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
    }
    
    // Add the new submission row.
    // Note: the form currently has one free-text field, mapped to
    // "Feedback" below. The "Message" column is left blank; if you want
    // it to hold something different, add a second field to the form
    // and pass it here as data.message.
    sheet.appendRow([
      new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' }),
      data.name || '',
      data.organization || '',
      data.email || '',
      data.phone || '',
      data.role || '',
      data.location || '',
      data.cropType || '',
      data.message || '',
      ''
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 10);

    // Send email notification to founder
    sendNotificationEmail(data);

    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Application received successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS requests
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'AgriLens AI Form API is running' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(data) {
  try {
    // ✏️ CHANGE THIS to your email address
    const NOTIFICATION_EMAIL = 'hello.agrilensservices@gmail.com';
    
    const subject = `🌿 New Pilot Application: ${data.name} (${data.role})`;
    
    const body = `
New pilot application received for AgriLens AI.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICANT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:           ${data.name}
Organization:   ${data.organization || 'Not provided'}
Email:          ${data.email}
Phone:          ${data.phone || 'Not provided'}
Role:           ${data.role}
Location:       ${data.location || 'Not provided'}
Crop Type:      ${data.cropType || 'Not provided'}

FEEDBACK:
${data.message || 'No feedback provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}

View all applications:
https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AgriLens AI: See Early. Act Early. Grow More.
    `;
    
    GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
  } catch (err) {
    // Email sending failed silently, submission still saved to sheet
    console.log('Email notification failed:', err);
  }
}
