import "./sty.css"
const SeSTAbuttons=()=> {
    return (
        <>
<div class="sels">

<a className="topic-headings" href="/sestaconsolidation"><button>Consolidated SeSTA</button></a>


        <div class="button-containers">

          <a href="/nptelcertification"><button class="menu-buttons" data-category="NPTEL Certification">NPTEL Certification</button></a>
          <a href="/onlinecertification"><button class="menu-buttons" data-category="Online  Certification">Online  Certification</button></a>
          <a href="/studenttechtalks"><button class="menu-buttons" data-category="Students TechTalks(ST2)">Students TechTalks(ST2)</button></a>
          <a href="/studentsparticipation"><button class="menu-buttons" data-category="Students Participation">Students Participation</button></a>
          <a href="/intership"><button class="menu-buttons" data-category="Internship">Internship</button></a>
          <a href="/valueadded"><button class="menu-buttons" data-category="VAC">VAC</button></a>
          <a href="/studenttechtalk"><button class="menu-buttons" data-category="Student TechTalk">Student TechTalk</button></a>
          </div>
        <a className="topic-headings" href="/sesta/addForm"><button class="views" id="addButton">+ Add</button></a>
</div>

</>
    );
  }
  
  export default SeSTAbuttons;