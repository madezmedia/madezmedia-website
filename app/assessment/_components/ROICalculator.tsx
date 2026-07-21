'use client';

import React, { useState, useId } from 'react';

export function ROICalculator() {
  const empInputId = useId();
  const rateInputId = useId();
  const hoursInputId = useId();

  const [employees, setEmployees] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(40);
  const [hoursLost, setHoursLost] = useState<number>(5);

  const annualSavingsPerEmp = hoursLost * hourlyRate * 52;
  const totalAnnualSavings = annualSavingsPerEmp * employees;
  const monthlySavings = Math.round(totalAnnualSavings / 12);
  const totalWeeklyHours = hoursLost * employees;
  const roiMultiple = (totalAnnualSavings / 499).toFixed(1);

  return (
    <div className="roi-calculator-card">
      <div className="calc-header">
        <div className="mzm-eyebrow">
          <span className="num">INTERACTIVE MODEL</span>Annual Labor Recovery
        </div>
        <h3 className="calc-title">
          Calculate Your Team&apos;s <span className="em">Hidden Waste</span>
        </h3>
        <p className="calc-subtitle">
          Based on our baseline <strong>$10,400 per employee</strong> annual labor savings model (5 hrs/wk @ $40/hr). Adjust parameters to match your organization.
        </p>
      </div>

      <div className="calc-grid">
        <div className="calc-controls">
          <div className="control-group">
            <div className="control-label-row">
              <label htmlFor={empInputId}>Team Members / Employees</label>
              <span className="control-val">{employees} {employees === 1 ? 'person' : 'people'}</span>
            </div>
            <input
              id={empInputId}
              type="range"
              min="1"
              max="50"
              value={employees}
              onChange={(e) => setEmployees(parseInt(e.target.value, 10) || 1)}
              className="mzm-slider"
            />
            <div className="slider-ticks">
              <span>1</span>
              <span>10</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>

          <div className="control-group">
            <div className="control-label-row">
              <label htmlFor={rateInputId}>Avg. Hourly Labor Rate ($/hr)</label>
              <span className="control-val">${hourlyRate}/hr</span>
            </div>
            <input
              id={rateInputId}
              type="range"
              min="20"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value, 10) || 20)}
              className="mzm-slider"
            />
            <div className="slider-ticks">
              <span>$20</span>
              <span>$50</span>
              <span>$100</span>
              <span>$150</span>
            </div>
          </div>

          <div className="control-group">
            <div className="control-label-row">
              <label htmlFor={hoursInputId}>Wasted Hours / Week / Employee</label>
              <span className="control-val">{hoursLost} hrs/wk</span>
            </div>
            <input
              id={hoursInputId}
              type="range"
              min="1"
              max="15"
              step="1"
              value={hoursLost}
              onChange={(e) => setHoursLost(parseInt(e.target.value, 10) || 1)}
              className="mzm-slider"
            />
            <div className="slider-ticks">
              <span>1 hr</span>
              <span>5 hrs</span>
              <span>10 hrs</span>
              <span>15 hrs</span>
            </div>
          </div>
        </div>

        <div className="calc-results">
          <div className="result-card primary">
            <span className="result-label">Est. Annual Recoverable Labor</span>
            <div className="result-amount">${totalAnnualSavings.toLocaleString('en-US')}</div>
            <span className="result-sub">
              ${monthlySavings.toLocaleString('en-US')} / month back into productive work
            </span>
          </div>

          <div className="result-stats-row">
            <div className="stat-box">
              <span className="stat-num">{totalWeeklyHours}</span>
              <span className="stat-lbl">Weekly Hours Reclaimed</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">{roiMultiple}x</span>
              <span className="stat-lbl">ROI vs $499 Audit Fee</span>
            </div>
          </div>

          <div className="calc-guarantee-note">
            <span className="note-badge">5+ HR/WK GUARANTEE</span>
            <p>
              If our $499 Assessment does not pinpoint at least 5 hours/week per employee of recoverable labor, we refund 100% of your audit fee on the spot.
            </p>
          </div>

          <a
            href="https://cal.com/mad-ez-media/ai-automation-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="calc-cta-btn"
          >
            Claim Your $499 Assessment Audit →
          </a>
        </div>
      </div>
    </div>
  );
}
