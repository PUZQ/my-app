export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">About me</h2>
      <div className="about__container">
        <div className="about__photo">
          <img src="/image/мужичок.png" alt="Master portrait" />
        </div>
        <div className="about__desc">
          Alexey Petrov<br />
          <i>Computer master with 12 years of experience</i><br /><br />
          📜 Qualifications and certificates:<br />
          Microsoft Certified Professional (MCP)<br />
          Hardware repair courses at the Specialist training center<br />
          Annual advanced training in IT technologies<br /><br />
          📊 Work statistics:<br />
          1200+ successfully completed orders<br />
          98% of customers recommend my services<br />
          15-30 minutes average travel time in Moscow<br />
          6 months warranty for all types of work<br /><br />
          💼 Work experience:<br />
          2018-present - Private computer technician<br />
          2015-2018 - Senior engineer at the Computer-Service service center<br />
          2012-2015 - Computer Repair Technician at IT-Profi<br />
        </div>
      </div>
    </section>
  );
}
