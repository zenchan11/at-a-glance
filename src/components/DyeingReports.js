// src/components/DyeingReports.js
import React from 'react';
import ProgressBar from './ProgressBar';  // Import ProgressBar component
import { Link } from 'react-router-dom';

function DyeingReports() {
    return (
        <div className="dyeing-reports">
            <h2>Dyeing Reports</h2>

            {/* Add the ProgressBar component */}
            <ProgressBar />

            <div className="details-section">
                <h3>Additional Details</h3>
                <p>Some details about the dyeing reports can go here.</p>

                {/* Example links for navigation */}
            </div>
        </div>
    );
}

export default DyeingReports;
