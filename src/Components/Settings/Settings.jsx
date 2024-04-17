import React from "react";
import './Settings.css'

const AccountSettings = () => {
    return(
        <main>
        <div class="container">
            <div class="box">
                <h1>Account Settings</h1>
                <div class="profile">
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                </div>
                <ul class="menu">
                    <li><a href="/#">Account Info</a></li>
                    <li><a href="/#">Change Password</a></li>
                    <li><a href="/#">Orders</a></li>
                    <li><a href="/#">Sales</a></li>
                    <li><a href="/#">Go Back</a></li>
                </ul>
            </div>
        </div>
    </main>
    );
}

export default AccountSettings;