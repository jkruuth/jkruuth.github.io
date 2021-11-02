const Skills = ({notes}) => (
    <div>
      <h1>Skillset</h1>
      <p>I have gained most of my skills through my studies and some by trying new things on my own.</p>
      <p>Listed below is a stack of my skillset</p>
      <div>
        <div className="stack_content">
        <h2 className="skill_title">Java</h2>
       <div className="progress">
        <div
         className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
       </div>
       <p>One of the most used languages ​​for me through my studies</p>
       </div>
       <div className="stack_content">
       <h2 className="skill_title">C#</h2>
       <div className="progress">
        <div
         className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
       </div>
       <p>One of the most used languages ​​for me through my studies</p>
       </div>
       <div className="stack_content">
       <h2 className="skill_title">JavaScript</h2>
       <div className="progress">
        <div
         className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
       </div>
       <p>Modern JavaScript features. Most of the skills acquired from Full Stack Open</p>
       </div>
       <div className="stack_content">
        <h2 className="skill_title">React</h2>
       <div className="progress">
        <div
         className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
       </div>
       <p>Common hooks, event handling and so on. Most of the skills acquired from Full Stack Open</p>
       </div>
       <div className="stack_content">
        <h2 className="skill_title">GraphQL</h2>
       <div className="progress">
        <div
         className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
       </div>
       <p>Queries, schema, Apollo client</p>
       </div>
       <div className="stack_content">
        <h2 className="skill_title">Haskell</h2>
       <div className="progress">
        <div
         className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
       </div>
       <p>Very basics of Haskell</p>
       </div>
      </div>
    </div>
  )

export default Skills