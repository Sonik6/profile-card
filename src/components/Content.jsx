import { About } from "./About";
import { Contact } from "./Contact";

export function Content() {
  return (
    <main className="main-content">
      <div className="desc">
        <h1>Sławek Gałka</h1>
        <h3>Frontend Developer</h3>
        <h4>galka.slawek6@gmail.com</h4>
      </div>
      <Contact />
      <About />
    </main>
  );
}
