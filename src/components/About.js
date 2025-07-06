import React from 'react';

export default function About(props) {
  let myStyle={
    
    color:props.color
  }
  return (
    <div className="container my-4" style={{ maxWidth: '700px' }}>
      <h2 className="mb-3" style={myStyle}>📝 About NoteXpress</h2>
      <p style={myStyle}>
        Welcome to <strong>NoteXpress</strong> – your smart, simple, and secure digital notebook.
      </p>
      <p style={myStyle}>
        In a world full of ideas, tasks, and to-dos, NoteXpress helps you keep everything <strong>organized and accessible</strong>, all in one place.
      </p>

      <h4 className="mt-4" style={myStyle}>🔍 What You Can Do with NoteXpress</h4>
      <ul style={myStyle}>
        <li>✍️ <strong>Create Notes</strong> – Write, edit, and delete your thoughts or reminders easily.</li>
        <li>📂 <strong>Organize Efficiently</strong> – Manage notes effortlessly with a clean and intuitive interface.</li>
        <li>🌙 <strong>Switch Themes</strong> – Choose between light and dark modes for a better visual experience.</li>
        <li>🔒 <strong>Secure Access</strong> – Your notes are safe and private with token-based authentication.</li>
        <li>📱 <strong>Responsive Design</strong> – Enjoy a smooth experience across all screen sizes.</li>
      </ul>

      <h4 style={myStyle} className="mt-4">👨‍💻 Built With</h4>
      <ul style={myStyle}>
        <li>React.js for a responsive frontend</li>
        <li>Node.js and Express for a powerful backend</li>
        <li>MongoDB for flexible data storage</li>
        <li>Bootstrap for beautiful UI components</li>
      </ul>

      <h4 style={myStyle} className="mt-4">🎯 Our Goal</h4>
      <p style={myStyle}>
        NoteXpress is designed for <strong>students, professionals, creators</strong>, or anyone who needs to jot down thoughts quickly and securely.
      </p>
      <p style={myStyle}>
        No clutter. No distractions. Just your ideas – organized and always accessible.
      </p>
    </div>
  );
}

