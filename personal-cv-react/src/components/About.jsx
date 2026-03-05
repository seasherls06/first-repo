import Card from "./Card";

export default function About() {
  return (
    <>
      <Card>
        <img src="images/profile.jpg" alt="Profile photo" width="130px" height="190px" />
	<h2>Sherly Salinas</h2>
        <p>IT Student | Web Systems and Technologies</p>
        <p>
          Email: <a href="mailto:salinas.sherly06@gmail.com">salinas.sherly06@gmail.com</a>
          <br />
          GitHub: <a href="https://github.com/seasherls06" target="_blank" rel="noreferrer">github.com</a>
        </p>
      </Card>
      <Card title="About Me">
        <p>just trying to figure things out, learn along the way, and do my best—one step at a time.</p>
      </Card>
    </>
  );
}