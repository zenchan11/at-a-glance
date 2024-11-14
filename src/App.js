// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import DyeingReports from './components/DyeingReports';
import DyeingMasters from './components/DyeingMasters';
import YarnIssued from './components/YarnIssued';
import TotalSqmtOfCarpets from './components/TotalSqmtOfCarpets';
import Available from './components/Available';

import './App.scss';

function App() {
    return (
        <Router>
            <div className="app">
                {/* Sidebar navigation */}
                <aside className="sidebar">
                    <div className="logo">
                        <Link to="/" className="text_none">My App</Link>
                    </div>
                    <div className="links">
                        <ul>
                            <span className="spann">Navigation</span>
                            <li>
                                <Link to="/dyeing-reports" className="text_none">
                                    <span className="icon">📊</span>
                                    Dyeing Reports
                                </Link>
                            </li>
                            <li>
                                <Link to="/dyeing-masters" className="text_none">
                                    <span className="icon">🧶</span>
                                    Dyeing Masters
                                </Link>
                            </li>
                            <li>
                                <Link to="/yarn-issued" className="text_none">
                                    <span className="icon">📜</span>
                                    Yarn Issued
                                </Link>
                            </li>
                            <li>
                                <Link to="/total-sqmt-of-carpets" className="text_none">
                                    <span className="icon">📐</span>
                                    Total Sqmt of Carpets
                                </Link>
                            </li>
                            <li>
                                <Link to="/available" className="text_none">
                                    <span className="icon">✔️</span>
                                    Available
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main content */}
                <main className="content">
                    <Routes>
                        <Route path="/dyeing-reports" element={<DyeingReports />} />
                        <Route path="/dyeing-masters" element={<DyeingMasters />} />
                        <Route path="/yarn-issued" element={<YarnIssued />} />
                        <Route path="/total-sqmt-of-carpets" element={<TotalSqmtOfCarpets />} />
                        <Route path="/available" element={<Available />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
