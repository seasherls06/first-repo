import { useState } from "react";

export default function Education() {
  return (
    <section className="card">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Institution</th>
            <th>Year Graduate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Science in Information Technology</td>
            <td>College of Information Technology and Computing, USTP – CDO Campus</td>
            <td>2028</td>
          </tr>
          <tr>
            <td>Senior High School</td>
            <td>Liceo de Cagayan University</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Junior High School</td>
            <td>Misamis Oriental General Comprehensive High School (MOGCHS)</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Elementary</td>
            <td>Consolacion Elementary School</td>
            <td>2016</td>
          </tr>
          <tr>
            <td>Kindergarten</td>
            <td>Kalilangan Baptist Christian Academy (KBCA)</td>
            <td>2010</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}