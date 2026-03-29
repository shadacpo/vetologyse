<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vetology - Veterinary Clinic</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, #4a90e2, #7b68ee);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            height: 50px;
            width: 150px;
            object-fit: contain;
            border-radius: 5px;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
        }

        nav a:hover {
            opacity: 0.8;
        }

        .auth-buttons {
            display: flex;
            gap: 1rem;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

        .btn-primary {
            background: #ff6b6b;
            color: white;
        }

        .btn-primary:hover {
            background: #ff5252;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .btn-secondary:hover {
            background: white;
            color: #4a90e2;
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 2000;
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: white;
            margin: 5% auto;
            padding: 2rem;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        }

        .close {
            position: absolute;
            right: 20px;
            top: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }

        .close:hover {
            color: #333;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #555;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: #4a90e2;
        }

        /* Main Content */
        main {
            margin-top: 100px;
            padding: 2rem 0;
        }

        .hero {
            text-align: center;
            padding: 4rem 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 20px;
            margin-bottom: 3rem;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }

        /* Clinic Info */
        .clinic-info {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 3rem;
        }

        .clinic-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .info-card {
            text-align: center;
            padding: 1.5rem;
            border-radius: 10px;
            background: #f8f9fa;
        }

        .info-card i {
            font-size: 2.5rem;
            color: #4a90e2;
            margin-bottom: 1rem;
        }

        /* Doctors Section */
        .doctors-section {
            margin-bottom: 3rem;
        }

        .section-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
            color: #2c3e50;
        }

        .doctors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .doctor-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .doctor-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .doctor-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .doctor-info {
            padding: 1.5rem;
        }

        .doctor-name {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }

        .doctor-specialty {
            color: #4a90e2;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        .doctor-phone {
            color: #666;
            margin-bottom: 1rem;
        }

        .certifications {
            margin-bottom: 1rem;
        }

        .certification {
            display: inline-block;
            background: #e3f2fd;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            margin: 0.2rem 0.3rem 0.2rem 0;
            color: #1976d2;
        }

        .rating {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .stars {
            color: #ffd700;
        }

        .rating-count {
            font-size: 0.9rem;
            color: #666;
        }

        .comments-section {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #eee;
        }

        .comment {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }

        .comment-author {
            font-weight: bold;
            color: #4a90e2;
            margin-bottom: 0.5rem;
        }

        /* Admin Dashboard */
        .dashboard {
            display: none;
        }

        .admin-nav {
            background: #2c3e50;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 2rem;
        }

        .admin-nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .admin-nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .admin-nav a.active,
        .admin-nav a:hover {
            background: #4a90e2;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }

            nav ul {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .section-title {
                font-size: 2rem;
            }
        }

        /* Loading */
        .loading {
            display: none;
            text-align: center;
            padding: 2rem;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4a90e2;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <img id="logo" class="logo" src="https://via.placeholder.com/150x50/4a90e2/white?text=Vetology" alt="Vetology Logo">
                <nav>
                    <ul>
                        <li><a href="#home" onclick="showSection('home')">Home</a></li>
                        <li><a href="#doctors" onclick="showSection('doctors')">Doctors</a></li>
                        <li><a href="#contact" onclick="showSection('contact')">Contact</a></li>
                    </ul>
                </nav>
                <div class="auth-buttons">
                    <button class="btn btn-secondary" onclick="openModal('loginModal')">Login</button>
                    <button class="btn btn-primary" onclick="openModal('registerModal')">Register</button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <!-- Hero Section -->
            <section id="home" class="hero">
                <h1>Welcome to Vetology</h1>
                <p>Your trusted veterinary clinic for premium pet care</p>
                <div style="margin-top: 2rem;">
                    <span id="currentUser" style="color: #4a90e2; font-weight: bold;"></span>
                    <button id="logoutBtn" class="btn btn-secondary" onclick="logout()" style="display: none; margin-left: 1rem;">Logout</button>
                </div>
            </section>

            <!-- Clinic Info -->
            <section id="clinicInfo" class="clinic-info" style="display: none;">
                <h2 style="text-align: center; margin-bottom: 2rem; color: #2c3e50;">Clinic Information</h2>
                <div class="clinic-grid" id="clinicDetails">
                    <!-- Clinic details will be populated here -->
                </div>
            </section>

            <!-- Doctors Section -->
            <section id="doctors" class="doctors-section">
                <h2 class="section-title">Our Doctors</h2>
                <div class="doctors-grid" id="doctorsGrid">
                    <!-- Doctors will be populated here -->
                </div>
            </section>

            <!-- Admin Dashboard -->
            <div id="adminDashboard" class="dashboard">
                <div class="admin-nav">
                    <ul>
                        <li><a href="#" class="active" onclick="showAdminSection('manage-doctors')">Manage Doctors</a></li>
                        <li><a href="#" onclick="showAdminSection('clinic-info')">Clinic Info</a></li>
                        <li><a href="#" onclick="showAdminSection('logo')">Change Logo</a></li>
                        <li><a href="#" onclick="showAdminSection('admins')">Admin Sessions</a></li>
                    </ul>
                </div>

                <!-- Manage Doctors -->
                <div id="manage-doctors" class="admin-section">
                    <h3>Add New Doctor</h3>
                    <form id="addDoctorForm" class="form-grid">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" id="doctorName" required>
                        </div>
                        <div class="form-group">
                            <label>Specialty</label>
                            <input type="text" id="doctorSpecialty" required>
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" id="doctorPhone" required>
                        </div>
                        <div class="form-group">
                            <label>Photo URL</label>
                            <input type="url" id="doctorPhoto" placeholder="https://example.com/photo.jpg">
                        </div>
                        <div class="form-group">
                            <label>Certifications (comma separated)</label>
                            <textarea id="doctorCerts" rows="3" placeholder="DVM, Board Certified, etc..."></textarea>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <button type="submit" class="btn btn-primary">Add Doctor</button>
                        </div>
                    </form>

                    <h3 style="margin-top: 3rem;">Current Doctors</h3>
                    <div id="adminDoctorsList"></div>
                </div>

                <!-- Clinic Info -->
                <div id="clinic-info" class="admin-section" style="display: none;">
                    <h3>Update Clinic Information</h3>
                    <form id="clinicInfoForm" class="form-grid">
                        <div class="form-group">
                            <label>Phone Number 1</label>
                            <input type="tel" id="phone1">
                        </div>
                        <div class="form-group">
                            <label>Phone Number 2</label>
                            <input type="tel" id="phone2">
                        </div>
                        <div class="form-group">
                            <label>Location/Address</label>
                            <textarea id="location" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Working Hours</label>
                            <input type="text" id="hours" placeholder="Mon-Fri: 9AM-6PM, Sat: 9AM-2PM">
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <button type="submit" class="btn btn-primary">Update Clinic Info</button>
                        </div>
                    </form>
                </div>

                <!-- Logo -->
                <div id="logo" class="admin-section" style="display: none;">
                    <h3>Change Clinic Logo</h3>
                    <form id="logoForm">
                        <div class="form-group">
                            <label>Logo URL</label>
                            <input type="url" id="logoUrl" placeholder="https://example.com/logo.png">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Update Logo</button>
                        </div>
                    </form>
                </div>

                <!-- Admin Sessions -->
                <div id="admins" class="admin-section" style="display: none;">
                    <h3>Active Admin Sessions</h3>
                    <div id="adminSessions"></div>
                </div>
            </div>
        </div>
    </main>

    <!-- Login Modal -->
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('loginModal')">&times;</span>
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="loginEmail" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="loginPassword" required>
                </div>
                <div class="form-group">
                    <label>
                        <input type="checkbox" id="adminLogin"> Admin Login
                    </label>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
            </form>
        </div>
    </div>

    <!-- Register Modal -->
    <div id="registerModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('registerModal')">&times;</span>
            <h2>Create Account</h2>
            <form id="registerForm">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="registerEmail" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="registerPassword" required>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" id="confirmPassword" required>
                </
