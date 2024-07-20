import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="education-container">
            <h1 className="education-title">Education</h1>
            <table className="education-table">
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                        <th>Year</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.Tech (ECE)</td>
                        <td>G. Pullareddy Engineering College</td>
                        <td>2023</td>
                        <td>GPA: 7.19</td>
                    </tr>
                    <tr>
                        <td>Intermediate</td>
                        <td>Sri Chaitanya Junior College</td>
                        <td>2019</td>
                        <td>Percentage: 10</td>
                    </tr>
                    <tr>
                        <td>S.S.C (10th)</td>
                        <td>Good Shepherd English Medium School</td>
                        <td>2017</td>
                        <td>Percentage: 9.3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Education;
