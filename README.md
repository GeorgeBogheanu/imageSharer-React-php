# REACT+PHP+MYSQL
<h2>Image Sharer</h2>
<p>ImageSharer is a web application that allows users to share their favorite images along with descriptions. Built using React for the frontend, PHP for the backend, and MySQL for data storage.</p>
<p>The project showcases a RESTful API created with PHP, serving as the backend for ImageSharer. This API powers the communication between the frontend and the MySQL database, enabling smooth interactions and real-time updates.</p>
<h3>Key Features:</h3>
<ul>
  <li>Image Upload</li>
  <li>Comments</li>
  <li>Likes</li>
  <li>Responsive design</li>
</ul>
<h2> Getting Started </h2>

<ol>
    <li>
        <strong>Install Development Tools:</strong>
        <ul>
            <li>Make sure you have <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code (VSCode)</a> installed on your system.</li>
        </ul>
    </li>
    <li>
        <strong>Set Up Local Server:</strong>
        <ul>
            <li>Download and install <a href="https://www.apachefriends.org/index.html" target="_blank">XAMPP</a>, which includes Apache, MySQL, and PHP.</li>
        </ul>
    </li>
    <li>
        <strong>Start the Local Server:</strong>
        <ul>
            <li>Launch the XAMPP Manager and start the Apache and MySQL servers.</li>
        </ul>
    </li>
    <li>
        <strong>Configure MySQL Database:</strong>
        <ul>
            <li>Open a web browser and go to <a href="http://localhost/phpmyadmin" target="_blank">http://localhost/phpmyadmin</a>.</li>
            <li>Create a new database for ImageSharer.</li>
            <li>Inside the created database, import the SQL script provided in the <code>backend/database</code> folder to set up the necessary tables.</li>
        </ul>
    </li>
    <li>
        <strong>Move Backend to XAMPP:</strong>
        <ul>
            <li>Locate the <code>backend</code> folder in the ImageSharer repository.</li>
            <li>Move the entire <code>backend</code> folder into the <code>htdocs</code> directory of your XAMPP installation.</li>
        </ul>
    </li>
    <li>
        <strong>Start the Frontend:</strong>
        <ul>
            <li>Open a terminal in VSCode and navigate to the folder where you have the ImageSharer app.</li>
            <li>Run <code>npm install</code> to install the project dependencies.</li>
            <li>After installation, run <code>npm start</code> to start the development server.</li>
        </ul>
    </li>
    <li>
        <strong>Access ImageSharer:</strong>
        <ul>
            <li>Open your web browser and go to <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> to access ImageSharer.</li>
        </ul>
    </li>
</ol>

